import React from 'react';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import { useAppContext } from '../libs/contextLib';
import "./Login.css";

export default function Login() {
    const { userHasAuthenticated } = useAppContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function validateForm() {
        return (email.length > 0) && (password.length > 0);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        userHasAuthenticated(true);
        history.push('/main');
    }

    return (
        <div className="Login">
            <Form onSubmit={ handleSubmit }>
                <Form.Group controlId="email">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        size="lg"
                        autoFocus
                        type="string"
                        value={ email }
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        size="lg"
                        type="password"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </Form.Group>
                <div className="d-grid gap-2">
                        <Button 
                            size="lg" 
                            type='submit' 
                            disabled={!validateForm()}
                        >
                            Login
                        </Button>
                </div>
            </Form>
        </div>
    )
}