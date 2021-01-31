import React, { useState } from "react"

import Footer from "./Components/DefaultComponents/Footer"
import Home from "./Pages/Home"
import Header from "./Components/DefaultComponents/Header"


export default function App(){
    const [defCategory, setDefCategory] = useState("")
    const [searchMovie, setSearchMovie] = useState("")
    const [list, setList] = useState(false)
    
    return(
        <>
            <Header setSearchMovie={setSearchMovie} setDefCategory={setDefCategory} searchMovie={searchMovie} setList={setList} list={list}/>
            <Home defCategory={defCategory} searchMovie={searchMovie} list={list}/>
            <Footer/>
        </>
    )
}