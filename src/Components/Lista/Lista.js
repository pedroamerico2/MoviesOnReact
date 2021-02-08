import React, {useState, useEffect} from "react"
import {Table, Container,Button} from "react-bootstrap"

import ModalDelete from "./ModalDelete"
import ModalDetails from "./ModalDetails"

import Linha from "./Linha"


import dataFilmes from "../../Data/filmes"

export default function CatalogoLista(props){

    const{searchOnCatalog, categ, dateMax, dateMin, genero} = props;

    const [dataMovies, setDataMovies] = useState(dataFilmes)


    const [showDelete, setShowDelete] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

    const [maiorMenorNota, setMaiorMenorNota] = useState(false)

    function searchMovieOnList(movieOnList) {
        const [movieFilter] = dataMovies.filter((d) => (d.id === movieOnList))
        if (movieFilter) {
            setShowDelete({
                id: movieFilter.id,
                name: movieFilter.name,
                show: true,
            });
        } else {
            alert("nada aqui")
        }
    }
    function editData(id, banner, name, sinopse, categoria
    ,genero){
        setDataMovies(dataMovies.map((movie)=>{
            if(movie.id === id){
                return{
                    id: movie.id,
                    banner: movie.banner,
                    name: name,
                    sinopse: sinopse,
                    categoria: categoria,
                    genero: genero,
                }
            }else{
                return {...movie}
            }
        }))
    }

    function searchMovieOnListToDetails(movieOnListDetails) {
        const [movieFilterDetails] = dataMovies.filter((d) => (d.id === movieOnListDetails))
        if (movieFilterDetails) {
            setShowDetails({
                id: movieFilterDetails.id,
                banner: movieFilterDetails.banner,
                name: movieFilterDetails.name,
                sinopse: movieFilterDetails.sinopse,
                categoria: movieFilterDetails.categoria,
                genero: movieFilterDetails.genero,
                show: true,
            });
        } else {
            alert("nada aqui")
        }
    }
    return(
        <Container className="w-80">
            <ModalDelete
                showDelete={showDelete}
                setShowDelete={setShowDelete}
                dataMovies = {dataMovies}
                setDataMovies = {setDataMovies}
            />
            <ModalDetails
                showDetails={showDetails}
                setShowDetails={setShowDetails}
                dataMovies = {dataMovies}
                setDataMovies = {setDataMovies}
            />
            <Table striped bordered hover variant="dark" style={{marginTop: "15px"}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Banner</th>
                        <th>Name</th>
                        <th>Genero</th>
                        <th>Categoria</th>
                        <th><a style={{cursor: "pointer",userSelect: "none" }} onClick={()=>setMaiorMenorNota(!maiorMenorNota)}>Nota IMDB</a></th>
                        <th>Data de Lancamento</th>
                        <th className="text-center"> Acoes </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataMovies
                        .filter((a)=>(
                            a.name.toUpperCase().indexOf(searchOnCatalog.toUpperCase()) !== -1 ||
                            a.categoria.toUpperCase().indexOf(searchOnCatalog.toUpperCase()) !== -1 ||
                            a.genero.toUpperCase().indexOf(searchOnCatalog.toUpperCase()) !== -1
                        ))
                        .filter((b)=>(
                            b.genero.toUpperCase().indexOf(genero.toUpperCase()) !== -1
                        ))
                        .filter((elementCateg)=>(
                            elementCateg.categoria.toUpperCase().indexOf(categ.toUpperCase()) !== -1
                        ))
                        .sort((c,d)=>{
                            if(maiorMenorNota === true){
                                return c.notaImdb - d.notaImdb
                            }else{
                                return d.notaImdb - c.notaImdb
                            } 
                        })
                        .map((e,index)=>(
                            <Linha 
                            setShowDelete = {setShowDelete}
                            searchMovieOnList = {searchMovieOnList}
                            setShowDetails = {setShowDetails}
                            dataMovies = {dataMovies}
                            setDataMovies = {setDataMovies}
                            searchMovieOnListToDetails = {searchMovieOnListToDetails}
                            editData={editData}
                            dataMovies={dataMovies}
                            showDelete={showDelete}
                            showDetails={showDetails}
                            index = {index}
                            id = {e.id}
                            banner = {e.banner}
                            name = {e.name}
                            genero = {e.genero}
                            sinopse = {e.sinopse}
                            categoria = {e.categoria}
                            notaImdb = {e.notaImdb}
                            dataLancamento = {e.dataLancamento}
                            />
                        ))
                    }
                </tbody>
            </Table>
        </Container>
            
    )
}