import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from './components/home/home';
import Introduction from './components/introduction/introduction';
import CareerPath from './components/career-path/career-path';
import Triforce from './components/triforce/triforce';

function App() {
  const [home, setValueHome] = useState([]);
  console.log(home);
  console.log(useState);
  return (
    <Router>
      <div className="App">
        <Route path = "/" exact component = {Home}/>
        <Route path = "/intro/:name" component = {Introduction}/>
        <Route path = "/career" component = {CareerPath}/>
        <Route path = "/triforce/:name" component = {Triforce}/>
      </div>
    </Router>
  );
}

export default App;
