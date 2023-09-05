
import './App.css'
import TopBar from './Components/Header/TopBar'
import NavBar from './Components/Header/NavBar'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './Components/Home/Home'

function App() {
  

  return (
    <>
     {/* <TopBar></TopBar>  */}
     <div className='img'>
     <Router>
     <NavBar></NavBar>
     <Home></Home>
     </Router>
     </div>  
    </>
  )
}

export default App
