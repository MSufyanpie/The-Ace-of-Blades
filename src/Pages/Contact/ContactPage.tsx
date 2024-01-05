import Contact from "../../Containers/Contact"
import useAuthenticated from "../../Custom Hooks/UseAuthenticated"
import Layout from "../../Layout/Layout"

export const ContactPage=()=>{
    useAuthenticated()
    return(
        <Layout>
            <Contact/>
        </Layout>
    )
}