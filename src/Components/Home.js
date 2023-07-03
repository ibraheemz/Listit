import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion"

const Home = () => {
    const navigate = useNavigate();
    const containerVariants = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: { delay: 0.8, duration: 0.8 }
        },
        exit: {
          x: '-100vw',
          transition: { ease: 'easeInOut' }
        }
      }
    return (
        <motion.div 
            className="home"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="convertion-main">
                <h1>TRANSFER YOUR PLAYLIST USING LISTIT</h1>
                <p>LISTIT will transfer your favourite music playlist from your Youtube to your Spotify</p>
                <button id="modalButton" onClick={ () => navigate("/ConversionModule")} >Let's Strat</button>
            
            </div>
        </motion.div>
    )
}

export default Home