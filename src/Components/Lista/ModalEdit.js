import React from "react"
import {Modal, Button, Card, ListGroup, ListGroupItem} from "react-bootstrap"

export default function ModalEdit(props){
    const {showEdit, setShowEdit} = props
    function handleClose() {
        setShowEdit({ show: false });
    }
    function handleCloseEdit(){

        setShowEdit({ show: false })
        
    }
    


    return(
        <>
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                show={showEdit.show}
                onHide={handleClose}
                centered
            ></Modal>
            <Modal show={showEdit.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{"ID: " + showEdit.id + " - " + showEdit.name}</Modal.Title>
                </Modal.Header>
                    <Modal.Body className="mx-auto">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={showEdit.banner}/>
                            <Card.Body>
                                <Card.Title><input type="text" placeholder={showEdit.name}/></Card.Title>
                                <Card.Text>
                                    <input type="text" placeholder={showEdit.sinopse}/>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><input type="text" placeholder={showEdit.genero}/></ListGroupItem>
                                <ListGroupItem><input type="text" placeholder={showEdit.categoria}/></ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleCloseEdit()}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={()=>handleCloseEdit()}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}