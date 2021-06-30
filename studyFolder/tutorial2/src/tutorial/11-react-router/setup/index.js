//creates a single page application without doing a full page refresh
//react-router is a popular react library used to create spa
//when changing version, there could be a change in syntax
// react doesn't have built in router, it must use a non official library
// npm react-router-dom must be installed for it to work

import React from 'react';
// react router
//to use from react router, must import the packages, givin alias
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components that will become pages
import Home from './Home';
import About from './About';
import People from './People';
//without a error page, only a blank page is displayed
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  // usually when use react router you wrap the whole application on <Router><Router/> so the whole application can use it
  return (
    <Router>
      <Navbar />
      {/* the path prop show is what will be on the url page */}
      {/* becareful, because if the path matchs it will display both components "/" "/about"  the prop exact makes only exact props match*/}
      {/* the switch components avoid the error to be always displayed, only the first one  that matches is displayed */}
      <Switch>
        <Route exact path='/'>
          {/* inside the main component, display the child ones */}
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        {/* route to error page a star means it will always match, the switch components avoid the error to be always displayed, only the first one  that matches is displayed*/}
        {/* the beginning path can be anything such as /person/:id, children component will be the  one displayed*/}
        {/* create a page for each id passed */}
        <Route path='/person/:id' children={<Person />}></Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
