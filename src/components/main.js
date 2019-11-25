import React from 'react';
import SignIn from './SignIn';
import About from './About';
import Form from './Form';
import Note from './Note';

import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
       
       <Route exact path="/" component={SignIn} ></Route>
       <Route  path="/Form"  component={Form} ></Route>
       <Route  path="/Note"  component={Note} ></Route>
       
       
        
       
        
   



    </Switch>
)
export default Main;