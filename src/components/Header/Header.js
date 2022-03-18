import {useContext} from 'react'
import { AuthContext } from '../../App'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/user'
import './Header.css'
import Button from '@mui/material/Button'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

const LOGO = "./assets/airport.png"

const buttonStyles = {
    backgroundColor: '#B2EBF2', 
    color: '#000', 
    fontWeight:"bold", 
    margin:"5px"
}

const Header = () => {
    const {user, setUser, setIsAuth} =  useContext(AuthContext)
    const dispatch = useDispatch()

    const logout = () => {
      //dispatch(logout)
        setUser({
          })
        setIsAuth(false)
        localStorage.removeItem("airport-user")
    }

  return (
    <div className="header">
        <div className="container-title">
            <img className="logo" src={LOGO} width="50" height="50" alt="logo" margin="10px"/>
        </div>
        <h2> {user.username} </h2>
        <div className="container-logout">
            <Button
                    onClick={logout} 
                    variant="contained"
                    style={buttonStyles}
                    startIcon={<ExitToAppIcon />}
                    >
                    Log Out
            </Button>
        </div>
    </div>
  )
}

export default Header