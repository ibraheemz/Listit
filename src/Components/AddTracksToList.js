import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Toast } from "./utils"
import Swal from "sweetalert2"
import axios from "axios";
import { PlayListNameContext } from "./ConversionModal"

const AddTracksToList = ({ spotifyPlaylistId, tracksUri }) => {
    const navigate = useNavigate()
    const playlistName = useContext(PlayListNameContext)

    useEffect(() => {
        spotifyPlaylistId &&
        tracksUri.length &&
        addTracksToList(tracksUri, spotifyPlaylistId)
        console.log(`tracksUri.length: ${tracksUri.length}`)
    },[])

    const addTracksToList = (tracksUri, spotifyPlaylistId) => {
        const axiosOptions = {
            method: 'POST',
            url: `https://api.spotify.com/v1/playlists/${spotifyPlaylistId}/tracks`,
            headers: {
                    Authorization: `Bearer ${window.localStorage.token}`
            },
            data: {
                "uris": tracksUri,
            }
                
        }
        console.log("Spotify URIs length is: ", tracksUri.length)
        axios(axiosOptions).then((response) => {
            if(response.status === 201 || response.status === 200)  {
                console.log("addTracksToList func successfully done and response status is: ", response.status)
                Toast.fire({
                    icon: 'success',
                    title: playlistName ? ` ${playlistName} Playlist successfully created!` : "Playlist successfully created!",
                    position: 'top'
                })
            }
        }).catch((error) => {
            console.log("addTracksToList func wasn't able to add this track: ", error)
            // if(error && error.response.data.message === "The access token expired") {
            //     Toast.fire({
            //         icon: 'warning',
            //         title: 'Your session has expired, please login again to continue',
            //         position: 'top'
            //     })
            //     navigate("/Home")
            // } else {
                Toast.fire({
                    icon: 'warning',
                    title: 'An error has occured',
                    position: 'top'
                })
            // }
        })     
        // navigate("/Home")  
    }

    // const addTracksToList = (tracksUri, spotifyPlaylistId) => {
    //     const axiosOptions = {
    //         method: 'POST',
    //         url: `https://api.spotify.com/v1/playlists/${spotifyPlaylistId}/tracks`,
    //         headers: {
    //             Authorization: `Bearer ${window.localStorage.token}`
    //         },
    //         data: {
    //             "uris": tracksUri,
    //         }
            
    //     }
    //     if(tracksUri.length)  {
    //         console.log("Spotify URIs length is: ", tracksUri.length)
    //         axios(axiosOptions).then((response) => {
    //             if(response.status === 201 || response.status === 200)  {
    //                 console.log("addTracksToList func successfully done and response status is: ", response.status)
    //                 Toast.fire({
    //                     icon: 'success',
    //                     title: playlistName ? ` ${playlistName} Playlist successfully created!` : "Playlist successfully created!",
    //                     position: 'top'
    //                 })
    //             }
    //         }).catch((error) => {
    //             console.log("addTracksToList func wasn't able to add this track: ", error)
    //             if(error.response.data.message === "The access token expired") {
    //                 Toast.fire({
    //                     icon: 'warning',
    //                     title: 'Your session has expired, please login again to continue',
    //                     position: 'top'
    //                 })
    //             }
    //         })
    //         navigate("/Home")
    //     } else {
    //         Swal.fire(
    //             'Ooops!',
    //             'There has been an error creating this one! please try again',
    //             'error'
    //         )
    //     }
        
    // }

    return <></>
}
export default AddTracksToList