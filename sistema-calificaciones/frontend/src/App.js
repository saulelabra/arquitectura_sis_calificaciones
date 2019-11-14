import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from '../src/components/login';
import RegisterGrades from '../src/components/register-grades';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>Grade - Assistant</Navbar.Brand>
          </Navbar>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/register_grades" component={RegisterGrades}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
