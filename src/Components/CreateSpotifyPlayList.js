import React, { useEffect,useContext, useState } from "react"
import axios from "axios";
import AddTracksToList from "./AddTracksToList"
import { PlayListNameContext, PlayListIdContext } from "./ConversionModal"

const CreateSpotifyPlayList = ({ spotifyUserId }) => {
    const [spotifyPlaylistId, setSpotifyPlaylistId] = useState("")
    const [googleToken, setGoogleToken] = useState("")
    const [playlistTracksnames, setPlaylistTracksnames] = useState([])

    const playlistName = useContext(PlayListNameContext)
    const ytPlayListId = useContext(PlayListIdContext)
    
    //set google token
    useEffect(() => {
        axios.get("http://localhost:8888/googleToken").then((response) => {
            setGoogleToken(response.data)
        })
    },[])
    useEffect(() => {
        //Create Spotify Playlist and set Spotify playlist Id
            const axiosOptions = {
                method: 'POST',
                url: `https://api.spotify.com/v1/users/${spotifyUserId}/playlists`,
                headers: {
                  Authorization: `Bearer ${window.localStorage.token}`,
                  'Content-Type': 'application/json',
                },
                data: {
                  name: !playlistName ? 'LISTIT' : playlistName,
                  description: 'Your Youtube Playlist',
                  public: false,
                  collaborative: false
                }
            }
            !spotifyPlaylistId &&     
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
    },[])
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
                    
            })();
    }, [googleToken])

    if(spotifyPlaylistId && playlistTracksnames){
        return <AddTracksToList spotifyPlaylistId={spotifyPlaylistId} playlistTracksnames={playlistTracksnames} />
    }
    return <></>
}
export default CreateSpotifyPlayList