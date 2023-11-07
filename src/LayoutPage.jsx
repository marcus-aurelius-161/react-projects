import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ApiPage from "./ApiPage";

function LayoutPage() {
    const uploadedPhoto = localStorage.getItem("photo")
    const userName = localStorage.getItem("name")
    return(
        <div className="form-page">
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
                        
                    <img src={uploadedPhoto} alt="" className="uploaded-photo" />
                    </div>
            </nav>          
            
                <Outlet />
        </div>
        
    )
}

export default LayoutPage