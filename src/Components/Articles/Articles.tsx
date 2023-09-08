import React from 'react'
import NavBar from '../Header/NavBar'
import ArticleDeisgn from './ArticleDeisgn'
import UploadButton from './UploadButton'

export default function Articles() {
  return (
    <div>
        <NavBar></NavBar><br/>
        <UploadButton/>
        <ArticleDeisgn></ArticleDeisgn>
    </div>
  )
}
