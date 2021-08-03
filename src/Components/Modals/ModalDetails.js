import React from "react"
import {Modal, Button, Card, ListGroup, ListGroupItem} from "react-bootstrap"

export default function ModalDetails(props){
    const {showDetails, setShowDetails} = props
    function handleClose() {
        setShowDetails({ show: false });
    }

    return(
        <>
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                show={showDetails.show}
                onHide={handleClose}
                centered
            />
            <Modal show={showDetails.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{"ID: " + showDetails.id + " - " + showDetails.tipo}</Modal.Title>
                </Modal.Header>
                    <Modal.Body className="mx-auto">
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                {
                                    showDetails.titulacao!==""? 
                                    <Card.Title>{showDetails.name +" - "+ showDetails.titulacao}</Card.Title>: 
                                    <Card.Title>{showDetails.name}</Card.Title>
                                }
                                
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><b>Cpf: </b>{showDetails.cpf}</ListGroupItem>
                                {
                                    showDetails.tipo==="medico"?
                                    <ListGroupItem><b>Crm: </b> {showDetails.crm}</ListGroupItem>
                                    :
                                    <div>
                                        <ListGroupItem><b>Data de Nascimento: </b>{showDetails.dataNascimento}</ListGroupItem>
                                        <ListGroupItem><b>Cor:</b> {showDetails.cor}</ListGroupItem>
                                    </div>
                                    
                                }
                            </ListGroup>
                        </Card>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>handleClose()}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}