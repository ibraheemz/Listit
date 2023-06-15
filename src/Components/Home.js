import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="convertion-main">
                <h1>TRANSFER YOUR PLAYLIST USING LISTIT</h1>
                <p>LISTIT will transfer your favourite music playlist on Youtube and create it on Spotify</p>
                <button id="modalButton" onClick={ () => navigate("/ConvertionModule")} >Let's Strat</button>
            
            </div>
        </div>
    )
}

export default Home