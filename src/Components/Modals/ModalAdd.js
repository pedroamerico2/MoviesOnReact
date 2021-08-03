import React from "react"
import {Modal, Form,  Button} from "react-bootstrap"


export default function ModalAdd(props){
    const {onHide, dataMovies, setDataMovies} = props

    function addMovie (){
        var newMovie = 
        {
            id: dataMovies.length + 1 ,
                name: document.getElementById("name").value, 
                cpf: document.getElementById("cpf").value, 
                crm: document.getElementById("crm").value , 
                titulacao: document.getElementById("titulacao").value, 
                cor: document.getElementById("cor").value,
                dataNascimento: document.getElementById("dataNascimento").value,
                tipo: document.getElementById("tipo").value
        }
        return(
            setDataMovies ([...dataMovies, newMovie])
        )}
    return(
        <>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter ">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Novo Usuario
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid text-left">
                <Form>
                    <Form.Group className="text-left" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nome: </Form.Label>
                        <Form.Control 
                            id="name" 
                            className="text-left"  
                            type="text" 
                            placeholder="Jose Ricardo"
                        />
                    </Form.Group>
                    <Form.Group  controlId="exampleForm.ControlSelect2">
                    <Form.Label>Cpf: </Form.Label>
                        <Form.Control 
                            type="text"
                            className="text-left" 
                            id="cpf" 
                            label="Cpf: "
                        />
                    </Form.Group>
                    <Form.Group className="text-left">
                        <Form.Label>Tipo: </Form.Label>
                        <Form.Control id="tipo" as="select">
                            <option value="" >Selecione</option>
                            <option value="medico">Medico</option>
                            <option value="paciente">Paciente</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlSelect2">
                        <Form.Label>Crm: </Form.Label>
                        <Form.Control className="text-left" id="crm"/>
                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlSelect2">
                        <Form.Label>Cor: </Form.Label>
                        <Form.Control className="text-left" id="cor"/>
                        <Form.Label>Data de nascimento: </Form.Label>
                        <Form.Control type="date" id="dataNascimento"/>
                    </Form.Group>
                    <Form.Group className="text-left">
                        <Form.Label>Titulacao: </Form.Label>
                        <Form.Control id="titulacao" as="select">
                            <option value="" >Selecione</option>
                            <option value="professor">Professor</option>
                            <option value="diretor">Diretor</option>
                            <option value="mestrando">Mestrando</option>
                            <option value="professor substituto">Professor Substituto</option>
                        </Form.Control>
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