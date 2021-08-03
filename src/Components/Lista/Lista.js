import React, {useState, useEffect} from "react"
import {Table, Container,Button, ToggleButton} from "react-bootstrap"

import ModalDelete from "../Modals/ModalDelete"
import ModalDetails from "../Modals/ModalDetails"
import ModalEdit from "../Modals/ModalEdit"

import "./Styles/Lista.css"


export default function CatalogoLista(props){

    const{searchOnCatalog, dataMovies, setDataMovies} = props;

    const [showDelete, setShowDelete] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    
    const [toggleOrderName, setToggleOrderName] = useState(0)
    const [toggleOrderNota, setToggleOrderNota] = useState(0)

    const [toggleCheckItem, setToggleCheckItem] = useState(true)
    
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
    function searchMovieOnListToDetails(movieOnListDetails) {
        const [movieFilterDetails] = dataMovies.filter((d) => (d.id === movieOnListDetails))
        if (movieFilterDetails) {
            setShowDetails({
                id: movieFilterDetails.id,
                name: movieFilterDetails.name,
                cpf: movieFilterDetails.cpf,
                crm: movieFilterDetails.crm,
                titulacao: movieFilterDetails.titulacao,
                tipo: movieFilterDetails.tipo,
                cor:movieFilterDetails.cor,
                dataNascimento:movieFilterDetails.dataNascimento,
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
                name: movieFilterEdit.name,
                cpf: movieFilterEdit.cpf,
                crm: movieFilterEdit.crm,
                titulacao: movieFilterEdit.titulacao,
                tipo: movieFilterEdit.tipo,
                cor:movieFilterEdit.cor,
                dataNascimento:movieFilterEdit.dataNascimento,
                show: true,
            });
            
        } else {
            alert("nada aqui")
        }
    }
    function editData(id, name, cpf, crm ,titulacao, tipo, cor, dataNascimento){
            setDataMovies(dataMovies.map((movie)=>{
                if(movie.id === id){
                    return{
                        id: movie.id,
                        name: name,
                        cpf: cpf,
                        crm: crm,
                        titulacao: titulacao,
                        tipo: tipo,
                        cor:cor,
                        dataNascimento: dataNascimento
                    }
                }else{
                    return {...movie}
                }
            }))
        }
        function checkItem(id){
            setDataMovies(dataMovies.map((movie)=>{
                if(movie.id === id){  
                    return {...movie, active: !movie.active}
                }else{
                    return movie
                }
            }))
        }
        function checkItemAll(){
            setToggleCheckItem(!toggleCheckItem)
            setDataMovies(dataMovies.map((movie)=>{
                return {...movie, active: toggleCheckItem}
            }))
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
                dataMovies={dataMovies}
                setDataMovies={setDataMovies}
            />
            <Table striped bordered hover variant="dark" style={{marginTop: "15px"}}>
                <thead>
                    <tr>
                        <th>
                            {
                                toggleCheckItem?
                                <i className="checkIcon material-icons text-center" onClick={()=>checkItemAll()}>
                                    radio_button_unchecked
                                </i>
                                :
                                <i className="checkIcon material-icons text-center" onClick={()=>checkItemAll()}>
                                    radio_button_checked
                                </i>
                            }
                        </th>
                        <th>#</th>
                        <th>Nome 
                                {
                                    toggleOrderName === 1?
                                    <i className="orderIcon material-icons" onClick={()=>setToggleOrderName(2)}>
                                        keyboard_arrow_down
                                    </i>  
                                    :toggleOrderName === 2?
                                    <i className="orderIcon material-icons" onClick={()=>setToggleOrderName(0)}>
                                        keyboard_arrow_up
                                    </i>
                                    :toggleOrderName === 0&&
                                    <i className="orderIcon material-icons" onClick={()=>setToggleOrderName(1)}>
                                        remove
                                    </i>       
                                }
                        </th>
                        <th>Cpf</th>
                        <th style={{width: "130px"}}>Tipo 
                                {
                                    toggleOrderNota === 1?
                                    <i className="orderIcon material-icons" onClick={()=>setToggleOrderNota(2)}>
                                        keyboard_arrow_down
                                    </i>  
                                    :toggleOrderNota === 2?
                                    <i className="orderIcon material-icons" onClick={()=>setToggleOrderNota(0)}>
                                        keyboard_arrow_up
                                    </i>  
                                    :toggleOrderNota === 0&&
                                    <i className="orderIcon material-icons" onClick={()=>setToggleOrderNota(1)}>
                                        remove
                                    </i>   
                                }
                        </th>
                        <th className="text-center"style={{width: "200px"}}> Acoes </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataMovies
                        .sort((Movie1,Movie2)=>{
                            if(toggleOrderName === 1){
                                if(Movie1.name > Movie2.name){
                                    return -1
                                }
                                if(Movie1.name < Movie2.name){
                                    return 1
                                }
                                return 0
                            }if(toggleOrderName === 2){
                                if(Movie1.name > Movie2.name){
                                    return 1
                                }
                                if(Movie1.name < Movie2.name){
                                    return -1
                                }
                                return 0
                            }  
                        })
                        .filter((a)=>(
                            a.name.toUpperCase().indexOf(searchOnCatalog.toUpperCase()) !== -1 ||
                            a.cpf.indexOf(searchOnCatalog) !== -1 ||
                            a.crm.indexOf(searchOnCatalog) !== -1
                        ))
                        .map((e,index)=>(
                            <tr>
                                <td>
                                    {
                                        e.active?
                                        <i className="checkIcon material-icons text-center" onClick={()=>checkItem(e.id)}>
                                            radio_button_checked
                                        </i>
                                        :
                                        <i className="checkIcon material-icons text-center" onClick={()=>checkItem(e.id)}>
                                            radio_button_unchecked
                                        </i>
                                    }
                                    
                                </td>
                                <td>{index+1}</td>
                                <td>{e.name}</td>
                                <td>{e.cpf}</td>
                                <td>{e.tipo}</td>
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