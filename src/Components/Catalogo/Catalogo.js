import React from "react"
import {Row, Container} from "react-bootstrap"	

import ModelCards from "../ModelCards/ModelCards"

import dataFilmes from "../../Data/filmes"

export default function Catalogo(props){
    
    const {defCategory, searchMovie} = props

    return(
        <Container className="w-80">
            <Row>
                {
                    dataFilmes
                    .filter((a)=>(
                        a.genero.indexOf(defCategory) !== -1
                    ))
                    .filter((b)=>(
                        b.name.toUpperCase().indexOf(searchMovie.toUpperCase()) !== -1 ||
                        b.categoria.toUpperCase().indexOf(searchMovie.toUpperCase()) !== -1 ||
                        b.genero.toUpperCase().indexOf(searchMovie.toUpperCase()) !== -1
                    ))
                    .map((c,index)=>(
                        <ModelCards index={index} id={c.id} name={c.name} banner={c.banner} genero={c.genero} categoria={c.categoria} sinopse={c.sinopse}/>
                    ))
                }
            </Row>
        </Container>
            
    )
}