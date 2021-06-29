//creates a single page application without doing a full page refresh
//react-router is a popular react library used to create spa
//when changing version, there could be a change in syntax
import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return <h2>react router</h2>;
};

export default ReactRouterSetup;
