import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { MyNavbar } from './components'
import { About, Home, Projects } from './pages'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './App.css';
// Library used for icons
library.add(fab, fas)

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/projects' component={Projects}/>
      </BrowserRouter>
    </>
  );
}

export default App;
