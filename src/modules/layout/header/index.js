import ListitLogo from '../../../assets/LISTIT-3 (1).png'
import React from 'react';

const Header = () => {
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
                <button type='button'>Login</button>
            </nav>
        </div>
    )
}
export default Header