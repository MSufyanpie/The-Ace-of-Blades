import React from 'react'
import NavBar from '../Header/NavBar'

import CategoriesPage from './Categories/CategoriesPage'

export default function Collection() {
  return (
    <div>
        <NavBar></NavBar><br/><br/><br/>
        <CategoriesPage/>
    </div>
  )
}
