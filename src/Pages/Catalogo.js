import React, {useState} from "react";
import {Container, Row, Button} from "react-bootstrap"

import ModelCards from "../Components/ModelCards/ModelCards"
import List from "../Components/Lista/Lista"

import dataFilmes from "../Data/filmes"

export default function Catalogo(props){
    
    const searching = props.location.searching.result
    
    const [listOrCards, setListOrCards] = useState(false)
    
    return(
        <>
            <Container className="w-80">
                <h1>{searching}</h1>
                <Button variant="succcess" onClick={()=>(setListOrCards(!listOrCards))}>
                    <i className="material-icons">
                        {
                            listOrCards?
                            "dashboard"
                            :
                            "article"
                        }
                    </i>
                </Button>
                <Row>
                    {
                        
                            listOrCards?
                            dataFilmes
                            .map((c,index)=>(
                                <ModelCards index={index} id={c.id} name={c.name} banner={c.banner} genero={c.genero} categoria={c.categoria} sinopse={c.sinopse}/>
                            ))
                            :
                            <List/>
                        
                    }
                </Row>
            </Container>
        </>
    )
}