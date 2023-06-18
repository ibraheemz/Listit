import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion"

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <motion.div 
            className="home"
            key="Home"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ y: window.innerHeight, transition: { duration: 0.1 } }}
        >
            <div className="convertion-main">
                <h1>TRANSFER YOUR PLAYLIST USING LISTIT</h1>
                <p>LISTIT will transfer your favourite music playlist on Youtube and create it on Spotify</p>
                <button id="modalButton" onClick={ () => navigate("/ConvertionModule")} >Let's Strat</button>
            
            </div>
        </motion.div>
    )
}

export default Home