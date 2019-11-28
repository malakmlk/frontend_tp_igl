




  
  
import React, { Component } from 'react';
import About from './About';
import axios from 'axios';

const Note = props => (
    <tr>
        <td>{props.note.cc}</td>
        <td>{props.note.cf}</td>
        <td>{props.note.ci}</td>
        <td>{props.note.moyenne}</td>
        <td>{props.note.matricule}</td>
        <td>{props.note.module}</td>
        
    </tr>
)

export default class notesList extends Component {

    constructor(props) {
        super(props);
        this.state = {note: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3000/note')
            .then(response => {
                this.setState({ note: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    noteList() {
        return this.state.note.map(function(currentnote, i){
            return <note note={currentnote} key={i} />;
        })
    }

    render() {
        return (
            
            <layout>
                <About></About>
                <div marginTop ='700px'>
                <h3>notes List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>cc</th>
                            <th>CF</th>
                            <th>CI</th>
                            <th>Module</th>
                            <th>Matricule</th>
                            <th>Moyenne</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.noteList() }
                    </tbody>
                </table>
                </div>
            </layout>
        )
    }
}
  
  




  
  
 

   
  
  
    
