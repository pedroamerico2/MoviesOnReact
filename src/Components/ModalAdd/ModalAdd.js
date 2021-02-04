import React, { useEffect, useState}from "react"
import {Modal, Form,  Button} from "react-bootstrap"


export default function ModalAdd(props){
    const {onHide, Movies} = props

    const[id2, setId2] = useState(30)

    const[bannerTop2, setBannerTop] = useState("")
    const[banner2, setBanner] = useState("")
    const[name2, setName2] = useState("")
    const[genero2, setGenero] = useState("")
    const[notaImdb2, setNotaImdb] = useState(0)
    const[sinopse2, setSinopse] = useState("")
    const[dataLancamento2, setDataLancamento] = useState("")
    const[categoria2, setCategoria] = useState("")

    function addMovie (){
        return(
            Movies.unshift({
                id: id2 ,
                bannerTop: "https://thumbs.dreamstime.com/b/eye-vision-test-banner-line-icons-set-infographics-vector-signs-eye-vision-test-banner-line-icons-set-infographics-vector-signs-106198263.jpg", 
                banner: document.getElementById("banner").value, 
                name: document.getElementById("name").value, 
                genero: document.getElementById("genero").value, 
                notaImdb: document.getElementById("nota").value , 
                sinopse: document.getElementById("sinopse").value, 
                dataLancamento: document.getElementById("data").value, 
                categoria:document.getElementById("categoria").value
            })
        ) 
    }
    return(
        <>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter ">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Novo Filme
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid text-left">
                <Form>
                    <Form.Group className="text-left" controlId="exampleForm.ControlInput1">
                        <Form.Label>Titulo: </Form.Label>
                        <Form.Control 
                            id="name" 
                            className="text-left"  
                            type="text" 
                            placeholder="lorem ipsum a cartada final"
                            value={name2}
                            onChange={(element3)=>setName2(element3.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlSelect1">
                        <Form.Label>Gênero: </Form.Label>
                        <Form.Control id="genero" as="select">
                            <option value={genero2} onClick={()=>setGenero("")}>Selecione</option>
                            <option value="acao" onClick={()=>setGenero("acao")}>Acao</option>
                            <option value="aventura" onClick={()=>setGenero("aventura")}>Aventura</option>
                            <option value="drama" onClick={()=>setGenero("drama")}>Drama</option>
                            <option value="comedia" onClick={()=>setGenero("comedia")}>Comedia</option>
                            <option value="animacao" onClick={()=>setGenero("animacao")}>Animacao</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group className="text-left" controlId="exampleForm.ControlSelect2">
                        <Form.Label>Nota: </Form.Label>
                        <Form.Control 
                        id ="nota" 
                        type="text" 
                        value={notaImdb2} 
                        onChange={(e)=>setNotaImdb(e.target.value)}/>
                    </Form.Group>
                    <Form.Group  controlId="exampleForm.ControlSelect2">
                    <Form.Label>Banner: </Form.Label>
                        <Form.Control 
                            type="text"
                            className="text-left" 
                            id="banner" 
                            label="Cartaz: "
                            value={banner2}
                            onChange={(element4)=>setBanner(element4.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Sinopse: </Form.Label>
                        <Form.Control 
                            className="text-left" 
                            id="sinopse"
                            as="textarea" 
                            rows={3}
                            value={sinopse2}
                            onChange={(element5)=>setSinopse(element5.target.value)}
                        />
                        <Form.Label>Categoria: </Form.Label>
                        <Form.Control id="categoria"as="select">
                            <option value={categoria2} onClick={()=>setCategoria("")}>Selecione</option>
                            <option value="serie" onClick={()=>setCategoria("serie")}>Serie</option>
                            <option value="filme" onClick={()=>setCategoria("filme")}>Filme</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlSelect2">
                        <Form.Label>Data de Lançamento: </Form.Label>
                        <Form.Control 
                        type="date" 
                        id="data"
                        value={dataLancamento2} 
                        onChange={(e)=>setDataLancamento(e.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={()=> onHide()}>Fechar</Button>
                <Button variant="success" onClick={()=> onHide() + addMovie()} >Cadastrar</Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}