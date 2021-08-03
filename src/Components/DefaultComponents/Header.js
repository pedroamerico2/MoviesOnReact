import React from "react"
import {Navbar, NavDropdown, Nav, Form, FormControl} from "react-bootstrap"
import {Link} from "react-router-dom"


export default function Header(){
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href=""><Link to="/">Hospital</Link ></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="/login">
                            Sair
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}