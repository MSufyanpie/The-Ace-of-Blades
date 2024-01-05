import Category1 from "../../Components/Products/Categories/Category1"
import useAuthenticated from "../../Custom Hooks/UseAuthenticated"
import Layout from "../../Layout/Layout"

export const Category1Page=()=>{
    useAuthenticated()
    return(
        <Layout>
            <Category1/>
        </Layout>
    )
}