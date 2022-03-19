import { useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AuthContext } from '../../App'
import { fetchUserData } from '../../features/slices/user'
import Button from '../Button/Button'
import './Details.css'


const Details = () => {
  const {user} = useContext(AuthContext)
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.data.data)

  useEffect(()=>{
    dispatch(fetchUserData(user.userNumber))
  },[])

  return (
    <div>
      <h2>Personal Information</h2>
      <div className="info-row"><strong className="info-label">Last Name: </strong><div className="info" >{userInfo.lastName}</div></div>
      <div className="info-row"><strong className="info-label">First Name: </strong><div className="info" >{userInfo.firstName}</div></div>
      <div className="info-row"><strong className="info-label">Middle Name: </strong><div className="info" >{userInfo.middleName}</div></div>
      <div className="info-row"><strong className="info-label">Sex: </strong><div className="info" >{userInfo.sex}</div></div>
      <div className="info-row"><strong className="info-label">Birthday: </strong><div className="info" >{userInfo.birthday}</div></div>
      <div className="info-row"><strong className="info-label">Address: </strong><div className="info" >{userInfo.address}</div></div>
      <div className="info-row"><strong className="info-label">Email: </strong><div className="info" >{userInfo.email}</div></div>
      <div className="info-row"><strong className="info-label">Contact Number: </strong><div className="info" >{userInfo.contactNumber}</div></div>
      <Button/>
    </div>
  )
}

export default Details