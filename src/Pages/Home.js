import React from "react"
import "./Styles/Home.css"

import Logo from "../Assets/g18-1.png"

import {Form, Nav} from "react-bootstrap"

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
            </div>
            <div className="subNav">
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
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