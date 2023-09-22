
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Authentication from './Components/Authentication/Authentication'
import CollectionUploadForm from './Components/AOB Collection/CollectionUploadForm'
import ArticleUploadForm from './Components/Articles/UploadForm'
import Category1 from './Components/Products/Categories/Category1'
import Category2 from './Components/Products/Categories/Category2'
import Category3 from './Components/Products/Categories/Category3'
import Category4 from './Components/Products/Categories/Category4'
import Gallery from './Components/Gallery/Gallery'
import ImageUploader from './Components/Gallery/ImageUploader'
import Contact from './Components/ContactUs/Contact'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import { PrivacyPolicy } from './Components/Common/Footer/FooterLinks/Privacy Policy/PrivacyPolicy'
import ShippingandReturns from './Components/Common/Footer/FooterLinks/Shipping and Returns/ShippingandReturns'
import KnifeCare from './Components/Home/Knife Care/KnifeCare'
import { HomePage } from './Pages/Home/HomePage'
import { CollectionPage } from './Pages/Collection/CollectionPage'
import { SalePage } from './Pages/Sale/SalePage'
import { ArticlesPage } from './Pages/Articles/ArticlesPage'


function App() {
  

  return (
    <>
     
     <div>
     <Router>
      <Routes>
       <Route path='/' element={<HomePage/>} ></Route>
       <Route path='/AOBCollection' element={<CollectionPage/>} ></Route>
       <Route path='/SignUp' element={<Authentication/>} ></Route>
       <Route path='/upload-Products' element={<CollectionUploadForm/>}></Route>
       <Route path='/upload-articles' element={<ArticleUploadForm/>} ></Route>
       <Route path='/Articles' element={<ArticlesPage/>} ></Route>
       <Route path='/OnSale' element={<SalePage/>} ></Route>
       <Route path='/FoldingKnives' element={<Category1/>} ></Route>
       <Route path='/KeyRings' element={<Category2/>}></Route>
       <Route path='/KnifeCareProducts' element={<Category3/>}/>
       <Route path='/KitchenandChefKnives' element={<Category4/>}/>
       <Route path='/Gallery' element={<Gallery/>}/>
       <Route path='/ImageUploader' element={<ImageUploader/>}/>
       <Route path='/ContactUs' element={<Contact/>}/>
       <Route path='/Cart' element={<Cart/>}/>
       <Route path='/Checkout' element={<Checkout/>}></Route>
       <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
       <Route path='/ShippingsandReturns' element={<ShippingandReturns/>}/>
       <Route path='/KnifeCare' element={<KnifeCare/>}></Route>
     </Routes>
     </Router>
     </div>  
    </>
  )
}

export default App
