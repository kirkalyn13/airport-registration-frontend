import './App.css'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './routes/Login/Login'
import Create from './routes/Create/Create'
import Registration from './routes/Registration/Registration'

const SERVER = ''

function App() {
  const [ isAuth, setIsAuth ] = useState(true)
  const [ toCreate, setToCreate ] = useState(false)
  const [ user, setUser ] = useState({})
  
  useEffect(() => {
    const data = localStorage.getItem("airport-user")
    if(data){
      setUser(JSON.parse(data))  
      setIsAuth(true) 
    }
  },[])

  useEffect(() => {
    localStorage.setItem("airport-user", JSON.stringify(user))
  })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={isAuth ? <Registration/> : <Navigate to="/login" />}/>
          <Route path="/login"  element={<Login/>} />
          <Route path="/create" element={<Create/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
