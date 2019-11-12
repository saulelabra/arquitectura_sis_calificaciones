import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from '../src/components/login';
import RegisterGrades from '../src/components/register-grades';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Grade - Assistant</Navbar.Brand>
      </Navbar>
      <Login></Login>
      <RegisterGrades></RegisterGrades>
    </div>
  );
}

export default App;
