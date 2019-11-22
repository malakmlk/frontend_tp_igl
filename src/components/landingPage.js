import React,{ Component } from 'react';
import {Grid, Cell,Textfield} from 'react-mdl'


class LandingPage extends Component {
    render()
    {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                <img
                 src="https://icon-library.net/images/administration-icon/administration-icon-5.jpg"
                 alt="avatar"
                 className="avatar-img"
                  
                 >
                </img>
               
               
               
                </Cell>
            </Grid>
            </div>

        )
}
}

export default LandingPage;