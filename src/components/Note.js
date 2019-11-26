import React,{ Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';

import {DataTable,TableHeader} from 'react-mdl';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Container from '@material-ui/core/Container';
import About from './About';




export default class Note extends Component {
 

  constructor(props) {
      super(props);
  
      /*this.onChangeCF = this.onChangeCF.bind(this);
      this.onChangeCI = this.onChangeCI.bind(this);
      this.onChangeCC = this.onChangeCC.bind(this);
      this.onChangeMoyenne = this.onChangemoyenne.bind(this);
      this.onChangeModule= this.onChangeModule.bind(this);
      this.onSubmit = this.onSubmit.bind(this);*/
  
      this.state = {
          CF: '',
          CI: '',
          CC: '',
          moyenne:'',
          module:'',
      }
  }
  

  
  onChangeCF(e) {
      this.setState({
          CF: e.target.value
      });
  }
  
  onChangeCI(e) {
      this.setState({
          CI: e.target.value
      });
  }
  
  onChangeCC(e) {
      this.setState({
          CC: e.target.value
      });
  }
  
  onChangeMoyenne(e) {
      this.setState({
          moyenne: e.target.value
      });
  }
  onChangeModule(e) {
    this.setState({
        module: e.target.value
    });
  }
  
  onSubmit(e) {
      e.preventDefault();
      const obj = {
          CF: this.state.CF,
          CI: this.state.CI,
          CC: this.state.CC,
          moyenne: this.state.moyenne,
          module: this.state.module,
  
      };
    /*  console.log(obj);
      axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
          .then(res => console.log(res.data));*/
      
      this.props.history.push('/');
  }
   
  
 
  //*************************************************************************************************************************//

  render() {

      return (
        
            
            <About></About>
            
            
      )
  }
  }
  
  
  




  
  
 

   
  
  
    
