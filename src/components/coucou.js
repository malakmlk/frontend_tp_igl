
import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

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

render() {
    return (
        <div>
            <h3 align="center">Update Todo</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.CF}
                            onChange={this.onChangeCF}
                            />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.CI}
                            onChange={this.onChangeCI}
                            />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityLow" 
                                value="Low"
                                checked={this.state.CC==='Low'} 
                                onChange={this.onChangeCC}
                                />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityMedium" 
                                value="Medium" 
                                checked={this.state.CC==='Medium'} 
                                onChange={this.onChangeCC}
                                />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityHigh" 
                                value="High" 
                                checked={this.state.CC==='High'} 
                                onChange={this.onChangeCC}
                                />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-check">
                    <input  className="form-check-input"
                            id="completedCheckbox"
                            type="checkbox"
                            name="completedCheckbox"
                            onChange={this.onChangemoyenne}
                            checked={this.state.todo_completed}
                            value={this.state.todo_completed}
                            />
                    <label className="form-check-label" htmlFor="completedCheckbox">
                        Completed
                    </label>                        
                </div>

                <br />

                <div className="form-group">
                    <input type="submit" value="Update Todo" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
}


export default coucou
