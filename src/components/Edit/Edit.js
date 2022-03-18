import {useContext} from 'react'
import ExitButton from '../Button/Button'
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { edit } from '../../features/slices/user'
import { SERVER } from '../../App'
import { AuthContext } from '../../App'
import Button from '@mui/material/Button'
import SaveAltIcon from '@mui/icons-material/SaveAlt'
import axios from 'axios'
import './Edit.css'

const buttonStyles = {
  backgroundColor: '#00BCD4', 
  color: '#000', 
  fontWeight:"bold",
  margin: "20px 0"
}

const Edit = () => {
  const {user} = useContext(AuthContext)
  const userInfo = useSelector((state) => state.data.data)
  const dispatch = useDispatch()
  const {register,  formState: {errors}, handleSubmit} = useForm(
    {
      defaultValues: {
        lastName: userInfo.lastName,
        firstName: userInfo.firstName,
        middleName: userInfo.middleName,
        sex: userInfo.sex,
        birthday: userInfo.birthday,
        address:  userInfo.address,
        email: userInfo.email,
        contactNumber: userInfo.contactNumber,
      }
    }
  )

  const saveChanges = data => {
    //console.log(data)
    axios.put(`${SERVER}/edit/${user.userNumber}`, data).then((response)=>{
      dispatch(edit(data))
        })
    alert("Changes saved.")
    window.location.reload()
  }

  return (
    <div className="container-edit">
      <form  className="input-info-login" onSubmit={handleSubmit(data => saveChanges(data))}>
                    <label className="label-info">Update Recent Photo: </label>
                    <input type="file"
                                {...register("photo",{required: "Please upload your recent photo."})}
                                accept="image/*"
                                placeholder="Equipment Image"
                                style={{border:"inherit"}}/>
                    {errors.photo ? <p className="error">{errors.photo.message}</p> : null}
                    {/*<label className="label-info">User Name: </label>
                    <input className="input-login" type="text"    
                    {...register("username",{required: "This field is required.", 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter User Name"/>
                    {errors.username ? <p className="error">{errors.username.message}</p> : null}
                    <label className="label-info">Password: </label>
                    <input  className="input-login" type="password" 
                    {...register("password",{required: "This field is required.", 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."},
                    minLength: {value: 8, message: "Minimum of 8 characters."}})}
                    placeholder="Enter Password"/>
                    {errors.password ? <p className="error">{errors.password.message}</p> : null}*/}
                    <h2 className="label-info">Personal Information: </h2>
                    <label className="label-info">Last Name: </label>
                    <input className="input-login" type="text"    
                    {...register("lastName",{required: "This field is required.", 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter Last Name"/>
                    {errors.lastName ? <p className="error">{errors.lastName.message}</p> : null}
                    <label className="label-info">First Name: </label>
                    <input  className="input-login" type="text" 
                    {...register("firstName",{required: "This field is required.", 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter First Name"/>
                    {errors.firstName ? <p className="error">{errors.firstName.message}</p> : null}
                    <label className="label-info">Middle Name: </label>
                    <input className="input-login" type="text"    
                    {...register("middleName",{required: "This field is required.", 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter Middle Name"/>
                    {errors.middleName ? <p className="error">{errors.middleName.message}</p> : null}
                    <label className="label-info">Sex: </label>
                    <div className="container-sex">
                        <input type="radio" id="male" value="M"
                        {...register("sex", {required: "This field is required.", maxLength: 2})} />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" value="F"
                        {...register("sex", {required: "This field is required.", maxLength: 2})} />
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="others" value="NA"
                        {...register("sex", {required: "This field is required.", maxLength: 2})} />
                        <label htmlFor="others">Others</label>
                    </div>
                    {errors.sex ? <p className="error">{errors.sex.message}</p> : null}
                    <label className="label-info">Birthday: </label>
                    <input className="input-login" type="date"    
                    {...register("birthday", {required: "This field is required.", valueAsDate: true})}
                    placeholder="Enter Birthday"/>
                    {errors.birthday ? <p className="error">{errors.birthday.message}</p> : null}
                    <label className="label-info">Address: </label>
                    <input  className="input-login" type="text" 
                    {...register("address",{required: "This field is required.", 
                    maxLength: {value: 255, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter Address"/>
                    {errors.address ? <p className="error">{errors.address.message}</p> : null}
                    <label className="label-info">Email: </label>
                    <input className="input-login" type="text"    
                    {...register("email",{required: "This field is required.", 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter Email"/>
                    {errors.email ? <p className="error">{errors.email.message}</p> : null}
                    <label className="label-info">Contact Number: </label>
                    <input  className="input-login" type="number" 
                    {...register("contactNumber", {required: "This field is required.", 
                    valueAsNumber: true, 
                    maxLength: {value: 30, message: "You have exceeded the maximum limit."}})}
                    placeholder="Enter Contact Number"/>
                    {errors.contactNumber ? <p className="error">{errors.contactNumber.message}</p> : null}
                    <Button
                    type="submit"
                    variant="contained"
                    style={buttonStyles}
                    startIcon={<SaveAltIcon />}
                    >
                    SAVE
                    </Button>
      </form>
      <ExitButton />
    </div>
  )
}

export default Edit