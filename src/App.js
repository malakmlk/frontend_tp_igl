
import React,{ Component } from 'react';
import { UserForm } from './components/UserForm';
import {Layout, Header, Navigation, Drawer, Content}from "react-mdl";

import './App.css';


class App extends Component {
    render() {
 
        return (
      
          <div className="App">
              <UserForm/>
          
      </div>
        );
}
}

export default App;
