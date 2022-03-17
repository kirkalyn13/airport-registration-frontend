import{useContext} from 'react'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { RegistrationContext } from '../../routes/Registration/Registration'

const buttonStyles = {
    backgroundColor: '#00BCD4', 
    color: '#000', 
    fontWeight:"bold",
    margin: "20px 0"
}

const EditButton = () => {
  const {showEdit, setShowEdit} = useContext(RegistrationContext)

  const toggleEdit = () => setShowEdit(!showEdit)


  return (
    <div>
        <Button
        onClick={toggleEdit}
        variant="contained"
        style={buttonStyles}
        startIcon={showEdit ? <ExitToAppIcon /> : <EditIcon />}
        >
        {showEdit ? "EXIT" : "EDIT"}
        </Button>
    </div>
  )
}

export default EditButton