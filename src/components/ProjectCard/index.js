import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

export function ProjectCard (props) {
  return (
    <div className='container'>
      <div className='project_card'>
        <div className='face face1'>
          <div className='content'>
            <img src={props.image} alt='project media' />
            <h4>{props.title}</h4>
          </div>
        </div>
        <div className='face face2'>
          <div className='content'>
            <p>{props.children}</p>
            <a href={props.github}>
              <FontAwesomeIcon icon={['fab', 'github-alt']} /> github
            </a>
            {props.webpage ? (
              <a href={props.webpage}>
                <FontAwesomeIcon icon={['fas', 'globe-americas']} /> webpage
              </a>
            ) : ('')}
          </div>
        </div>
      </div>
    </div>
  )
}
