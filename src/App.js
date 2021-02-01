import React, { useState } from "react"
import {BrowserRouter} from "react-router-dom"

import Routes from "./Routes"

import Header from "./Components/DefaultComponents/Header"
import Footer from "./Components/DefaultComponents/Footer"

export default function App(){
    return(
        <BrowserRouter> 
            <Header />        
            <Routes />
            <Footer/> 
        </BrowserRouter>
    )
}