
import Layout from '../../Layout/Layout'
import Collection from '../../Containers/Collection'
import useAuthenticated from '../../Custom Hooks/UseAuthenticated'

export const CollectionPage = () => {
  useAuthenticated()
  return (
    <Layout>
    <Collection/>
    </Layout>
  )
}
