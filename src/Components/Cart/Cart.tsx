
import CartProducts from './CartProducts'
import Footer from '../Footer/Footer'
import NavBar from '../Header/NavBar'
import Section1 from './Section1'

export default function Cart() {
  return (
    <div>
      <NavBar/>
      <Section1/>
        <CartProducts/><br/><br/>
        <Footer/>
    </div>
  )
}
