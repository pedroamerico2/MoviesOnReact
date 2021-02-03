import React from "react"
import {Modal, Form, FormControl, Button} from "react-bootstrap"

export default function ModalAdd(props){
    const {onHide} = props
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
                        <Form.Control className="text-left"  type="text" placeholder="lorem ipsum a cartada final" />
                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlSelect1">
                        <Form.Label>Gênero: </Form.Label>
                        <Form.Control as="select">
                            <option>Acao</option>
                            <option>Aventura</option>
                            <option>Drama</option>
                            <option>Comedia</option>
                            <option>Animacao</option>
                        </Form.Control>
                        <Form.Label>Categoria: </Form.Label>
                        <Form.Control as="select">
                            <option>Serie</option>
                            <option>Filme</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlSelect2">
                        <Form.Label>Data de Lançamento: </Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                    <Form.Group  controlId="exampleForm.ControlSelect2">
                        <Form.File className="text-left" id="cartaz" label="Cartaz: "/>
                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Sinopse: </Form.Label>
                        <Form.Control className="text-left" as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={()=> {onHide()}}>Fechar</Button>
                <Button variant="success" onClick={()=> {onHide()}} >Cadastrar</Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}