import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Toast } from "./utils"
import Swal from "sweetalert2"
import axios from "axios";


const AddTracksToList = ({ spotifyPlaylistId, playlistTracksnames }) => {
    const [tracksUri, setTracksUri] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        //getTracksUri
        playlistTracksnames &&
        getTracksUri()
        
    },[])
    
    useEffect(() => {
        //addTracksToList
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
        if(tracksUri.length)  {
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
                if(error.response.data.message === "The access token expired") {
                    Toast.fire({
                        icon: 'warning',
                        title: 'Your session has expired, please login again to continue',
                        position: 'top'
                    })
                }
            })
            navigate("/Home")
        } else {
            Swal.fire(
                'Ooops!',
                'There has been an error creating this one! please try again',
                'error'
            )
        }
    },[tracksUri])

    async function settingUris (track) {
        const url = "https://api.spotify.com/v1/search"
        const params = {
            type: "track",
            limit: 1,
            q: track
        }
        const headers = {
            Authorization: `Bearer ${window.localStorage.token}`
        }
        const response = await axios.get(url, {
            params: params,
            headers: headers
        })
        setTracksUri(currentUris => [...currentUris, response.data.tracks.items[0].uri])
        response.error && console.log(response.error)
    }
    const getTracksUri = () => {
        playlistTracksnames.forEach((trackName) => {
        settingUris(trackName)
        })
    }

    return <></>
}
export default AddTracksToList