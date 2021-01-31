import React, {useState} from "react"
import Catalogo from "../Components/Catalogo/Catalogo"
import Lista from "../Components/Lista/Lista"

export default function Home(props){
    const {defCategory, searchMovie, list} = props
    
    return(
        <div className="container-fluid">
            {
            !list?
            <Catalogo searchMovie={searchMovie} defCategory={defCategory}/>
            :
            <Lista searchMovie={searchMovie} defCategory={defCategory}/>
            }
        </div>
    )
}