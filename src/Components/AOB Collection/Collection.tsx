
import NavBar from '../Header/NavBar'

import CategoriesPage from './Categories/CategoriesPage'
import Section1 from './Categories/CategoriesPageSection1'

export default function Collection() {
  return (
    <div>
        <NavBar></NavBar>
        <Section1/>
        <CategoriesPage/>
    </div>
  )
}
