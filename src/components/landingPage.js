import React,{ Component } from 'react';
import {Grid, Cell}from 'react-mdl'


class LandingPage extends Component {
    render()
    {
        return(
            <div style={{width: '100%', margin: 'auto'}}></div>
            <Grid className ="landing-grid">
                <Cell col={12}></Cell>
            </Grid>
        )
}
}

export default LandingPage;