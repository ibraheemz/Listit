import React, { useEffect,useContext, useState } from "react"
import axios from "axios"
import AddTracksToList from "./AddTracksToList"
import { PlayListNameContext } from "./ConversionModal"

const CreateSpotifyPlayList = ({ spotifyUserId, playlistTracksnames }) => {
    const [spotifyPlaylistId, setSpotifyPlaylistId] = useState("")
    const [tracksUri, setTracksUri] = useState([])

    const playlistName = useContext(PlayListNameContext)
    
    useEffect(() => {
    //Create Spotify Playlist and set Spotify playlist Id
        spotifyUserId.length &&
        createSpotifyPlaylist(spotifyUserId)
    },[spotifyUserId])

    useEffect(() => {
        playlistTracksnames.length &&
        playlistTracksnames.forEach((track) => {
            const url = "https://api.spotify.com/v1/search"
            const params = {
                type: "track",
                limit: 1,
                q: track
            }
            const headers = {
                Authorization: `Bearer ${window.localStorage.token}`
            }
            axios.get(url, {
                params: params,
                headers: headers
            }).then((response) => {
                setTracksUri(currentUris => [...currentUris, response.data.tracks.items[0].uri])
            }).catch((err) => {
                console.log(err)
            })
        })
        console.log("AddTracksToList component getTracksUri useEfect")
        
    }, [playlistTracksnames])

    const createSpotifyPlaylist = (spotifyUserId) => {
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
        //!spotifyPlaylistId &&
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
        console.log("CreateSpotifyPlayList Component create spotify playlist useEffect")
    }

    if(spotifyPlaylistId && tracksUri.length === playlistTracksnames.length){
        console.log(`CreateSpotifyPlayList Component return spotifyPlaylistId: ${spotifyPlaylistId} playlistTracksnames.length: ${tracksUri.length}`)
        return <AddTracksToList spotifyPlaylistId={spotifyPlaylistId} tracksUri={tracksUri} />
    }
    return <></>
}
export default CreateSpotifyPlayList