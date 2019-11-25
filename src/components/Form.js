import React, { Component} from 'react'
import { Card,CardText,CardTitle, Textfield,ListItem,Button } from 'react-mdl';
import { Drawer } from '@material-ui/core';
import About from './About';




export class Form extends Component {

  constructor(props) 
  {
    super(props);
    this.state = 
          { username: '',
            matricule:'',
            grpActuel:'',
            grpvoulu:'',
            cause:'',
            promo:'',

         };
  }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(this.state.username);

        }
        mySubmitHandler = (event) => {
        
          if ((this.state.matricule=='')|(this.state.grpvoulu=='')) {
            alert("please fill out all the following form");
          }
          else{
            event.preventDefault();
            alert("You are submitting " + this.state.username);
          }
        }


  render() {
    return (
      <layout>
      <About></About>

      <form onSubmit={this.mySubmitHandler} className="list-form" style={{marginTop:'50px'}} >
        <layout >

          <Card shadow={10} style={{width: '700px', height: '990px',pandding:"10",marginTop:'450px',marginBottom:'90px'}}>
            <CardTitle  expand style={{textDecoration: 'double', padding:"0px",marginLeft:"0px",textDecorationStyle:"italic",flexGrow:'0',marginLeft:'15px',marginTop:"50px",marginBottom:"35px"}}>
               <h1 className="h-form">Demande changement groupe</h1>
            </CardTitle>
            <CardText expand  style={{padding:"0px",margin:"150px",marginTop: "-15px",width:'700px'}}>
                   <list  >
            
                    <ListItem> 
                      <Textfield
                        onChange={this.myChangeHandler}
                        label="UserName..."
                        name='username'
                        floatingLabel
                        style={{width: '300px'}}/>
                    </ListItem>
                    <ListItem>
                      <Textfield
                        onChange={this.myChangeHandler}
                        label="Matricule..."
                        name='matricule'
                        floatingLabel
                        style={{width: '300px'}}/>
                    </ListItem>
                    <ListItem>
                    <label>
                      Promo   :
                      <select>
                        <option >L1</option>
                        <option value="lime">L2</option>
                        <option selected value="coconut">L3</option>
                        <option value="mango">M1</option>
                        <option value="mango">M2</option>
                        
                      </select>
                    </label>
                    </ListItem>
                    <ListItem>
                      <Textfield
                       onChange={this.myChangeHandler}
                        label="Groupe Actuel..."
                        name='grpActuel'
                        floatingLabel
                        style={{width: '300px'}}/>
                    </ListItem>
                    <ListItem>
                      <Textfield
                        onChange={this.myChangeHandler}
                        label="Groupe voulu..."
                        name='grpvoulu'
                        floatingLabel
                        style={{width: '300px'}}/>
                    </ListItem>
                    <ListItem>
                        <Textfield id='use'
                        onChange={this.myChangeHandler}
                        label="Pourquoi vous voulez changer de groupe?..."
                        name='cause'
                        rows={3}
                        style={{width: '350px'}} />
                    </ListItem>
                    <ListItem>
                       <Button  onSubmit={this.mySubmitHandler} ClassName ="btn-form" position ="center" raised accent ripple type='submit' >Envoyer</Button>

                   </ListItem>
                   </list>
             </CardText>
            
          </Card>
          </layout>
      </form>
      </layout>
    )
  }
}

export default Form;
