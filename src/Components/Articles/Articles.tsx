
import Footer from '../Footer/Footer'
import NavBar from '../Header/NavBar'
import ArticleDeisgn from './ArticleDeisgn'

import Section1 from './Section1'

export default function Articles() {
  return (
    <div>
        <NavBar></NavBar>
        <Section1/>
        <ArticleDeisgn></ArticleDeisgn><br/>
        <Footer/>
    </div>
  )
}
