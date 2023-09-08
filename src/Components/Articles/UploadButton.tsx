
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../Config/Firebase'
import {  Button,  } from '@mui/material'
import { onAuthStateChanged } from 'firebase/auth'
import { Link } from 'react-router-dom'
export default function UploadButton() {
    const [isLoggedIn,SetLoggedIn]=useState(false)
 onAuthStateChanged(auth,async(user)=>{
  if(user){
SetLoggedIn(true)
  }
 })
  return (
    <div style={{marginTop:'10%',textAlign:'center'}} >
     {isLoggedIn?(<>
     <Link to={'/upload-articles'} style={{textDecoration:'none'}}> 
     <Button variant='contained'>Upload Articles</Button></Link><br/>  
        </>):(<></>)}
    </div>
  )
}
