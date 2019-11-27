import React, { Component } from 'react';
import axios from 'axios';
import About from './About';
import {Card,ListItem,Button,CardTitle,Textfield,CardText} from  'react-mdl';


export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matricule: '',
            promo:'',
            groupeactuel: '',
            groupevoulu: '',
            raison: '',
            valide:false
        }

        this.onChangeMatricule = this.onChangeMatricule.bind(this);
        this.onChangegroupeactuel = this.onChangegroupeactuel.bind(this);
        this.onChangegroupevoulu = this.onChangegroupevoulu.bind(this);
        this.onChangeraison = this.onChangeraison.bind(this);
        this.onChangepromo = this.onChangepromo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeMatricule(e) {
        this.setState({
        matricule: e.target.value
        });
    }
    onChangepromo(e) {
        this.setState({
        promo: e.target.value
        });
    }

    onChangegroupeactuel(e) {
        this.setState({
            groupeactuel: e.target.value
        });
    }

    onChangegroupevoulu(e) {
        this.setState({
            groupevoulu: e.target.value
        });
    }
    onChangeraison(e) {
        this.setState({
            raison: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.matricule}`);
        console.log(`Todo Responsible: ${this.state.groupeactuel}`);
        console.log(`Todo Priority: ${this.state.groupevoulu}`);
        const newTodo = {
            matricule: this.state.matricule,
            groupeactuel: this.state.groupeactuel,
            groupevoulu: this.state.groupevoulu,
            promo: this.state.promo,
            raison:this.state.raison,
            valide:false
        };

        axios.post('http://localhost:3000/groupe', newTodo)
            .then(res => console.log(res.data));
        this.setState({
            matricule: '',
            groupeactuel: '',
            groupevoulu: '',
            promo:'',
            valide:false,
            raison:''
        })
    }
    render() {
        return (
            <layout>
            <About></About>
      
            <div  className="list-form" style={{marginTop:'50px'}} >
              <layout > 
                <Card shadow={10} style={{width: '700px', height: '990px',pandding:"10",marginTop:'450px',marginBottom:'90px'}}>
                  <CardTitle  expand style={{textDecoration: 'double', padding:"0px",textDecorationStyle:"italic",flexGrow:'0',marginLeft:'15px',marginTop:"50px",marginBottom:"35px"}}>
                     <h1 className="h-form">Demande changement groupe</h1>
                  </CardTitle>
                  <CardText expand  style={{padding:"0px",margin:"150px",marginTop: "-15px",width:'700px'}}>
                         <form onSubmit={this.onSubmit}>
                         <list>                        
                          <ListItem>
                            <Textfield                          
                              label="Matricule..."
                              value={this.state.matricule}
                              onChange={this.onChangeMatricule}
                              floatingLabel
                              style={{width: '300px'}}/>
                          </ListItem>
                         
                         
                         
                          <ListItem>
                          <Textfield
                                    value={this.state.promo}
                                    onChange={this.onChangepromo}
                                    label="Promo..."
                                    floatingLabel
                                    style={{width: '300px'}}
                                />
                          </ListItem>
                         
                          
                         
                          <ListItem>
                            <Textfield                           
                              label="Groupe Actuel..."
                              value={this.state.groupeactuel}
                              onChange={this.onChangegroupeactuel}
                              floatingLabel
                              style={{width: '300px'}}/>
                          </ListItem>

                          <ListItem>
                            <Textfield
                              
                              label="Groupe voulu..."
                              value={this.state.groupevoulu}
                              onChange={this.onChangegroupevoulu}
                              floatingLabel
                              style={{width: '300px'}}/>
                          </ListItem>

                          

                          <ListItem>
                              <Textfield id='use'                         
                              label="Pourquoi vous voulez changer de groupe?..."
                              value={this.state.raison}
                              onChange={this.onChangeraison}
                              rows={3}
                              style={{width: '350px'}} />
                          </ListItem>

                          <ListItem>
                             <Button  type='submit' ClassName ="btn-form" position ="center" raised accent ripple type='submit' >Envoyer</Button>
      
                         </ListItem>

                         </list>
                         </form>
                   </CardText>
                  
                </Card>
              </layout>
            </div>
            </layout>
        )
    }
}