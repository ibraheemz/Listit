import React, { useEffect, useState } from "react";
import axios from "axios";

const ConvertionModule = () => {
    const [playlistLink, setPlaylistLink] = useState("");
    const [googleToken, setGoogleToken] = useState("")
    const [spotifyUserId, setSpotifyUserId] = useState("")
    const [spotifyPlaylistId, setSpotifyPlaylistId] = useState("")
    const [playlistTracksnames, setPlaylistTracksnames] = useState([])
    const [tracksUri, setTracksUri] = useState([])

    var token = window.localStorage.getItem("token");

    useEffect(() => {
        axios.get("http://localhost:8888/googleToken").then((response) => {
            setGoogleToken(response.data)
        })
    },[])

    useEffect(() => {
        spotifyUserId.length &&
        createSpotifyPlayList()
    },[spotifyUserId])
    //once we get playlistTracksnames, getTracksUri
    useEffect(() => {
        playlistTracksnames &&
        getTracksUri()
    },[playlistTracksnames, spotifyPlaylistId])
    //once we get tracksUri, add Tracks to spotify playlist
    useEffect(() => {
        spotifyPlaylistId &&
        tracksUri &&
        addTracksToList(tracksUri)
        return(setTracksUri([]))
    },[spotifyPlaylistId])

    const handleInput = (e) => {
        setPlaylistLink(e.target.value)
    }
    //get Youtube playlist id
    const handleLink = (e) => {

        //check if the user input is a valid link if not, alert and disable convert button
        function isYoutubePlaylistLink(url) {
            const regex = /&list=([a-zA-Z0-9_-]{18})/;
            return regex.test(url);
        }
        if(!isYoutubePlaylistLink(playlistLink)) {
            e.preventDefault()
            window.alert("Please make sure you entered a valid Youtube playlist Link")
            return;
            // handleOpen({msg: "Please make sure you entered a valid Youtube playlist Link", Button1: "Try again"})
        }
          
        //check if user is logged in and token is stored in localStorage
        if(!window.localStorage.token) {
            window.alert("please login with your spotify account")
        } else {
            const playListId = playlistLink.slice(playlistLink.indexOf("list=") + 5, playlistLink.indexOf("list=") + 39)
            console.log("Play List Id: ", playListId);
            e.preventDefault()
            getSpotifyUserId()
            getPlaylistInfo(playListId)
        }
        //slice the link from list= to 34 chars after
        //the playlist's id  string length is 34
    }

    const refreshToken = () => {
        axios.get("http://localhost:8888/refresh_token").then((response) => {
            token = response.access_token
            console.log("refreshToken is set: ", response.access_token)
            getSpotifyUserId()
        })
    }

    //get songs info from Youtube playlist link and set it as an array for playlistSongsInfo
    const getPlaylistInfo = (playListId) => {
        const url = "https://www.googleapis.com/youtube/v3/playlistItems"
        
        const params = {
            key: googleToken,
            part: "snippet",
            playlistId: playListId,
            maxResults: 50
        }
        
         axios.get(url, { params })
            .then(response => {
                if(response.status === 200) {
                    let playlistSongsInfo = [];
                    response.data.items.forEach((song) => {
                        playlistSongsInfo.push(song.snippet.title)
                    })
                    setPlaylistTracksnames(playlistSongsInfo)
                    console.log("Youtube play list tracks info done")
                } else {
                    console.log("getPlaylistInfo call wasn't successful: ", response.error)
                }
            }).catch((error) => {
                console.log(error)
            })

    }
    //Get Spotify User Id  || Still no check if logged in #!!!!###
    const getSpotifyUserId = () => {
        
        const url = "https://api.spotify.com/v1/me"

        axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if(response.status === 200) {
                    setSpotifyUserId(response.data.id)
                } else if(response.data.error.message === 'The access token expired'){
                    refreshToken()
                    console.log("getSpotifyUserId call wasn't successful: ", response.error)
                }
            }).catch((error) => {
                console.log(error)
            })
    }
    //Make a new playlist on user's Spotify Account
    const createSpotifyPlayList = () => {
        const axiosOptions = {
            method: 'POST',
            url: `https://api.spotify.com/v1/users/${spotifyUserId}/playlists`,
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            data: {
              name: 'LISTIT',
              description: 'Your Youtube Playlist',
              public: false,
              collaborative: false
            },
          };    
        axios(axiosOptions).then(response => {
            if(response.data) {
                console.log("createSpotifyPlayList call was successful: ", response.data)
                setSpotifyPlaylistId(response.data.id)
            } else {
                console.log("createSpotifyPlayList call wasn't successful: ", response.error.message)
            }
        }).catch((error) => {
            console.log(error)
            return;
        })
    }
    async function settingUris (track) {
        const url = "https://api.spotify.com/v1/search"
        const params = {
            type: "track",
            limit: 1,
            q: track
        }
        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await axios.get(url, {
            params: params,
            headers: headers
        })
        //uriArray.push(response.data.tracks.items[0].uri)
        setTracksUri(currentUris => [...currentUris, response.data.tracks.items[0].uri])
        response.error && console.log(response.error)
    }
    //get Tracks URIs
    const getTracksUri = () => {
        playlistTracksnames.forEach((track) => {
            settingUris(track)
        })
    }
    //add tracks to spotify playlist 
    const addTracksToList = () => {

            const axiosOptions = {
                method: 'POST',
                url: `https://api.spotify.com/v1/playlists/${spotifyPlaylistId}/tracks`,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: {
                    "uris": tracksUri,
                }
                
            }
            tracksUri.length && 
            console.log("Spotify URIs length is: ", tracksUri.length)
            axios(axiosOptions).then((response) => {
                if(response.status === 201 || response.status === 200)  {
                    console.log("addTracksToList func successfully done and response status is: ", response.status)
                }
                window.alert("All done!, Your playlist is ready.")
                
            }).catch((error) => {
                console.log("addTracksToList func wasn't able to add this track: ", error)
            })
        
        
    }

    const showModal = () => {
        document.getElementById("myModal").style.display = "flex";
    }
    const closeModal = () => {
        document.getElementById("myModal").style.display = "none";
    }

    document.addEventListener('click', function(event) {
        if (event.target !== document.getElementById('myModal')
        && event.target !== document.getElementById('mdlInput')
        && event.target !== document.getElementById('modalButton')
        && event.target !== document.getElementById('CvBtn')
        && event.target !== document.getElementById('mdlLbl')
        ) {
        closeModal();
        }
    })

  
    return (
        <div className="intro-main">
            <h1>TRANSFER YOUR PLAYLIST USING LISTIT</h1>
            <p>LISTIT will transfer your favourite music playlist on Youtube and create it on Spotify</p>
            <button id="modalButton" onClick={showModal} >Let's Strat</button>

            <div id="myModal" className="modal">
                <form className="getLinkForm" name="getLinkForm" >
                    <div className="modelInputWrapper">
                        <label htmlFor="mdlInput" id="mdlLbl" className="modal_form_label">Youtube Link</label>
                        <input className="modalInput" id="mdlInput" type="text" name="getLinkInput" value={playlistLink} onChange={ e => handleInput(e)}/>
                    </div>
                    <button className="modalSubmit" id="CvBtn" onClick={(e) => handleLink(e)} >Convert</button>
                </form>
            </div>
        </div>
    )
}

export default ConvertionModule