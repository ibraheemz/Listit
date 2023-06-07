import React, { useState } from "react";
import axios from "axios";

const Intro = () => {
    const [playlistLink, setPlaylistLink] = useState("");
    const token = window.localStorage.getItem("token");
    var playlistSongsInfo = [];
    var spotifyUserId = "";

    const handleInput = (e) => {
        setInputValue(e.target.value)
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