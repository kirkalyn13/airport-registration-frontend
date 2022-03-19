import React from 'react'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { SERVER } from '../../App'
import { AuthContext } from '../../App'
import './Create.css'
import axios from 'axios'

const linkStyles = {
    backgroundColor: "#CFD8DC",
    color: "#000",
    border: "none",
    fontWeight: "bold",
}

const LOGO = "./assets/add_account.png"

const Create = () => {
    const {register, watch,handleSubmit, formState: {errors}} = useForm()
    const {setUser, setIsAuth} = useContext(AuthContext)

    const createUser = (data) => {
        axios.post(`${SERVER}/createuser`,data).then(res=>{ 
            alert("Registered Successfully.")
            login(data)
        })
    }

    console.log(watch())
    const login = (data) => {
        axios.post(`${SERVER}/login`,data).then(response =>{
            if(response.data.login === true){
                setUser(response.data)
                setIsAuth(true)
            }else{
                setUser({
                    username: "",
                    userNumber:"",
                    login: false
                })
            }
        }).catch(err =>{
            console.log(err);
        })
      }

  return (
    <div className="create-page">
            <img className="logo" src={LOGO} width="100" height="100" alt="logo" margin="20px"/>
            <div className="title">
                <h1 className="title-text">Create New Account</h1>
            </div>
            <div className="create">
                <form className="input-info-create" autoComplete="off" onSubmit={handleSubmit(data => createUser(data))}>
                <h2 className="label-info">Account Information: </h2>
                    <label className="label-info">User Name: </label>
                    <input className="input-create" type="text"    
                    {...register("username", {required: "This field is required.", 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter Username"/>
                    {errors.username ? <p className="error">{errors.username.message}</p> : null}
                    <label className="label-info">Password: </label>
                    <input  className="input-create" type="password" 
                    {...register("password", {required: "This field is required.", 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."},
                    minLength: {value: 8, message: "Minimum of 8 characters."}})}
                    placeholder="Enter Password"/>
                    {errors.password ? <p className="error">{errors.password.message}</p> : null}
                <h2 className="label-info">Personal Information: </h2>
                    <label className="label-info">Last Name: </label>
                    <input className="input-create" type="text"    
                    {...register("lastName", {required: "This field is required.", 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter Last Name"
                    />
                    {errors.lastName ? <p className="error">{errors.lastName.message}</p> : null}
                    <label className="label-info">First Name: </label>
                    <input  className="input-create" type="text" 
                    {...register("firstName", {required: "This field is required.", 
                    maxLength: {value: 50, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter First Name"
                    />
                    {errors.firstName ? <p className="error">{errors.firstName.message}</p> : null}
                    <label className="label-info">Middle Name: </label>
                    <input className="input-create" type="text"    
                    {...register("middleName", {required: "This field is required.", 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter Middle Name"
                    />
                    {errors.middleName ? <p className="error">{errors.middleName.message}</p> : null}
                    <label className="label-info">Sex: </label>
                    <div className="container-sex">
                        <input type="radio" id="male"  
                        {...register("sex", {required: "This field is required.", maxLength: 2})} value="M"/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" 
                        {...register("sex", {required: "This field is required.", maxLength: 2})} value="F"/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="others"  
                        {...register("sex", {required: "This field is required.", maxLength: 2})} value="NA"/>
                        <label htmlFor="others">Others</label>
                    </div>
                    {errors.sex ? <p className="error">{errors.sex.message}</p> : null}
                    <label className="label-info">Birthday: </label>
                    <input className="input-create" type="date"    
                    {...register("birthday", {required: "This field is required.", valueAsDate: true})}
                    placeholder="Enter Birthday"/>
                    {errors.birthday ? <p className="error">{errors.birthday.message}</p> : null}
                    <label className="label-info">Address: </label>
                    <input  className="input-create" type="text" 
                    {...register("address", {
                    required: "This field is required.", 
                    maxLength: {value: 255, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter Address"
                    />
                    {errors.address ? <p className="error">{errors.address.message}</p> : null}
                    <label className="label-info">Email: </label>
                    <input className="input-create" type="text"    
                    {...register("email", {required: "This field is required.", 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter Email"/>
                    {errors.email ? <p className="error">{errors.email.message}</p> : null}
                    <label className="label-info">Contact Number: </label>
                    <input  className="input-create" type="number" 
                    {...register("contactNumber", {required: "This field is required.", 
                    valueAsNumber: true, 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter Contact Number"/>
                    {errors.contactNumber ? <p className="error">{errors.contactNumber.message}</p> : null}
                    <label className="label-info">Recent Photo: </label>
                <input className="btn-create" type="submit" value="CREATE ACCOUNT"/>
                </form>
                <Link style={linkStyles} to="/login">Login</Link>
            </div>
        </div>
  )
}

export default Create