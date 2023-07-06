import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Toast, ToastNoTimer } from './utils';
const Header = () => {
    
    const [token, setToken] = useState("")
    const [timerId, setTimerId] = useState(null)

    useEffect(() => {
      setTimerId(setTimeout(logoutAuto,3600000)) // 1hr | log user out after 1h of loggin in 

      return () => {
        clearTimeout(timerId)
      }
    }, [])
    
    useEffect(() => {
        const pathname = window.location.pathname
        let token = window.localStorage.getItem("token")
        if (!token && pathname[1] === "a") {       // if the user is not already logged in, and clicked log in, the access token came back in the pathname, set it and show notification
            token = pathname.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            const refresh_token = pathname.substring(1).split("&").find(elem => elem.startsWith("refresh_token")).split("=")[1]
            window.location.pathname = "/"
            window.localStorage.setItem("token", token)
            window.localStorage.setItem("refresh_token", refresh_token)
        } else {
            token = window.localStorage.token
        }
        if(token){
            setToken(token)
            Toast.fire({
            icon: 'success',
            title: 'Logged in successfully',
            position: 'top'
            })
        } else {
            setToken(token)
        }
    }, [])

    window.addEventListener('beforeunload', function() {  //when the page closes, clear token and refresh token
        localStorage.setItem("token", '')
        localStorage.setItem("refresh_token", '')
    });

    
    const removeAuth = () => {
        setToken("")
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("refresh_token")
    }
    const logout = () => {
        removeAuth()
        Toast.fire({
            icon: 'success',
            title: 'Logged out successfully',
            position: 'top'
        })
    }
    const logoutAuto = () => {
        removeAuth()
        ToastNoTimer.fire({
            icon: 'warning',
            title: 'Your session has ended, please login again to continue',
            position: "top"
        })
    }

    return (
        <div className='nav-wrapper'>
            <nav>
                <h2 data-testid="logo_header" className='logo'>LIST<span>IT</span></h2>
                <ul data-testid="nav_list">
                    <li>
                        <Link className="nav-links" data-testid="nav_to_home" to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-links" data-testid="nav_to_about" to="/About">About</Link>
                    </li>
                    <li>
                        <Link className="nav-links" data-testid="nav_to_help" to="/Help">Help</Link>
                    </li>
                    <li>
                        <Link className="nav-links" data-testid="nav_to_contact" to="/ContactUs">Contact Us</Link>
                    </li>
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