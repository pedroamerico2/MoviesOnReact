import React, { useEffect, useState } from "react"
import {Modal, Button, Card, ListGroup, ListGroupItem, FormControl, Form} from "react-bootstrap"

export default function ModalEdit(props){
    const {showEdit, setShowEdit, dataMovies, setDataMovies, editData } = props

    const [id, setId] = useState("")
    const [banner, setBanner] = useState("")
    const [name, setName] = useState("")
    const [sinopse, setSinopse] = useState("")
    const [genero, setGenero] = useState("")
    const [categoria, setCategoria] = useState("")

    function handleClose(){
        setShowEdit({ show: false })
    }

    function handleCloseEdit(id, banner, name, sinopse, categoria
        ,genero){
        editData(id, banner, name, sinopse, categoria, genero);
        setShowEdit({ show: false });
    }
    //utilizando o use effect pra atribuir os valores ao iniciar o modal
    useEffect(()=>{ 
        setId(showEdit.id)
        setBanner(showEdit.banner)
        setName(showEdit.name)
        setSinopse(showEdit.sinopse)
        setGenero(showEdit.genero)
        setCategoria(showEdit.categoria)
    },[showEdit])


    return(
        <>
            <Modal show={showEdit.show} onHide={()=>handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>{"ID: " + showEdit.id + " - " + showEdit.name}</Modal.Title>
                </Modal.Header>
                    <Modal.Body className="mx-auto">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={showEdit.banner}/>
                            <Form.Label className="text-center">URL Banner: </Form.Label>
                            <FormControl 
                                    type="text"
                                    value={banner}
                                    onChange = {(e)=>{setBanner(e.target.value)}}
                                    />
                            <Card.Body>
                                <Card.Title>
                                    <FormControl 
                                    type="text"
                                    value={name}
                                    onChange = {(e)=>{setName(e.target.value)}}
                                    />
                                </Card.Title>
                                <Card.Text>
                                    <FormControl
                                    type="textarea"
                                    as="textarea" 
                                    rows={3}
                                    value={sinopse}
                                    onChange = {(e)=>{setSinopse(e.target.value)}}
                                    />
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <FormControl
                                    type="text" 
                                    value={genero} 
                                    onChange = {(e)=>{setGenero(e.target.value)}}
                                    />
                                </ListGroupItem>
                                <ListGroupItem>
                                    <FormControl
                                    type="text" 
                                    value={categoria}
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
                    <Button variant="success" onClick={()=>handleCloseEdit(id, banner, name, sinopse, categoria, genero)}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}