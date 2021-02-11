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
            bannerTop: movie.bannerTop,
            banner: movie.banner,
            name: movie.name,
            genero: movie.genero,
            notaImdb: movie.notaImdb,
            sinopse: movie.sinopse,
            dataLancamento: movie.dataLancamento,
            categoria: movie.categoria,
            active: false,
        })                  
    }))
    
    const [listOrCards, setListOrCards] = useState(false)

    const [searchOnCatalog, setSerachOnCatalog] = useState("")
    const [filterCategory, setFilterCategory] = useState("")
    const [filterGender, setFilterGender] = useState("")
    const [dateMin, setDateMin] = useState("")
    const [dateMax, setDateMax] = useState("")

    function checkItemDelete(){
        const movieSelectToDelete = dataMovies.filter((d) => !d.active)           
            setDataMovies(movieSelectToDelete)
    }

    function teste (dateMin, dateMax){
        alert(dateMin+"/"+dateMax)
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
                        <Button variant="succcess" onClick={()=>(teste(dateMin, dateMax))}>
                            <i className="material-icons" style={{color: "white"}}>
                                spellcheck
                            </i>
                        </Button>
                        
                        <NavDropdown title="Genero" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={()=>{setFilterGender("")}}>Todos</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setFilterGender("acao")}}>Acao</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setFilterGender("drama")}}>Drama</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setFilterGender("crime")}}>Crime</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setFilterGender("animacao")}}>Animacao</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setFilterGender("comedia")}}>Comedia</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setFilterGender("aventura")}}>Aventura</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Categoria" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={()=>{setFilterCategory("")}}>Todos</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setFilterCategory("filme")}}>Filme</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{setFilterCategory("serie")}}>Serie</NavDropdown.Item>
                        </NavDropdown>
                        
                        <Form.Control 
                            style={{marginRight: "15px"}} 
                            type="date" value={dateMin} 
                            onChange={(element)=>{setDateMin(element.target.value)}}
                        />
                        <Form.Control 
                            type="date" 
                            value={dateMax} 
                            onChange={(element)=>{setDateMax(element.target.value)}}
                        />
                        </Nav>
                        <Nav>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchOnCatalog} onChange={(e)=>setSerachOnCatalog(e.target.value)}/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row>
                    {
                        !listOrCards?
                        <Cards 
                        setDataMovies={setDataMovies}
                        dataMovies={dataMovies}
                        searchOnCatalog={searchOnCatalog} 
                        filterCategory={filterCategory} 
                        dateMin={dateMin} 
                        dateMax={dateMax} 
                        filterGender={filterGender}
                        />
                        :
                        <List 
                        setDataMovies={setDataMovies} 
                        dataMovies={dataMovies}
                        searchOnCatalog={searchOnCatalog} 
                        filterCategory={filterCategory} 
                        dateMin={dateMin} 
                        dateMax={dateMax} 
                        filterGender={filterGender}/>
                    }
                </Row>
            </Container>
            <Footer/>
        </>
    )
}