import React from "react"
import {Navbar, NavDropdown, Nav, Form, FormControl} from "react-bootstrap"
import {Link} from "react-router-dom"


export default function Header(props){

    const {setDefCategory, setSearchMovie, searchMovie, setList, list} = props;
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href=""><Link to="/home">Cansheteria</Link ></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={()=>setList(!list)}>Banco de Filmes</Nav.Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <NavDropdown.Item  onClick={()=>setDefCategory("")}>Todos</NavDropdown.Item>
                            <NavDropdown.Item  onClick={()=>setDefCategory("acao")}>Acao</NavDropdown.Item>
                            <NavDropdown.Item  onClick={()=>setDefCategory("terror")}>Terror</NavDropdown.Item>
                            <NavDropdown.Item  onClick={()=>setDefCategory("crime")}>Crime</NavDropdown.Item>
                            <NavDropdown.Item  onClick={()=>setDefCategory("comedia")}>Comedia</NavDropdown.Item>
                            <NavDropdown.Item  onClick={()=>setDefCategory("aventura")}>Aventura</NavDropdown.Item>
                            <NavDropdown.Item  onClick={()=>setDefCategory("animacao")}>Animacao</NavDropdown.Item>
                            <NavDropdown.Item  onClick={()=>setDefCategory("drama")}>drama</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Cadastrar Categoria</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchMovie} onChange={(e2)=>setSearchMovie(e2.target.value)}/>
                        </Form>
                        <Nav.Link eventKey={2} href="#memes">
                            Sair
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}