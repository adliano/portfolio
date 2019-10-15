import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

export function ProjectCard (props) {
  const { image, title, children, github, webpage, technologiesUsed } = props
  return (
    <div className='container'>
      <div className='project_card'>
        <div className='face face1'>
          <div className='content'>
            <img src={image} alt='project media' />
            <h4>{title}</h4>
          </div>
        </div>
        <div className='face face2'>
          <div className='content'>
            <p>{children}</p>
            <a href={github}>
              <FontAwesomeIcon icon={['fab', 'github-alt']} /> github
            </a>
            {webpage ? (
              <a href={webpage}>
                <FontAwesomeIcon icon={['fas', 'globe-americas']} /> webpage
              </a>
            ) : (
              ''
            )}
            {/* {props.technologiesUsed.map((item, index) => {
              return <a href='www.google.com'>Test index {index}</a>
            })} */}
          </div>
        </div>
      </div>
    </div>
  )
}
