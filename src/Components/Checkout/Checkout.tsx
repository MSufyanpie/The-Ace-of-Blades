import React from 'react'
import NavBar from '../Header/NavBar'
import BillingForm from './BillingForm'
import Section1 from './Section1'
import Payment from './Payment'
import OrderSummary from './OrderSummary'
import { useSelector } from 'react-redux'
import EmptyCart from './EmptyCart'
import Footer from '../Footer/Footer'

export default function Checkout() {
    const cartProducts=useSelector((state:any)=>{
        return state.cart
    })
  return (
    <div>
        <NavBar/>
        <Section1/>
        {cartProducts.length!==0?(<>
        <OrderSummary/>
        <BillingForm/>
        <Payment/></>):(<>
        <EmptyCart/><br/><br/>
        </>)}
        <Footer/>
    </div>
  )
}
