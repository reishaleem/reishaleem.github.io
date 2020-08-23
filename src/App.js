import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <Container fluid>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </Container>
    );
}

export default App;
