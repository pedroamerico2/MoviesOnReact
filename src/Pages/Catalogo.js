import React, {useState} from "react";
import {Container, Row, Button, Navbar, Nav, NavDropdown, FormControl, Form} from "react-bootstrap"

import ModalAdd from "../Components/Modals/ModalAdd"

import Movies from "../Data/filmes.js"

import Header from "../Components/DefaultComponents/Header"
import Cards from "../Components/Cards/Cards"
import List from "../Components/Lista/Lista"
import Footer from "../Components/DefaultComponents/Footer"

export default function Catalog(){

    const [showModalAdd, setShowModalAdd] = useState(false)

    const [dataMovies, setDataMovies] = useState(
        Movies.map((movie)=>{
        return({
            id: movie.id,
            name: movie.name,
            cpf: movie.cpf,
            crm: movie.crm,
            titulacao: movie.titulacao,
            tipo: movie.tipo,
            active: false,
        })                  
    }))

    const [searchOnCatalog, setSerachOnCatalog] = useState("")

    function checkItemDelete(){
        const movieSelectToDelete = dataMovies.filter((d) => !d.active)           
            setDataMovies(movieSelectToDelete)
    }
    
    return(
        <>  
            <ModalAdd
                show={showModalAdd}
                onHide={() => setShowModalAdd(!showModalAdd)}
                dataMovies={dataMovies}
                setDataMovies={setDataMovies}
            />
            <Header/>
            <Container className="w-80">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sub-nav">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Button variant="succcess" onClick={()=>checkItemDelete()}>
                                <i className="material-icons" style={{color: "white"}}>
                                    delete
                                </i>
                            </Button>
                            <Button variant="succcess" onClick={()=>(setShowModalAdd(!showModalAdd))}>
                                <i className="material-icons" style={{color: "white"}}>
                                    library_add
                                </i>
                            </Button>
                        </Nav>
                        <Nav>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchOnCatalog} onChange={(e)=>setSerachOnCatalog(e.target.value)}/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row>
                    {
                        <List 
                        setDataMovies={setDataMovies} 
                        dataMovies={dataMovies}
                        searchOnCatalog={searchOnCatalog} 
                        />
                    }
                </Row>
            </Container>
            <Footer/>
            
        </>
    )
}