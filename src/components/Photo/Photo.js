import React from 'react'
import './Photo.css'

const DEFAULT = './assets/default_pic.png'

const Photo = () => {
  return (
    <div>
        <img className="logo" src={DEFAULT} width="300" height="300" alt="logo" margin="20px"/>
    </div>
  )
}

export default Photo