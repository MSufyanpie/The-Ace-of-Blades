
import Layout from '../../Layout/Layout'
import Home from '../../Containers/Home'
import useAuthenticated from '../../Custom Hooks/UseAuthenticated'

export const HomePage = () => {
  useAuthenticated()
  return (
    <Layout>
    <Home/>
    </Layout>
  )
}
