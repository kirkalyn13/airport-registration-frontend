import React from 'react'
import './Login.css'
import { useState, useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { SERVER } from '../../App'
import Alert from '@mui/material/Alert'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const alertStyles = {
    color:'#F44336',
    fontWeight:'bold', 
    fontSize:'medium'
}
const linkStyles = {
    backgroundColor: "#CFD8DC",
    color: "#000",
    border: "none",
    fontWeight: "bold",
}

const LOGO = "./assets/airport.png"

const Login = () => {
    const [invalid, setInvalid] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm()

    const login = (data) => {
        axios.post(`${SERVER}/login`,data).then(res=>{
            console.log(res.data)
        })
    }
  return (
    <div className="login-page">
            <img className="logo" src={LOGO} width="300" height="300" alt="logo" margin="20px"/>
            <div className="title">
                <h1 className="title-text">Airport Registration</h1>
            </div>
            <div className="login">
                <form className="input-info-login" autoComplete="off" onSubmit={handleSubmit(data => login(data))}>
                {invalid === true ? 
                <Alert 
                    severity="error" width="200px" variant="outlined"
                    style={alertStyles}>
                        Invalid User Credentials.
                </Alert> : null}
                    <label className="label-info">User Name: </label>
                    <input className="input-login" type="text"    
                    {...register("username", {required: "This field is required."})}
                    placeholder="Enter User Name"/>
                    {errors.username ? <p className="error">{errors.username.message}</p> : null}
                    <label className="label-info">Password: </label>
                    <input  className="input-login" type="password" 
                    {...register("password", {required: "This field is required."})}
                    placeholder="Enter Password"/>
                    {errors.password ? <p className="error">{errors.password.message}</p> : null}
                    <input className="btn-login" type="submit" value="LOG IN"/>
                </form>
                <Link style={linkStyles} to="/create">Create Account</Link>
            </div>
        </div>
  )
}

export default Login