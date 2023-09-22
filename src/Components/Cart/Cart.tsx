
import CartProducts from './CartProducts'
import Footer from '../Common/Footer/Footer'
import NavBar from '../Common/Header/NavBar'
import Section1 from './Section1'

export default function Cart() {
  return (
    <div>
      <NavBar/>
      <Section1/>
        <CartProducts/><br/>
        <Footer/>
    </div>
  )
}
