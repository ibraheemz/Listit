import React from 'react';
import { useEffect, useState } from 'react';

const Header = () => {
    const CLIENT_ID = "71749fb665a1459694d28cfde5964580"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    
    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])



    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <div className='nav-wrapper'>
            <nav>
                <h2 className='logo'>LIST<span>IT</span></h2>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>Help</a></li>
                </ul>
                {
                    !token
                    ? <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className='login-button'>Login with Spotify</a>
                    : <button className='login-button' onClick={logout}>Log out</button>
                        
                }
                
            </nav>
        </div>
    )
}
export default Header