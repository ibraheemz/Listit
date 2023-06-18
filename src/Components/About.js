import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
const About = () => {
    return(
        <motion.div 
            className="about"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <h1 className="about_header">About</h1>
            <p className="about_para">
                This web app allows you to easily transfer your favorite YouTube playlists to your Spotify account. Simply enter the URL of your YouTube playlist, and the app will create a new playlist on your Spotify account with the same songs. You can also choose to rename the playlist.
                <br />
                To use <b>LISTIT</b>, you will need to log in to your Spotify account. This is done to ensure that <b>LISTIT</b> only creates playlists on your account, and not on someone else's account.
                <br />
                <b>LISTIT</b> is free to use, and it is easy to use. Simply enter the URL of your YouTube playlist, and <b>LISTIT</b> will do the rest.
                <br />
                We hope you enjoy using our app!
            </p>

            <ul>
                <b>LISTIT</b> is 
                <li>easy to use and straight to the point.</li>
                <li>free to use.</li>
                <li>compatible with all major browsers.</li>
                <li>compatible with smart phones.</li>
                <li>regularly updated with new features and bug fixes.</li>
                <li>highly secured.</li>
            </ul>
            <footer>We hope you enjoy your new Spotify playlist! Please feel free to give us <a href="#">feedback</a></footer>
        </motion.div>
    )
}

export default About