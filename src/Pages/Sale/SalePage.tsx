
import OnSale from '../../Components/Products/OnSale Products/OnSale'
import useAuthenticated from '../../Custom Hooks/UseAuthenticated'
import Layout from '../../Layout/Layout'

export const SalePage = () => {
  useAuthenticated()
  return (
    <Layout>
     <OnSale/>
    </Layout>
  )
}
