import React from "react"
import {Card, ListGroup, ListGroupItem} from "react-bootstrap"



export default function ModelCards(props){
    const {id , banner, name, genero, categoria, sinopse} = props;
    return(
        <>
            <div className="mx-auto mt-5">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={banner}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {sinopse}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{genero}</ListGroupItem>
                        <ListGroupItem>{categoria}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}