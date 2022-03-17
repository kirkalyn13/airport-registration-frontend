import React from 'react'
import Button from '../Button/Button'
import './Details.css'

const Details = () => {
  return (
    <div>
      <h2>Personal Information</h2>
      <div className="info-row"><strong>Last Name: </strong>Santos</div>
      <div className="info-row"><strong>First Name: </strong>Kirk Alyn</div>
      <div className="info-row"><strong>Middle Name: </strong>Limbitco</div>
      <div className="info-row"><strong>Sex: </strong>Male</div>
      <div className="info-row"><strong>Birthday: </strong>12/13/1996</div>
      <div className="info-row"><strong>Address: </strong>Calibutbut, Bacolor, Pampanga</div>
      <div className="info-row"><strong>Email: </strong>kirkalyn13@gmail.com</div>
      <div className="info-row"><strong>Contact Number: </strong>09613598877</div>
      <Button/>
    </div>
  )
}

export default Details