

import { Articles } from "../../Containers/Articles"
import useAuthenticated from "../../Custom Hooks/UseAuthenticated"
import Layout from "../../Layout/Layout"


export const ArticlesPage = () => {
  useAuthenticated()
  return (
    <Layout>
      <Articles/>
    </Layout>
  )
}
