

import Section1 from '../../Components/Common/Footer/FooterLinks/Shipping and Returns/Section1'
import Design from '../../Components/Common/Footer/FooterLinks/Shipping and Returns/Design'
import Layout from '../../Layout/Layout'
import useAuthenticated from '../../Custom Hooks/UseAuthenticated'


export default function ShippingandReturns() {
  useAuthenticated()
  return (
    <div>
        <Layout>
        <Section1/>
        <Design/>
        </Layout>
        
    </div>
  )
}
