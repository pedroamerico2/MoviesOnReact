import React, {useState} from "react"
import {Table, Container,Button} from "react-bootstrap"

import ModalDelete from "./ModalDelete"
import ModalEdit from "./ModalEdit"
import ModalDetails from "./ModalDetails"


import dataFilmes from "../../Data/filmes"

export default function CatalogoLista(props){

    const{searchOnCatalog, categ, dateMax, dateMin, gen} = props;

    const [dataMovies, setDataMovies] = useState(dataFilmes)


    const [showDelete, setShowDelete] = useState(false)

    const [showEdit, setShowEdit] = useState(false)

    const [showDetails, setShowDetails] = useState(false)

    
    const [nota, setNota] = useState(true)

    const [maiorMenorNota, setMaiorMenorNota] = useState(false)
    const [maiorMenorId, setMaiorMenorId] = useState(false)


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
            <Table striped bordered hover variant="dark" style={{marginTop: "15px"}}>
                <thead>
                    <tr>
                        <th><a style={{cursor: "pointer",userSelect: "none" }} onClick={()=>setMaiorMenorId(!maiorMenorId)}>#</a></th>
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
                            b.genero.toUpperCase().indexOf(categ.toUpperCase()) !== -1
                        ))
                        .filter((g)=>(
                            g.categoria.toUpperCase().indexOf(gen.toUpperCase()) !== -1
                        ))
                        .sort((c,d)=>{
                            if(nota == true){
                                if(maiorMenorNota == true){
                                    return c.notaImdb - d.notaImdb
                                }else{
                                    return d.notaImdb - c.notaImdb
                                }   
                            }else{
                                if(maiorMenorId == true){
                                    return d.id - c.id
                                }else{
                                    return c.id - d.id
                                }
                            }  
                        })
                        .map((e,index)=>(
                            <tr  >
                                <td>{index+1}</td>
                                <td>
                                    <img 
                                        src={e.banner} 
                                        style={{maxWidth: "30px", maxHeight:"50px"}}
                                    />
                                </td>
                                <td>{e.name}</td>
                                <td>{e.genero}</td>
                                <td>{e.categoria}</td>
                                <td>{e.notaImdb}</td>
                                <td>{e.dataLancamento}</td>
                                <td>
                                    <Button  onClick={()=>setShowEdit(!showEdit), ()=>searchMovieOnListToEdit(e.id)}className="mx-1" variant="warning"><i className="material-icons">mode_edit</i></Button>
                                    <Button onClick={()=>setShowDelete(!showDelete), ()=>searchMovieOnList(e.id)} className="mx-1" variant="danger"><i className="material-icons">delete</i></Button>
                                    <Button onClick={()=>setShowDetails(!showDetails), ()=>searchMovieOnListToDetails(e.id)} className="mx-1" variant="info"><i className="material-icons">preview</i></Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
            
    )
}