
import { Knifecare } from "../../Containers/KnifeCare"
import useAuthenticated from "../../Custom Hooks/UseAuthenticated"
import Layout from "../../Layout/Layout"

export const KnifeCarePage=()=>{
  useAuthenticated()
    return(
        <Layout>
          <Knifecare/>
        </Layout>
    )
}