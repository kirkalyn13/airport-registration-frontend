import {useState, createContext} from 'react'
import Header from '../../components/Header/Header'
import Photo from '../../components/Photo/Photo'
import Details from '../../components/Details/Details'
import Edit from '../../components/Edit/Edit'
import './Registration.css'

export const RegistrationContext = createContext()

const Registration = () => {
  const [showEdit, setShowEdit] = useState(false)

  return (
    <RegistrationContext.Provider value={{showEdit, setShowEdit}}>
    <div className="container-registration">
      <Header />
      <h2>Registration</h2>
      <Photo />
      {showEdit ? <Edit /> : <Details />}
    </div>
    </RegistrationContext.Provider>
  )
}

export default Registration