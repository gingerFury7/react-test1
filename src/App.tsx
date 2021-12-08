import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import "./App.css";
import Routes from "./Routes/Routes";
import { LinkContainer } from 'react-router-bootstrap';
import { AppContext } from './libs/contextLib';

function App() {
    
    const [ isAuthenticated, userHasAuthenticated ] = useState(false);
    const history = useHistory();

    function handleLogout(){
        userHasAuthenticated(false);
        history.push('/login');
    }

    return (
        <div className="App container py-3">
            <Navbar collapseOnSelect bg="light" expand="xl" className="mb-3">
                <LinkContainer to="/">
                    <Navbar.Brand href="/" className="font-weight-bold text-muted">
                        Техническая поддержка
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav activeKey={ window.location.pathname }>
                        { isAuthenticated ? (
                            <Nav.Link onClick={ handleLogout }>Logout</Nav.Link>
                        ) : ( 
                        <>
                            <LinkContainer to="/login">
                                <Nav.Link href="login">Login</Nav.Link> 
                            </LinkContainer>
                        </>
                        )}
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated}}>
               <Routes /> 
            </AppContext.Provider>
        </div>
    )
}

export default App;