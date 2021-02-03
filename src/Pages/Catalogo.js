import React, {useState} from "react";
import {Container, Row, Button, Navbar, Nav, NavDropdown, FormControl, Form} from "react-bootstrap"

import ModalAdd from "../Components/ModalAdd/ModalAdd"

import Header from "../Components/DefaultComponents/Header"
import Cards from "../Components/Cards/Cards"
import List from "../Components/Lista/Lista"
import Footer from "../Components/DefaultComponents/Footer"

export default function Catalog(){
    
    const [listOrCards, setListOrCards] = useState(false)

    const [searchOnCatalog, setSerachOnCatalog] = useState("")

    const [showModalAdd, setShowModalAdd] = useState(false)

    const [categ, setCateg] = useState("")

    const [gen, setGen] = useState("")

    const [dateMin, setDateMin] = useState("")

    const [dateMax, setDateMax] = useState("")

    function teste (dateMin, dateMax){
        alert(dateMin+"/"+dateMax)
    }
    
    return(
        <>  <ModalAdd
                show={showModalAdd}
                onHide={() => setShowModalAdd(!showModalAdd)}
            />
            <Header/>
            <Container className="w-80">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sub-nav">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Button variant="succcess" onClick={()=>(setListOrCards(!listOrCards))}>
                            <i className="material-icons">
                                {
                                    listOrCards?
                                    "view_module"
                                    :
                                    "view_list"
                                }
                            </i>
                        </Button>
                        <Button variant="succcess" onClick={()=>(setShowModalAdd(!showModalAdd))}>
                            <i className="material-icons">
                                library_add
                            </i>
                        </Button>
                        <Button variant="succcess" onClick={()=>(teste(dateMin, dateMax))}>
                            <i className="material-icons">
                                spellcheck
                            </i>
                        </Button>
                        
                        <NavDropdown title="Genero" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={()=>{setGen("")}}>Todos</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setGen("acao")}}>Acao</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setGen("drama")}}>Drama</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setGen("crime")}}>Crime</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setGen("animacao")}}>Animacao</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setGen("comedia")}}>Comedia</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setGen("acao")}}>Aventura</NavDropdown.Item>
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
                        <Cards searchOnCatalog={searchOnCatalog} categ={categ} dateMin={dateMin} dateMax={dateMax} gen={gen}/>
                        :
                        <List searchOnCatalog={searchOnCatalog} categ={categ} dateMin={dateMin} dateMax={dateMax} gen={gen}/>
                    }
                </Row>
            </Container>
            <Footer/>
        </>
    )
}