import { getDownloadURL, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { db, storage } from '../../Config/Firebase'
import { Card, CardMedia, Grid } from '@mui/material'
import { collection, getDocs } from 'firebase/firestore'
import NavBar from '../Header/NavBar'

export default function Gallery() {
    const [images,setImages]=useState([{}])
    const CollectionRef=collection(db,"GalleryImages")
    useEffect(()=>{
        const getImagesList= async()=>{
          try {
            let data=await getDocs(CollectionRef)
            const actualData=data.docs.map((doc)=>({
            ...doc.data(),
            id:doc.id,
      
            }))
            
            setImages(actualData)
            
          } catch (error) {
            console.error(error)
          }
            
          }
        getImagesList()
       
        
      },[])
  return (
    <div>
        <NavBar/>
        <Grid container direction={'row'} spacing={3} marginTop={'10%'} px={8} >
    {images.map((data,index)=>{
        return(
            <Grid item xs={12} sm={6} md={4} >
            <Card>
                <CardMedia
                image={data.imageUrl}
                sx={{height:'350px'}}
                />
            </Card>
            </Grid>
        )
    })}
</Grid>
    </div>
  )
}