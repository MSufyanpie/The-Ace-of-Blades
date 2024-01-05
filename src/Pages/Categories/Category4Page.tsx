
import Category4 from "../../Components/Products/Categories/Category4"
import useAuthenticated from "../../Custom Hooks/UseAuthenticated"
import Layout from "../../Layout/Layout"

export const Category4Page=()=>{
    useAuthenticated()
    return(
        <Layout>
            <Category4/>
        </Layout>
    )
}