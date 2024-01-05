import Cart from "../../Containers/Cart"
import useAuthenticated from "../../Custom Hooks/UseAuthenticated"
import Layout from "../../Layout/Layout"

export const CartPage=()=>{
    useAuthenticated()
    return(
        <Layout>
         <Cart/>
        </Layout>
    )
}