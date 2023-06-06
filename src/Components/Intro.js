import React, { useState } from "react";

const Intro = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const showModal = () => {
        document.getElementById("myModal").style.display = "flex";
    }
    const closeModal = () => {
        document.getElementById("myModal").style.display = "none";
    }

    document.addEventListener('click', function(event) {
        if (event.target !== document.getElementById('myModal')
        && event.target !== document.getElementById('dontClose')
        && event.target !== document.getElementById('modalButton') ) {
        closeModal();
        }
    })
  
    return (
        <div className="intro-main">
            <h1>TRANSFER YOUR PLAYLIST USING LISTIT</h1>
            <p>LISTIT will transfer your favourite music playlist on Youtube and create it on Spotify</p>
            <button id="modalButton" onClick={showModal} >Let's Strat</button>

            <div id="myModal" className="modal">
                <form className="getLinkForm" name="getLinkForm" >
                    <div className="modelInputWrapper">
                        <label for="getLinkInput" className="modal_form_label">Youtube Link</label>
                        <input className="modalInput" id="dontClose" type="text" name="getLinkInput" value={inputValue} onChange={ e => handleInput(e)}/>
                    </div>
                    
                    <input className="modalSubmit" id="dontClose" type="submit" value="Convert" />
                </form>
            </div>

        </div>
    )
}

export default Intro