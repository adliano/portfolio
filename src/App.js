import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { MyNavbar } from './components'
import { Home, Projects } from './pages'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faAt, faPhoneSquareAlt, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './App.css';

// library.add(fab, faAt, faPhoneSquareAlt, faFileDownload)
library.add(fab, fas)

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
