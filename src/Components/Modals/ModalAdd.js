import React, { useEffect, useState}from "react"
import {Modal, Form,  Button} from "react-bootstrap"


export default function ModalAdd(props){
    const {onHide, dataMovies, setDataMovies} = props

    function addMovie (){
        var newMovie = 
        {
            id: dataMovies.length + 1 ,
                bannerTop: "", 
                banner: document.getElementById("banner").value, 
                name: document.getElementById("name").value, 
                genero: document.getElementById("genero").value, 
                notaImdb: document.getElementById("nota").value , 
                sinopse: document.getElementById("sinopse").value, 
                dataLancamento: document.getElementById("data").value, 
                categoria:document.getElementById("categoria").value
        }
        return(
            setDataMovies ([...dataMovies, newMovie])
        )}
    return(
        <>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter ">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Novo Filme
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid text-left">
                <Form>
                    <Form.Group className="text-left" controlId="exampleForm.ControlInput1">
                        <Form.Label>Titulo: </Form.Label>
                        <Form.Control 
                            id="name" 
                            className="text-left"  
                            type="text" 
                            placeholder="lorem ipsum a cartada final"
                        />
                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlSelect1">
                        <Form.Label>Gênero: </Form.Label>
                        <Form.Control id="genero" as="select">
                            <option value="" >Selecione</option>
                            <option value="acao" >Acao</option>
                            <option value="aventura" >Aventura</option>
                            <option value="drama" >Drama</option>
                            <option value="comedia">Comedia</option>
                            <option value="animacao">Animacao</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlSelect2">
                        <Form.Label>Nota: </Form.Label>
                        <Form.Control 
                        id ="nota" 
                        type="text" 
                        />
                    </Form.Group>
                    <Form.Group  controlId="exampleForm.ControlSelect2">
                    <Form.Label>Banner: </Form.Label>
                        <Form.Control 
                            type="text"
                            className="text-left" 
                            id="banner" 
                            label="Cartaz: "
                        />
                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Sinopse: </Form.Label>
                        <Form.Control 
                            className="text-left" 
                            id="sinopse"
                            as="textarea" 
                            rows={3}
                        />
                        <Form.Label>Categoria: </Form.Label>
                        <Form.Control id="categoria"as="select">
                            <option value="" >Selecione</option>
                            <option value="serie">Serie</option>
                            <option value="filme">Filme</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlSelect2">
                        <Form.Label>Data de Lançamento: </Form.Label>
                        <Form.Control 
                        type="date" 
                        id="data"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={()=> onHide()}>Fechar</Button>
                <Button variant="success" onClick={()=> onHide() + addMovie()} >Cadastrar</Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}