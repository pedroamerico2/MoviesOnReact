import React from "react"
import "./Styles/Home.css"

import Logo from "../Assets/g18-1.png"

import {Form, Button} from "react-bootstrap"

export default function Home(){
    return(
        <div className="container-fluid home">            
            <div className="box">
                <img src={Logo} style={{width: "100px", height: "100px"}} alt="logo"/>
                <div className="box2">
                    <button variant="primary"className="btn-search">
                        <i className="material-icons">search</i>
                    </button>
                    <Form.Control className="search" type="text" placeholder="" />
                </div>
                <nav>
                    <a href="">teste 01</a>
                    <a href="">teste 01</a>
                    <a href="">teste 01</a>
                    <a href="">teste 01</a>
                    <a href="">teste 01</a>
                    <a href="">teste 01</a>
                </nav>
            </div>
        </div>
    )
}