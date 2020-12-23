import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from './Landingpage';
import AboutMe from './Aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './Resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path='/Aboutme' component={AboutMe}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/Resume' component={Resume}/>
    </Switch>
)

export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase)
}

export default Main;