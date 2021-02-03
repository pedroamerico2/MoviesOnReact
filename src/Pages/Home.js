import React, {useState}from "react"
import "./Styles/Home.css"

import Logo from "../Assets/g18-1.png"

import {Form, Nav} from "react-bootstrap"

import {Link} from "react-router-dom"

export default function Home(){
    const[searchHome, setSearchHome] = useState("")
    return(
        <div className="container-fluid home">            
            <div className="box">
                <img src={Logo} style={{width: "100px", height: "100px"}} alt="logo"/>
                <div className="box2">
                    <Form.Control className="search" type="text" placeholder="" value={searchHome} onChange={(e)=>setSearchHome(e.target.value)}/>
                    <button variant="primary"className="btn-search">
                        <i className="material-icons">
                            <Link to={{
                                pathname: "/catalogo",
                                searching: { result: searchHome }
                            }}>search</Link>
                        </i>
                    </button>
                </div>                
            </div>
            <div className="subNav">
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/catalogo">Catalogo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}