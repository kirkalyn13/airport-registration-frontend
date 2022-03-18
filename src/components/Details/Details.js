import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../Button/Button'
import './Details.css'


const Details = () => {
  const user = useSelector((state) => state.data.value)

  return (
    <div>
      <h2>Personal Information</h2>
      <div className="info-row"><strong>Last Name: </strong>{user.lastName}</div>
      <div className="info-row"><strong>First Name: </strong>{user.firstName}</div>
      <div className="info-row"><strong>Middle Name: </strong>{user.middleName}</div>
      <div className="info-row"><strong>Sex: </strong>{user.sex}</div>
      <div className="info-row"><strong>Birthday: </strong>{user.birthday}</div>
      <div className="info-row"><strong>Address: </strong>{user.address}</div>
      <div className="info-row"><strong>Email: </strong>{user.email}</div>
      <div className="info-row"><strong>Contact Number: </strong>{user.contactNumber}</div>
      <Button/>
    </div>
  )
}

export default Details