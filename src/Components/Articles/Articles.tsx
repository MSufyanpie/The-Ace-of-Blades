
import Footer from '../Footer/Footer'
import NavBar from '../Header/NavBar'
import ArticlePage from './ArticlesPage'
import Section1 from './Section1'

export default function Articles() {
  return (
    <div>
        <NavBar></NavBar>
        <Section1/>
        <ArticlePage/><br/>
        <Footer/>
    </div>
  )
}
