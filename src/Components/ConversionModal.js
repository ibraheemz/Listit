import React, { useEffect, useState, createContext} from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import Swal from "sweetalert2"
import GetSpotifyUserId from "./GetSpotifyUserId"

export const PlayListNameContext = createContext(null)
export const PlayListIdContext = createContext(null)


const ConversionModal = () => {
    const [token, setToken] = useState("")
    const [playlistLink, setPlaylistLink] = useState("")
    const [ytPlayListId, setYtPlayListId] = useState("")
    const [playlistName, setPlaylistName] = useState("")
    const [convert, setConvert] = useState(false) 

    const navigate = useNavigate()

         
    useEffect(() => {
        setToken(window.localStorage.getItem("token"))
    },[token])

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
            setYtPlayListId(playListId)
            console.log("Play List Id: ", playListId);
            e.preventDefault()
            setConvert(!convert)
            // getSpotifyUserId()
            // getPlaylistInfo(playListId)
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

    window.onclick = function(event) {
        if (event.target === document.getElementById("modal-page-id")) {
          navigate("/Home")
        }
      }

    return (
        <PlayListNameContext.Provider value={playlistName}>
            <PlayListIdContext.Provider value={ytPlayListId}>
                <motion.div 
                    className="modal-page"
                    id="modal-page-id"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className="modal-wrapper">
                        <div className="modalCloseSign" onClick={ () => navigate("/Home")}>
                            <span className="modalCloseCross" role="x-button" aria-hidden="true">&times;</span>
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
                    </div>
                </motion.div>
                {
                    convert 
                    ? <GetSpotifyUserId /> 
                    : <></>
                }
            </PlayListIdContext.Provider>
        </PlayListNameContext.Provider>
    )
}

export default ConversionModal