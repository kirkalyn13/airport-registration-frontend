import React from 'react'
import { useSelector } from 'react-redux'
import './Photo.css'

const DEFAULT = './assets/default_pic.png'

const Photo = () => {
  const userInfo = useSelector((state) => state.data.data)
  
  return (
    <div>
        <img className="photo" src={userInfo.photo ? userInfo.photo : DEFAULT} width="200" height="200" alt="logo" margin="20px"/>
    </div>
  )
}

export default Photo