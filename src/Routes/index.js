import React, {useState} from "react"
import {Switch, Route} from "react-router-dom"

import Erro404 from "../Components/Error/Erro404"
import Home from "../Pages/Home"

import "../index.css"



export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={Erro404}/> 
        </Switch>
    )
}