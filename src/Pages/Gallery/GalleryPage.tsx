import { Gallery } from "../../Containers/Gallery"
import useAuthenticated from "../../Custom Hooks/UseAuthenticated"
import Layout from "../../Layout/Layout"


export const GalleryPage = () => {
  useAuthenticated()
  return (
    <Layout>
      <Gallery/>
    </Layout>
  )
}
