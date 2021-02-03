import React from "react";
import {Form, Button} from "react-bootstrap"
import "./Styles/Login.css"

import Logo from "../Assets/g18-1.png"

export default function Login(){
    return(
        <>
            <div className="container-fluid login">            
                <div className="box">
                    <img src={Logo} style={{width: "100px", height: "100px"}} alt="logo"/>
                    <Form>
                        <Form.Group controlId="formBasicEmail" style={{height: "90px"}}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword"
                        style={{height: "70px"}}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox" style={{height: "30px"}}>
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group >
                        <Button  style={{width: "100%"}}variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>               
                </div>
            </div>
        </>
    )
}