import React from 'react';
import { useEffect, useState } from 'react';

const Header = () => {
    
    const [token, setToken] = useState("")

    useEffect(() => {
        const pathname = window.location.pathname
        let token = window.localStorage.getItem("token")

        if (!token && pathname[1] === "a") {
            token = pathname.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.pathname = ""
            window.localStorage.setItem("token", token)
        } else {
            token = window.localStorage.token
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
                    ? <a href="http://localhost:8888/login" className='login-button'>Login with Spotify</a>
                    : <button className='login-button' onClick={logout}>Log out</button>
                        
                }
                
            </nav>
        </div>
    )
}
export default Header