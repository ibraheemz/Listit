import React, { useState, useEffect } from "react"
import axios from "axios";
import CreateSpotifyPlayList from "./CreateSpotifyPlayList"

const GetSpotifyUserId = (convert) => {

    const [spotifyUserId, setSpotifyUserId] = useState("")
    const [token, setToken] = useState(window.localStorage.token)
    useEffect(() => {
        //refreshToken requests then sets new token
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
                window.localStorage.setItem("token", response.data.access_token)
                window.localStorage.setItem("resfresh_token", response.data.resfresh_token)
                console.log("refreshToken is set: ", response)
            })
        }
        //Get Spotify User Id
        if(convert) {
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
    }, [token])
    
    if(spotifyUserId) {
        return <CreateSpotifyPlayList spotifyUserId={spotifyUserId} />
    }
    return <></>
}
export default GetSpotifyUserId