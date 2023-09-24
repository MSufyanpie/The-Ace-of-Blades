
import BillingForm from '../Components/Checkout/BillingForm'
import Section1 from '../Components/Checkout/Section1'
import Payment from '../Components/Checkout/Payment'
import OrderSummary from '../Components/Checkout/OrderSummary'
import { useSelector } from 'react-redux'
import EmptyCart from '../Components/Checkout/EmptyCart'


export default function Checkout() {
    const cartProducts=useSelector((state:any)=>{
        return state.cart
    })
  return (
    <div>
        
        <Section1/>
        {cartProducts.length!==0?(<>
        <OrderSummary/>
        <BillingForm/>
        <Payment/></>):(<>
        <EmptyCart/><br/><br/>
        </>)}
       
    </div>
  )
}
