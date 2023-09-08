import React from 'react'
import NavBar from '../Header/NavBar'
import AllProducts from './AllProducts'
import CategoriesPage from './Categories/CategoriesPage'

export default function Collection() {
  return (
    <div>
        <NavBar></NavBar><br/><br/><br/>
        <CategoriesPage/>
    </div>
  )
}
