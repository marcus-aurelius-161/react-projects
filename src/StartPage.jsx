import React from 'react'
import {useNavigate} from "react-router-dom"
import './App.css'
import PenLogo from "./assets/pngegg 1.png"

function StartPage() {
    const navigate = useNavigate();
    return (
      
        <div className='first-page'>
            <img src={PenLogo} alt="" />
            <h1 className='start-text'>Get Started Today</h1>
            <button className='start-button' onClick={() => navigate("/get-started")}>Get Started</button>
        </div>
        
       
    )
}

export default StartPage
