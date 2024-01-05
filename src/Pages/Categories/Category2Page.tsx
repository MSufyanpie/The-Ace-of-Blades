
import Category2 from "../../Components/Products/Categories/Category2"
import useAuthenticated from "../../Custom Hooks/UseAuthenticated"
import Layout from "../../Layout/Layout"

export const Category2Page=()=>{
    useAuthenticated()
    return(
        <Layout>
            <Category2/>
        </Layout>
    )
}