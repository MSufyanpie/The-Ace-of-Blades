
import './App.css'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'

import Collection from './Components/AOB Collection/Collection'
import SignUp from './Components/Signup/SignUp'
import Authentication from './Components/Signup/Authentication'
import CollectionUploadForm from './Components/AOB Collection/CollectionUploadForm'
import ArticleUploadForm from './Components/Articles/UploadForm'
import Articles from './Components/Articles/Articles'


function App() {
  

  return (
    <>
     
     <div>
     <Router>
      <Routes>
       <Route path='/' element={<Home/>} ></Route>
       <Route path='/AOBCollection' element={<Collection/>} ></Route>
       <Route path='/SignUp' element={<Authentication/>} ></Route>
       <Route path='/upload-Products' element={<CollectionUploadForm/>}></Route>
       <Route path='/upload-articles' element={<ArticleUploadForm/>} ></Route>
       <Route path='/Articles' element={<Articles/>} ></Route>
     </Routes>
     </Router>
     </div>  
    </>
  )
}

export default App
