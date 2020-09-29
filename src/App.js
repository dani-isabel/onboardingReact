import React from 'react';
import './App.scss';
import { BrowserRouter } from "react-router-dom";

import Home from './components/home/home';
import Introduction from './components/introduction/introduction';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Introduction/>
      </div>
    </BrowserRouter>
  );
}

export default App;
