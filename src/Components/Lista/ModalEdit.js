import React, { useEffect, useState } from "react"
import {Modal, Button, Card, ListGroup, ListGroupItem, FormControl, Form} from "react-bootstrap"

export default function ModalEdit(props){
    const {showEdit, setShowEdit, setBanner, setName, setSinopse, setGenero,dataMovies, setDataMovies, setCategoria, banner1, name1, sinopse1, genero1, categoria1, editData, id1} = props
    function handleClose() {
        setShowEdit({ show: false });
    }
    function handleCloseEdit(banner, name, sinopse, categoria
        ,genero){
        editData(id1, banner, name, sinopse, categoria,genero);{
                setDataMovies(dataMovies.map((movie)=>{
                    if(movie.id === id1){
                        return{
                            id: movie.id,
                            bannerTop: movie.bannerTop,
                            banner: banner,
                            name: name,
                            genero: genero,
                            notaImdb: movie.notaImdb,
                            sinopse: sinopse,
                            dataLancamento: movie.dataLancamento,
                            categoria: categoria
                        }

                    }else{
                        return {...movie}
                    }
                })) 
            }
        setShowEdit({ show: false });
    }
    

    return(
        <>
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                show={showEdit.show}
                onHide={handleClose}
                centered
            />
            <Modal show={showEdit.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{"ID: " + showEdit.id + " - " + showEdit.name}</Modal.Title>
                </Modal.Header>
                    <Modal.Body className="mx-auto">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={showEdit.banner}/>
                            <Form.Label className="text-center">URL Banner: </Form.Label>
                            <FormControl 
                                    type="text"
                                    value={banner1}
                                    onChange = {(e)=>{setBanner(e.target.value)}}
                                    />
                            <Card.Body>
                                <Card.Title>
                                    <FormControl 
                                    type="text"
                                    value={name1}
                                    onChange = {(e)=>{setName(e.target.value)}}
                                    />
                                </Card.Title>
                                <Card.Text>
                                    <FormControl
                                    type="textarea"
                                    as="textarea" 
                                    rows={3}
                                    value={sinopse1}
                                    onChange = {(e)=>{setSinopse(e.target.value)}}
                                    />
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <FormControl
                                    type="text" 
                                    value={genero1} 
                                    onChange = {(e)=>{setGenero(e.target.value)}}
                                    />
                                </ListGroupItem>
                                <ListGroupItem>
                                    <FormControl
                                    type="text" 
                                    value={categoria1}
                                    onChange = {(e)=>{setCategoria(e.target.value)}}
                                    />                                
                                </ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={()=>handleCloseEdit(banner1, name1, sinopse1, categoria1, genero1)}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}