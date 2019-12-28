import React, { Component } from 'react';
import About from './About';
import {Grid,Cell} from 'react-mdl';
import Image from '../Capture.PNG';
export default class AboutUs extends Component {
      
    render(){
        return(
            <layout >
           
                 <About ></About>
           
            
                    <div style={{width: '80%', margin: 'auto'}}>
                    <Grid className="demo-grid-ruler">
                        <Cell col={1}>1</Cell>
                        <Cell col={1}>1</Cell>
                        
                    </Grid>
                    <Grid className="demo-grid-1">
                        <Cell col={4}>AboutUs</Cell>
                        <Cell className="illustration" col={4}><img    src={Image}/></Cell>
                        
                    </Grid>
                    
                    
                </div>
         </layout>
        )
    }
}
