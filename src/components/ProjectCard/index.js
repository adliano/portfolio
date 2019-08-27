import React from 'react'
import './style.css'

export function ProjectCard (props) {
  return (
    <div className='container'>
      <div className='project_card'>
        <div className='face face1'>
          <div className='content'>
            <img src='assets/images/90s.png' alt={props.alt} />
            <h4>Card Title</h4>
          </div>
        </div>
        <div className='face face2'>
          <div className='content'>
            <p>card text in here about project</p>
            <a href='/'>github</a>
          </div>
        </div>
      </div>
    </div>
  )
}
