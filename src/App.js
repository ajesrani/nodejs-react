import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Menus from './components/Menus';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Item from './components/Item';
import Speech from './components/Speech';
import NavbarX from './components/NavbarX';
import Avatar from './components/Avatar';
import Beer from './components/Beer';
import { Button, Row, Col, Container } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [isRgb, setRgb] = useState(true);
  const [count, setCount] = useState(0);
  
  const notify = () => {
    //toast("Wow so easy!");
    toast.success("Done!", {
      position: "top-center"
    })
  }

  const increment = () => {
    setCount(count+1);
    setRgb(!isRgb);
  }

  return (
    <div>
      <ToastContainer />
      <Router>
        <Container>
          <Header />
          <Nav />
          <hr className="my-2" />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact />
              <Route path="/add-course" component={AddCourse} exact />
              <Route path="/view-courses" component={AllCourses} exact />
              <Route path="/speech" component={Speech} exact />
              <Route path="/avatar" component={Avatar} exact />
              <Route path="/beer" component={Beer} exact />
              <Route path="/shop" component={Shop} exact />
              <Route path="/shop/:id" component={Item} exact />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>

    /*<div>
      <Router>
          <NavbarX />
            <Switch>
              <Route path="/" exact />
            </Switch>
      </Router>
    </div>*/

    /*<div className={isRgb? "change-color" : ""}>
      <h1>Usestate Example...</h1>
      <Button outline color="success" onClick={increment}>Increment</Button>
      <h3>{count}</h3>
    </div>*/

    /*
    <div>
      <Home />
      <Course course={{title:"Django",description:"Python Web application"}}/>
      <AllCourses />
      <AddCourse />
    </div>
    */
    /*
    <div>
      <h1>This is bootstrap component...</h1>
      <Button outline color="success" onClick={notify}>First React Button</Button>
      <ToastContainer />
    </div>
    */
    /*
    <div className="App">
      <Header name="Anil Jesrani" title="BlaBlaBla"/>
      <hr />
      <header className="App-header">
        <p>This is my React Application</p>
      </header>
    </div>
    */
  );
}

export default App;
