import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import RegisterGrades from './components/register-grades';
import StudentDash from './components/student-dash';
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
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/register_grades" component={RegisterGrades}></Route>
          <Route exact path="/student_dash" component={StudentDash}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
