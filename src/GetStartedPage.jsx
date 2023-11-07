import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoIcon from "./assets/photo.png"
import './App.css'

function GetStartedPage () {
    const [photo, setPhoto] = useState(
        localStorage.getItem("image")
      );
    const [name, setName] = useState()
    const navigate = useNavigate();    
            
  
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        console.log(URL.createObjectURL(file))
        setPhoto(URL.createObjectURL(file));
      };

    function  clickHandler () {
      localStorage.setItem("photo", photo);
      localStorage.setItem("name", name);
      navigate("/layout-page")
      }

      const inputNameChange = (event) => {
        const text = event.target.value;
        setName(text)
      }

      const isButtonDisabled = !photo || !name;

    return (
        <div className="get-started-page">
            <div className="sign-in-container">
                <h1 className="get-started-text">Get Started</h1>
                <h2 className="add-photo-text">add a photo</h2>
                <label htmlFor="uploaded-photo" className={`custom-file-upload ${photo ? 'hidden' : ''}`} id="label-id">
                    <img
                      src={photo ? photo : PhotoIcon}
                      alt=""
                      className="upload-icon"
                    />
                  </label>
                  <input
                    type="file"
                    id="uploaded-photo"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handlePhotoChange}
                  />
                <p className="fill-name-text">fill in your name</p>
                <input type="text" name="" id="name" placeholder="your name" onChange={inputNameChange} className="name-input"/>
                <button className="sign-in-button" onClick={clickHandler} disabled={isButtonDisabled} >Sign in</button>
            </div>
        </div>
    )
}

export default GetStartedPage