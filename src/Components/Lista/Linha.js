import React, {useState, useEffect} from "react"
import {Button} from "react-bootstrap"

import ModalEdit from "./ModalEdit"

export default function Linha(props){
    const {index, banner, name, genero, categoria, notaImdb, dataLancamento, dataMovies, setDataMovies, sinopse, id, setShowDelete, searchMovieOnList, setShowDetails, searchMovieOnListToDetails, showDelete, showDetails, editData} = props

    const [showEdit, setShowEdit] = useState(false)


    const [id1, setId] = useState("")
    const [banner1, setBanner ] = useState("")
    const [name1, setName ] = useState("")
    const [sinopse1, setSinopse ] = useState("")
    const [genero1, setGenero ] = useState("")
    const [categoria1, setCategoria ] = useState("")
    
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

    useEffect(()=>{ 
        setId(id)
        setBanner(banner)
        setName(name)
        setSinopse(sinopse)
        setGenero(genero)
        setCategoria(categoria)
    },[])

    
    return(
        <>
            <ModalEdit
                showEdit={showEdit}
                setShowEdit={setShowEdit}
                setBanner = {setBanner}
                setName = {setName}
                setSinopse = {setSinopse}
                setGenero = {setGenero}
                setCategoria = {setCategoria}
                setDataMovies = {setDataMovies} 
                dataMovies = {dataMovies}
                editData={editData}
                
                id1={id1}
                banner1={banner1}
                name1={name1}
                sinopse1={sinopse1}
                genero1={genero1}
                categoria1={categoria1}
            />
            <tr>
                <td>{index+1}</td>
                <td>
                    <img 
                        src={banner} 
                        style={{maxWidth: "30px", maxHeight:"50px"}}
                    />
                </td>
                <td>{name}</td>
                <td>{genero}</td>
                <td>{categoria}</td>
                <td>{notaImdb}</td>
                <td>{dataLancamento}</td>
                <td>
                    <Button  onClick={()=>setShowEdit(!showEdit), ()=>searchMovieOnListToEdit(id)}className="mx-1" variant="warning"><i className="material-icons">mode_edit</i></Button>
                    <Button onClick={()=>setShowDelete(!showDelete), ()=>searchMovieOnList(id)} className="mx-1" variant="danger"><i className="material-icons">delete</i></Button>
                    <Button onClick={()=>setShowDetails(!showDetails), ()=>searchMovieOnListToDetails(id)} className="mx-1" variant="info"><i className="material-icons">preview</i></Button>
                </td>
            </tr>
        </>
    )
}