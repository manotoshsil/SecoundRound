// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

// import {css} from 'emotion';
import React from 'react';
// import TodoInput from './TodoInput';
// import TodoList from './TodoList';
import MedicineIndex from './MedicineIndex';
import  AddMedicine from './Add';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const PrimaryLayout = () => (
  <div >
     <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">ABC Pharmacy</Navbar.Brand>
            <Nav className="mr-auto">
              <NavItem> <Link to="/" style={{color:'white' , paddingLeft:'20px'}}>Home</Link></NavItem> 
              <NavItem>  <Link to="/add" style={{color:'white', paddingLeft:'20px'}}>Add Stock</Link></NavItem> 
            </Nav>

        </Navbar>
      <Route path="/" exact component={MedicineIndex} />
      <Route path="/add" component={AddMedicine} />
    
  </div>
)


export default function App() {
  return (
   
    <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
  );
}

