import React, { useState } from "react";
import axios from "axios";

const Intro = () => {
    const [playlistLink, setPlaylistLink] = useState("");
    const token = window.localStorage.getItem("token");
    var playlistSongsInfo = [];
    var spotifyUserId = "";

    const handleInput = (e) => {
        setPlaylistLink(e.target.value)
    }
    //get Youtube playlist id
    const handleLink = (e) => {
        //slice the link from list= to 34 chars after
        //the playlist's id  string length is 34
        const playListId = playlistLink.slice(playlistLink.indexOf("list=") + 5, playlistLink.indexOf("list=") + 39)
        console.log("Play List Id: ", playListId);
        e.preventDefault()

        getPlaylistInfo(playListId)
        getSpotifyUserId()
        createSpotifyPlayList()
    }
    //get songs info from Youtube playlist link and set it as an array for playlistSongsInfo
    const getPlaylistInfo = (playListId) => {
        const url = "https://www.googleapis.com/youtube/v3/playlistItems"
        const params = {
            key: process.env.REACT_APP_API_KEY,
            part: "snippet",
            playlistId: playListId,
            maxResults: 50
        }
         axios.get(url, { params })
            .then(response => {
                if(response.status === 200) {
                    response.data.items.map((song) => {
                        playlistSongsInfo.push(song.snippet.title)
                    })
                } else {
                    console.log("getPlaylistInfo call wasn't successful: ", response.error)
                }
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
                    spotifyUserId = response.data.id
                } else {
                    console.log("getSpotifyUserId call wasn't successful: ", response.error)
                }
            })
    }
    //Make a new playlist on user's Spotify Account
    const createSpotifyPlayList = () => {
        const url = `https://api.spotify.com/v1/users/${spotifyUserId}/playlists`
        const playlistDate = {
            name: "LISTIT",
            descriptipn: "Your Youtube Playlist is here now",
            public: false,
            collaborative: false
        }
        spotifyUserId 
        
            ?axios.post(url, playlistDate, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }

            }).then(response => {
                if(response.status === 200) {
                    console.log("createSpotifyPlayList call was successful: ", response.data)
                } else {
                    console.log("createSpotifyPlayList call wasn't successful: ", response.error.message)
                }
            })
            :console.log("spotifyUserId is not set yet")
    }
    // const createSpotifyPlayList = () => {
    //     const url = `https://api.spotify.com/v1/users/${spotifyUserId}/playlists`
    //     const playlistData = {
    //         name: "LISTIT",
    //         description: "LISTIT playlist description",
    //         public: false
    //     };

    //     axios.post(url, playlistData, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //             ContentType: "application/json"
    //         },
    //     }).then((response) => {
    //     console.log("createSpotifyPlayList: ",response.data);
    //     });
    // }
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

export default Intro