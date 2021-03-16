import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Styles/Login.css";

export default function Login() {
  return (
    <>
      <div className="container-fluid login">
        <div className="box">
          <img
            src="https://i.pinimg.com/originals/d6/f1/8d/d6f18dcdfc48ef9c283fa8e68a5c7a9e.png"
            style={{ width: "100px", height: "100px" }}
            alt="logo"
          />
          <Form style={{ width: "30%" }}>
            <Form.Group controlId="formBasicEmail" style={{ height: "90px" }}>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group
              controlId="formBasicPassword"
              style={{ height: "70px" }}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              controlId="formBasicCheckbox"
              style={{ height: "30px" }}
            >
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              className="mx-auto"
              style={{ width: "70%" }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
