import React from 'react';
import Menu from "./components/Menu"
import {Navbar, NavbarBrand} from "reactstrap";
import { DISHES } from './shared/dish';




class App extends React.Component{
     constructor(props){
       super(props);
       this.state={
         dishes: DISHES
       }
     }
  render(){

    return (
      <div className="App">
  
        <Navbar dark color="primary" >
          <div className="container">
            <NavbarBrand href="/">MyBrand</NavbarBrand>
          </div>
  
        </Navbar>
        <Menu dishes={this.state.dishes}/>
        
      </div>
    );
  }
  
}

export default App;
