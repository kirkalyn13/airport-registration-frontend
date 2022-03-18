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
      <div className="info-row"><strong>Last Name: </strong>{userInfo.lastName}</div>
      <div className="info-row"><strong>First Name: </strong>{userInfo.firstName}</div>
      <div className="info-row"><strong>Middle Name: </strong>{userInfo.middleName}</div>
      <div className="info-row"><strong>Sex: </strong>{userInfo.sex}</div>
      <div className="info-row"><strong>Birthday: </strong>{userInfo.birthday}</div>
      <div className="info-row"><strong>Address: </strong>{userInfo.address}</div>
      <div className="info-row"><strong>Email: </strong>{userInfo.email}</div>
      <div className="info-row"><strong>Contact Number: </strong>{userInfo.contactNumber}</div>
      <Button/>
    </div>
  )
}

export default Details