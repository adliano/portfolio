import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { MyNavbar } from './components'
import { Home, Projects } from './pages'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects' component={Projects}/>
      </BrowserRouter>
    </>
  );
}

export default App;
