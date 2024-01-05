import Checkout from "../../Containers/Checkout"
import useAuthenticated from "../../Custom Hooks/UseAuthenticated"
import Layout from "../../Layout/Layout"

export const CheckoutPage=()=>{
    useAuthenticated()
    return(
        <Layout>
            <Checkout/>
        </Layout>
    )
}