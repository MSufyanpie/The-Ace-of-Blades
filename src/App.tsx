
import './App.css'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'

import Collection from './Components/AOB Collection/Collection'
import SignUp from './Components/Signup/SignUp'
import Authentication from './Components/Signup/Authentication'
import CollectionUploadForm from './Components/AOB Collection/CollectionUploadForm'
import ArticleUploadForm from './Components/Articles/UploadForm'
import Articles from './Components/Articles/Articles'
import Category1 from './Components/AOB Collection/Categories/Category1'
import Category2 from './Components/AOB Collection/Categories/Category2'
import Category3 from './Components/AOB Collection/Categories/Category3'
import Category4 from './Components/AOB Collection/Categories/Category4'
import OnSale from './Components/OnSale Products/OnSale'
import Gallery from './Components/Gallery/Gallery'
import ImageUploader from './Components/Gallery/ImageUploader'
import Contact from './Components/ContactUs/Contact'


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
       <Route path='/OnSale' element={<OnSale/>} ></Route>
       <Route path='/FoldingKnives' element={<Category1/>} ></Route>
       <Route path='/KeyRings' element={<Category2/>}></Route>
       <Route path='/KnifeCareProducts' element={<Category3/>}/>
       <Route path='/KitchenandChefKnives' element={<Category4/>}/>
       <Route path='/Gallery' element={<Gallery/>}/>
       <Route path='/ImageUploader' element={<ImageUploader/>}/>
       <Route path='/ContactUs' element={<Contact/>}/>
     </Routes>
     </Router>
     </div>  
    </>
  )
}

export default App
