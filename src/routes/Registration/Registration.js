import {useState, useEffect, useContext, createContext} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/user'
import { SERVER } from '../../App'
import { AuthContext } from '../../App'
import Header from '../../components/Header/Header'
import Photo from '../../components/Photo/Photo'
import Details from '../../components/Details/Details'
import Edit from '../../components/Edit/Edit'
import axios from 'axios'
import './Registration.css'

export const RegistrationContext = createContext()

const Registration = () => {
  const [showEdit, setShowEdit] = useState(false)
  const {user} = useContext(AuthContext)
  const dispatch = useDispatch()

  const fetchUserData = () => {
    axios.get(`${SERVER}/information/${user.userNumber}`).then((response)=>{
        dispatch(login(response.data[0]))
        })
  }

  useEffect(()=>{
    fetchUserData()
  },[])

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