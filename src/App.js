import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { MyNavbar } from './components'
import { About, Home, Projects } from './pages'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons'

import './App.css'
// Library used for icons
library.add(fab, fas)

function App () {
  return (
    <>
      {/* ************************** */}
      <div className='follow-me'>
        <ul>
          <li>
            <SocialIcon url='https://github.com/adliano' bgColor='#444' fgColor='fff'/>
          </li>
          <li>
            <SocialIcon url='https://www.linkedin.com/in/adliano/' />
          </li>
          <li>
            <SocialIcon url='https://www.instagram.com/adliano/' />
          </li>
        </ul>
      </div>
      {/* ************************** */}
      <BrowserRouter>
        <MyNavbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
      </BrowserRouter>
    </>

  )
}

export default App
