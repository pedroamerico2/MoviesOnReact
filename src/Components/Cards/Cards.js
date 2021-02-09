import React from "react"
import {Card, ListGroup, ListGroupItem} from "react-bootstrap"

import dataFilmes from "../../Data/filmes"

export default function ModelCards(props){

    const {searchOnCatalog, filterCategory, filterGender} = props;

    return(
        <>
            {
            dataFilmes
            .filter((b)=>(
                b.name.toUpperCase().indexOf(searchOnCatalog.toUpperCase()) !== -1 
            ))
            .filter((b)=>(
                b.genero.toUpperCase().indexOf(filterGender.toUpperCase()) !== -1
            ))
            .filter((g)=>(
                g.categoria.toUpperCase().indexOf(filterCategory.toUpperCase()) !== -1
            ))
            .sort((c,d)=>{
                    return d.notaImdb - c.notaImdb
            })
            .map((a, index)=>(
                <div className="mx-auto mt-5">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={a.banner}/>
                        <Card.Body>
                            <Card.Title>{a.name}</Card.Title>
                            <Card.Text>
                                {a.sinopse}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{a.genero}</ListGroupItem>
                            <ListGroupItem>{a.categoria}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            ))
            }
            
        </>
    )
}