import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ApiPage from "./ApiPage";

function LayoutPage() {
    const uploadedPhoto = localStorage.getItem("photo")
    const userName = localStorage.getItem("name")
    const [popUp, setPopUp] = useState(false);
    const navigate = useNavigate();
    
    const logOut = () => {
        localStorage.removeItem("photo")
        localStorage.removeItem("name")
        navigate("/get-started")
    }
    
    return(
        <div className="form-page">
            {popUp && <div className="pop-up">
                <button className="close-button" onClick={() => setPopUp(false)}>cancel</button>
                <button className="log-out-button" onClick={logOut}>Log out</button>

                </div>}
            <nav className="form-nav-bar">
                <div className="left-nav">

                <Link to="." className="form-text">
                    Form
                </Link> 
                <Link to="api" className="api-text">API</Link>
                
                </div>
                    <div className="user-info-container">

                    <p className="user-name-text">
                        {userName}
                    </p>
                        
                    <img src={uploadedPhoto} alt="" className="uploaded-photo" onClick={() => setPopUp(!popUp)}/>
                    </div>
            </nav>          
            
                <Outlet />
        </div>
        
    )
}

export default LayoutPage