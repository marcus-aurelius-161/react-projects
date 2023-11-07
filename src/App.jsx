import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import StartPage from "./StartPage"
import GetStartedPage from './GetStartedPage'
import LayoutPage from './LayoutPage'
import FormTable from './FormTable'
import ApiPage from './ApiPage'
import { useState } from 'react'

function App() {
  


  return (
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<StartPage/>} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/layout-page" element={<LayoutPage />}>
              <Route index element={<FormTable />} />
              <Route path='api' element={<ApiPage />}/>
              
              </Route> 
                                       
          </Routes>
        </BrowserRouter>
    
  )
}

export default App
