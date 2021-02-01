import React from "react"

import {Form, Button} from "react-bootstrap"

export default function Home(){
    return(
        <div className="container-fluid">
            <div className="w-100 d-inline-block" style={{}}>
                <Form.Control className="mx-auto" style={{width:"400px"}} size="lg" type="text" placeholder="Large text" />
                <Button variant="primary">Primary</Button>    
            </div>
        </div>
    )
}