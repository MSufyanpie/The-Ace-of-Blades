
import NavBar from '../Components/Common/Header/NavBar'
import Footer from '../Components/Common/Footer/Footer'

export default function Layout({children}:any) {
  return (
    <div>
     <NavBar/>

    <div>{children}</div>
    <Footer/>
    </div>
  )
}
