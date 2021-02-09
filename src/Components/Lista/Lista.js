import React, {useState, useEffect} from "react"
import {Table, Container,Button} from "react-bootstrap"

import ModalDelete from "../Modals/ModalDelete"
import ModalDetails from "../Modals/ModalDetails"
import ModalEdit from "../Modals/ModalEdit"


export default function CatalogoLista(props){

    const{searchOnCatalog, filterCategory, dateMax, dateMin, filterGender, dataMovies, setDataMovies} = props;

    const [showDelete, setShowDelete] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    
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
    function searchMovieOnListToEdit(movieOnListEditId) {
        const [movieFilterEdit] = dataMovies.filter((d) => (d.id === movieOnListEditId))
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
            <ModalEdit
                showEdit={showEdit}
                setShowEdit={setShowEdit}
                editData={editData}
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
                            b.genero.toUpperCase().indexOf(filterGender.toUpperCase()) !== -1
                        ))
                        .filter((elementCateg)=>(
                            elementCateg.categoria.toUpperCase().indexOf(filterCategory.toUpperCase()) !== -1
                        ))
                        .sort((c,d)=>{
                            if(maiorMenorNota === true){
                                return c.notaImdb - d.notaImdb
                            }else{
                                return d.notaImdb - c.notaImdb
                            } 
                        })
                        .map((e,index)=>(
                            <tr>
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