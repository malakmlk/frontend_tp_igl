import React from 'react';
import LandingPage from './landingPage';
import About from './About';
import Form from './Form';
import Note from './Note';

import { Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/" component={About} />
        <Route  path="/" component={Form} />
        <Route  path="/" component={Note} />



    </Switch>
)
export default Main;