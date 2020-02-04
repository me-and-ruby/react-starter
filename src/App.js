import React from 'react';
import {Navbar, NavbarBrand} from "reactstrap";



function App() {
  return (
    <div className="App">

      <Navbar dark color="primary" >
        <div className="container">
          <NavbarBrand href="/">MyBrand</NavbarBrand>
        </div>

      </Navbar>
      
    </div>
  );
}

export default App;
