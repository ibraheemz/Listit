import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"

const Header = () => {
    
    const [token, setToken] = useState("")
    const [timerId, setTimerId] = useState(null)
    const navigate = useNavigate();

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
        setToken(token)
    }, [])

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
      
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("refresh_token")
        Toast.fire({
            icon: 'success',
            title: 'Logged out successfully'
        })
    }
    const logoutAuto = () => {
        setToken("")
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("refresh_token")
        Toast.fire({
            icon: 'warning',
            title: 'Your session has ended, please login again to continue'
        })
    }

    return (
        <div className='nav-wrapper'>
            <nav>
                <h2 data-testid="logo_header" className='logo'>LIST<span>IT</span></h2>
                <ul data-testid="nav_list">
                    <li>
                        <button data-testid="nav_to_home" onClick={() => navigate('/Home')}>Home</button>
                    </li>
                    <li>
                        <button data-testid="nav_to_about" onClick={() => navigate('/About')}>About</button>
                    </li>
                    <li>
                        <button data-testid="nav_to_contact" onClick={() => navigate('/ContactUs')}>Contact Us</button>
                    </li>
                    <li>
                        <button data-testid="nav_to_help" onClick={() => navigate('/Help')}>Help</button>
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