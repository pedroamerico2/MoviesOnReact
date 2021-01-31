import React, {useState} from "react"
import {Table, Container,Button} from "react-bootstrap"

import ModalDelete from "./ModalDelete"
import ModalEdit from "./ModalEdit"
import ModalDetails from "./ModalDetails"


import dataFilmes from "../../Data/filmes"

export default function Catalogo(props){
    
    const {defCategory, searchMovie} = props



    const [dataMovies, setDataMovies] = useState(dataFilmes)



    const [showDelete, setShowDelete] = useState(false)

    const [showEdit, setShowEdit] = useState(false)

    const [showDetails, setShowDetails] = useState(false)

    

    const [maiorMenor, setMaiorMenor] = useState(false)


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
    function searchMovieOnListToEdit(movieOnListEdit) {
        const [movieFilterEdit] = dataMovies.filter((d) => (d.id === movieOnListEdit))
        if (movieFilterEdit) {
            setShowEdit({
                id: movieFilterEdit.id,
                banner: movieFilterEdit.banner,
                name: movieFilterEdit.name,
                sinopse: movieFilterEdit.sinopse,
                categoria: movieFilterEdit.categoria,
                genero: movieFilterEdit.genero,
                show: true,
            });
        } else {
            alert("nada aqui")
        }
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
            <ModalEdit
                showEdit={showEdit}
                setShowEdit={setShowEdit}
                dataMovies = {dataMovies}
                setDataMovies = {setDataMovies}
            />
            <ModalDetails
                showDetails={showDetails}
                setShowDetails={setShowDetails}
                dataMovies = {dataMovies}
                setDataMovies = {setDataMovies}
            />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Banner</th>
                        <th>Name</th>
                        <th>Genero</th>
                        <th>Categoria</th>
                        <th><a style={{cursor: "pointer",userSelect: "none" }} onClick={()=>setMaiorMenor(!maiorMenor)}>Nota IMDB</a></th>
                        <th>Data de Lancamento</th>
                        <th className="text-center"> Acoes </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataMovies
                        .filter((a)=>(
                            a.genero.indexOf(defCategory) !== -1
                        ))
                        .filter((b)=>(
                            b.name.toUpperCase().indexOf(searchMovie.toUpperCase()) !== -1 ||
                            b.categoria.toUpperCase().indexOf(searchMovie.toUpperCase()) !== -1 ||
                            b.genero.toUpperCase().indexOf(searchMovie.toUpperCase()) !== -1
                        )).sort((a,b)=>{
                            if(maiorMenor == false){
                                return b.notaImdb - a.notaImdb
                            }else{
                                return a.notaImdb - b.notaImdb
                            }
                            
                        })
                        .map((c,index)=>(
                            <tr  >
                                <td>{index+1}</td>
                                <td>
                                    <img 
                                        src={c.banner} 
                                        style={{maxWidth: "30px", maxHeight:"50px"}}
                                    />
                                </td>
                                <td>{c.name}</td>
                                <td>{c.genero}</td>
                                <td>{c.categoria}</td>
                                <td>{c.notaImdb}</td>
                                <td>{c.dataLancamento}</td>
                                <td>
                                    <Button  onClick={()=>setShowEdit(!showEdit), ()=>searchMovieOnListToEdit(c.id)}className="mx-1" variant="warning"><i className="material-icons">mode_edit</i></Button>
                                    <Button onClick={()=>setShowDelete(!showDelete), ()=>searchMovieOnList(c.id)} className="mx-1" variant="danger"><i className="material-icons">delete</i></Button>
                                    <Button onClick={()=>setShowDetails(!showDetails), ()=>searchMovieOnListToDetails(c.id)} className="mx-1" variant="info"><i className="material-icons">preview</i></Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
            
    )
}