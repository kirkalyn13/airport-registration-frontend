import './App.css'
import {useState, useEffect, createContext} from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './routes/Login/Login'
import Create from './routes/Create/Create'
import Registration from './routes/Registration/Registration'

export const SERVER = 'http://localhost:3005'
export const AuthContext = createContext()

function App() {
  const [ isAuth, setIsAuth ] = useState(false)
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

  useEffect(()=>{
    console.log(isAuth)
  },[isAuth])

  return (
    <AuthContext.Provider value={{user, setUser, setIsAuth}}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={isAuth ? <Registration/> : <Navigate to="/login" />}/>
            <Route path="/login"  element={!isAuth ? <Login/> : <Navigate to="/" />} />
            <Route path="/create" element={!isAuth ? <Create/> : <Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
