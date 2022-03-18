import {useState, createContext} from 'react'
import './Registration.css'
import Header from '../../components/Header/Header'
import Photo from '../../components/Photo/Photo'
import Details from '../../components/Details/Details'
import Edit from '../../components/Edit/Edit'

export const RegistrationContext = createContext()

const Registration = () => {
  const [showEdit, setShowEdit] = useState(false)

  return (
    <RegistrationContext.Provider value={{showEdit, setShowEdit}}>
    <div className="container-registration">
      <Header />
      <h1>Registration</h1>
      <Photo />
      {showEdit ? <Edit /> : <Details />}
    </div>
    </RegistrationContext.Provider>
  )
}

export default Registration