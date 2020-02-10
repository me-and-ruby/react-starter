import React from 'react';
import Menu from "./components/Menu"
import {Navbar, NavbarBrand} from "reactstrap";



function App() {
  return (
    <div className="App">

      <Navbar dark color="primary" >
        <div className="container">
          <NavbarBrand href="/">MyBrand</NavbarBrand>
        </div>

      </Navbar>
      <Menu/>
      
    </div>
  );
}

export default App;
