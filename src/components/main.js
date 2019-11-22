import React from 'react';
import LandingPage from './landingPage';
import About from './About';
import Form from './UserForm';
import Note from './Note';

import { Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} ></Route>
        <Route  path="/"  component={Form} ></Route>
        <Route  path="/"  component={About} ></Route>
        
        <Route  path="/"  component={Note} ></Route>



    </Switch>
)
export default Main;