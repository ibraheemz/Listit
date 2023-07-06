import React, { useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion/dist/framer-motion";
import Swal from "sweetalert2"
import { Toast } from "./utils"

const ConversionModal = () => {
    const [token, setToken] = useState("")
    const [playlistLink, setPlaylistLink] = useState("")
    const [playlistName, setPlaylistName] = useState("")
    const [googleToken, setGoogleToken] = useState("")
    const [spotifyUserId, setSpotifyUserId] = useState("")
    const [spotifyPlaylistId, setSpotifyPlaylistId] = useState("")
    const [playlistTracksnames, setPlaylistTracksnames] = useState([])
    const [tracksUri, setTracksUri] = useState([])
    const navigate = useNavigate()

   
    useEffect(() => {
        setToken(window.localStorage.getItem("token"))
    },[token])
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
        spotifyUserId.length &&
        playlistTracksnames &&
        getTracksUri()
    },[playlistTracksnames, spotifyPlaylistId])
    //once we get tracksUri, add Tracks to spotify playlist
    useEffect(() => {
        spotifyUserId.length &&
        spotifyPlaylistId &&
        tracksUri &&
        addTracksToList(tracksUri)
        return(setTracksUri([]))
    },[spotifyPlaylistId])

    const handleSpotifyAlert = () => {
        Swal.fire({
          title: 'You are not logged in',
          text: 'Please make sure you are logged in with your spotify account',
          icon: 'warning',
          confirmButtonText: 'Alright!',
          confirmButtonColor: '#ea1538'
        })
    };
    const handleYoutubeAlert = () => {
        Swal.fire({
          title: 'Link is incorrect',
          text: 'Please make sure you have entered a valid Youtube playlist link',
          icon: 'warning',
          confirmButtonText: 'Try Again!',
          confirmButtonColor: '#ea1538'
        })
    }
    const handleInput = (e) => {
        setPlaylistLink(e.target.value)
    }
    const handleNameInput = (e) => {
        setPlaylistName(e.target.value)
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
            handleYoutubeAlert()
            return;
        }
          
        //check if user is logged in and token is stored in localStorage
        if(!window.localStorage.token) {
            handleSpotifyAlert()
        } else {
            const playListId = playlistLink.slice(playlistLink.indexOf("list=") + 5, playlistLink.indexOf("list=") + 39)
            console.log("Play List Id: ", playListId);
            e.preventDefault()
            getSpotifyUserId()
            getPlaylistInfo(playListId)
        }
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
        
    const refreshToken = () => {
        const refresh_token = window.localStorage.getItem("refresh_token")
        const axiosOptions = {
            url: "http://localhost:8888/refresh_token",
            method: "GET",
            params: {
                "refresh_token": refresh_token
            }
        }
        axios(axiosOptions).then((response) => {
            setToken(response.data.access_token)
            console.log("refreshToken is set: ", response)
            getSpotifyUserId()
        })
    }
        //Get Spotify User Id  || Still no check if logged in #!!!!###
    const getSpotifyUserId = () => {
        const url = "https://api.spotify.com/v1/me"
        const axiosOptions = {
            url: url,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios(axiosOptions).then((response) => {
            setSpotifyUserId(response.data.id)
        }).catch((error) => {
            console.log(error)
            window.localStorage.setItem("token", "")
            refreshToken()
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
              name: !playlistName.length ? 'LISTIT' : playlistName,
              description: 'Your Youtube Playlist',
              public: false,
              collaborative: false
            }
          }    
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
        if(tracksUri.length)  {
            console.log("Spotify URIs length is: ", tracksUri.length)
            axios(axiosOptions).then((response) => {
                if(response.status === 201 || response.status === 200)  {
                    console.log("addTracksToList func successfully done and response status is: ", response.status)
                    Swal.fire(
                        'Done!',
                        'Your playlist has been created.',
                        'success'
                    )
                }
            }).catch((error) => {
                console.log("addTracksToList func wasn't able to add this track: ", error)
                if(error.response.data.message === "The access token expired") {
                    Toast.fire({
                        icon: 'warning',
                        title: 'Your session has expired, please login again to continue'
                    })
                }
            })
            navigate("/Home")
        } else {
            Swal.fire(
                'Sorry',
                'There has been an error creating this one! please try again',
                'error'
            )
        }
        
    }
    //routing animation
    const containerVariants = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5 }
        },
        exit: {
          opacity: 0,
          transition: { ease: 'easeInOut' }
        }
    }

    return (
        <motion.div 
            className="modal-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="modalCloseSign" onClick={ () => navigate("/Home")}>
                <span className="modalCloseCross" role="x-button" aria-hidden="true">X</span>
            </div>
            <div className="convertion-main">
                <div id="myModal" >
                    <form className="getLinkForm">
                        <div className="modelInputWrapper">
                            <div className="link_inbt_lbl">
                                <label htmlFor="mdlInput" id="mdlLbl" className="modal_form_label">Youtube Link</label>
                                <input className="modalInput" id="mdlInput" type="text" placeholder="Enter YouTube playlist link here" value={playlistLink} onChange={ e => handleInput(e)}/>
                            </div>
                            {
                                playlistLink
                                ? <button className="modalSubmit" id="CvBtn" onClick={(e) => handleLink(e)} >Convert</button>
                                : <button disabled className="modalSubmit"  id="CvBtn">Convert</button> 
                            }
                        </div>
                        <div className="nameInputWrapper">
                            <label className="listname_lbl" htmlFor="nameInput">Name your playlist</label>
                            <input className="modalInput" id="nameInput" placeholder="LISTIT is set by default . . ."   value={playlistName} onChange={ e => handleNameInput(e)}></input>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default ConversionModal