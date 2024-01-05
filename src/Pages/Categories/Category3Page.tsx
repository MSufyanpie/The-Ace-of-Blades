
import Category3 from "../../Components/Products/Categories/Category3"
import useAuthenticated from "../../Custom Hooks/UseAuthenticated"
import Layout from "../../Layout/Layout"

export const Category3Page=()=>{
    useAuthenticated()
    return(
        <Layout>
            <Category3/>
        </Layout>
    )
}