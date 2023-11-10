import React from 'react'
import './Github.css'
import { ImGithub } from 'react-icons/im';


const Github = () => {
  return (
    <div className='github'>
        <a href="https://github.com/alanotero98"
        target="_blank">
        <ImGithub className='logoGithub'/>
        </a>
    </div>
  )
}

export default Github