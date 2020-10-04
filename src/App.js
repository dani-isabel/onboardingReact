import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from './components/home/home';
import Introduction from './components/introduction/introduction';
import CareerPath from './components/career-path/career-path';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/" exact component = {Home}/>
        {/* <Route path = "/intro" component = {() => <Introduction userName={'Carolina'}/>}/> */}
        <Route path = "/intro/:name" component = {Introduction}/>
        <Route path = "/career" component = {CareerPath}/>
      </div>
    </Router>
  );
}

export default App;
