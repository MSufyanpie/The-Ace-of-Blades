import React from 'react'
import NavBar from '../Header/NavBar'
import BillingForm from './BillingForm'
import Section1 from './Section1'
import Payment from './Payment'
import OrderSummary from './OrderSummary'

export default function Checkout() {
  return (
    <div>
        <NavBar/>
        <Section1/>
        <OrderSummary/>
        <BillingForm/>
        <Payment/>
    </div>
  )
}
