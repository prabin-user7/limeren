
import WebFont from 'webfontloader';
import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return(<>
  <Router>
  <Switch >
    <Route exact path="/"> 
      <Home />
    </Route>
    <Route path="/books"> 
      <Home />
    </Route>
    </Switch>
  </Router>

 
  </>)
}

export default App;

