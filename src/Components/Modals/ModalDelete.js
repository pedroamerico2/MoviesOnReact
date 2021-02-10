import React from "react"
import {Modal, Button, Card} from "react-bootstrap"

export default function ModalDelete(props){
    const {showDelete, setShowDelete, dataMovies, setDataMovies} = props
    function handleClose() {
        setShowDelete({ show: false });
    }
    function DeleteConfirmed(){ 
            setDataMovies(dataMovies.filter((movie)=>movie.id !== showDelete.id
        ))
        setShowDelete({ show: false })
    }


    return(
        <>
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                show={showDelete.show}
                onHide={handleClose}
                centered
            ></Modal>
            <Modal show={showDelete.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{"ID: " + showDelete.id + " - " + showDelete.name}</Modal.Title>
                </Modal.Header>
                    <Modal.Body className="mx-auto">
                        <img className="" style={{width: "100px", height: "100px", marginLeft: "170px"}}
                        src="https://cdn.picpng.com/delete/cancel-delete-cross-check-box-98388.png"
                        />
                        <p className="text-center"style={{fontSize: "40px"}}>Are You Sure ?</p>
                        <p className="text-center">do you really want to delete this movie ? this process can be undone with refresh this page</p>
                        <Card className="text-center mx-auto" style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title>{showDelete.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={()=>DeleteConfirmed()}>
                        Deletar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}