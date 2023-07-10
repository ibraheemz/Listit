import React, { useState, useContext, useEffect } from "react"
import axios from "axios"
import { PlayListIdContext } from "./ConversionModal"
import CreateSpotifyPlayList from "./CreateSpotifyPlayList"

const GetYtListInfo = ({ spotifyUserId }) => {
    const [googleToken, setGoogleToken] = useState("")
    const [playlistTracksnames, setPlaylistTracksnames] = useState([])

    const ytPlayListId = useContext(PlayListIdContext)

    //set google token
    useEffect(() => {
        axios.get("http://localhost:8888/googleToken").then((response) => {
            setGoogleToken(response.data)
            console.log("CreateSpotifyPlayList Component setGoogleToken useEffect")
        })
    },[])
    //Get YT playlist track names
    useEffect(() => { 
        //Get and Set YT playlist Track Names
        googleToken &&
        ytPlayListId &&
        (() => {
            const url = "https://www.googleapis.com/youtube/v3/playlistItems"
            
            const params = {
                key: googleToken,
                part: "snippet",
                playlistId: ytPlayListId,
                maxResults: 50
            }
            
            axios.get(url, { params })
            .then(response => {
                let playlistSongsInfo = [];
                response.data.items.forEach((song) => {
                    playlistSongsInfo.push(song.snippet.title)
                })
                setPlaylistTracksnames(playlistSongsInfo)
                console.log("Youtube play list tracks info done")
                }).catch((error) => {
                    console.log(error)
                })
            console.log("CreateSpotifyPlayList Component YT tracknames useEffect")        
        })();
}, [googleToken])

    

    return (
        <CreateSpotifyPlayList spotifyUserId={spotifyUserId} playlistTracksnames={playlistTracksnames} />
    )
}
export default GetYtListInfo
