import React, {useState} from "react";
import {Container, Row, Button, Navbar, Nav, NavDropdown, FormControl, Form} from "react-bootstrap"

import ModalAdd from "../Components/ModalAdd/ModalAdd"

import Movies from "../Data/filmes.js"

import Header from "../Components/DefaultComponents/Header"
import Cards from "../Components/Cards/Cards"
import List from "../Components/Lista/Lista"
import Footer from "../Components/DefaultComponents/Footer"

export default function Catalog(){
    
    const [listOrCards, setListOrCards] = useState(false)

    const [searchOnCatalog, setSerachOnCatalog] = useState("")

    const [showModalAdd, setShowModalAdd] = useState(false)

    const [categ, setCateg] = useState("")

    const [genero, setGenero] = useState("")

    const [dateMin, setDateMin] = useState("")

    const [dateMax, setDateMax] = useState("")

    function teste (dateMin, dateMax){
        alert(dateMin+"/"+dateMax)
    }
    
    return(
        <>  <ModalAdd
                show={showModalAdd}
                onHide={() => setShowModalAdd(!showModalAdd)}
                Movies={Movies}
            />
            <Header/>
            <Container className="w-80">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sub-nav">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Button variant="succcess" onClick={()=>(setListOrCards(!listOrCards))}>
                            <i className="material-icons" style={{color: "white"}}>
                                {
                                    listOrCards?
                                    "view_module"
                                    :
                                    "view_list"
                                }
                            </i>
                        </Button>
                        <Button variant="succcess" onClick={()=>(setShowModalAdd(!showModalAdd))}>
                            <i className="material-icons" style={{color: "white"}}>
                                library_add
                            </i>
                        </Button>
                        <Button variant="succcess" onClick={()=>(teste(dateMin, dateMax))}>
                            <i className="material-icons" style={{color: "white"}}>
                                spellcheck
                            </i>
                        </Button>
                        
                        <NavDropdown title="Genero" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={()=>{setGenero("")}}>Todos</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setGenero("acao")}}>Acao</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setGenero("drama")}}>Drama</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setGenero("crime")}}>Crime</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setGenero("animacao")}}>Animacao</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setGenero("comedia")}}>Comedia</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setGenero("acao")}}>Aventura</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Categoria" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={()=>{setCateg("")}}>Todos</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setCateg("filme")}}>Filme</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setCateg("serie")}}>Serie</NavDropdown.Item>
                        </NavDropdown>
                        
                        <Form.Control style={{marginRight: "15px"}} type="date" value={dateMin} onChange={(element)=>{setDateMin(element.target.value)}}/>
                        <Form.Control type="date" value={dateMax} onChange={(element)=>{setDateMax(element.target.value)}}/>
                        </Nav>
                        <Nav>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchOnCatalog} onChange={(e)=>setSerachOnCatalog(e.target.value)}/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row>
                    {
                        !listOrCards?
                        <Cards searchOnCatalog={searchOnCatalog} categ={categ} dateMin={dateMin} dateMax={dateMax} genero={genero}/>
                        :
                        <List searchOnCatalog={searchOnCatalog} categ={categ} dateMin={dateMin} dateMax={dateMax} genero={genero}/>
                    }
                </Row>
            </Container>
            <Footer/>
        </>
    )
}