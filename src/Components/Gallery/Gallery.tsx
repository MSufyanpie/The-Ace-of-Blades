
import  { useEffect, useState } from 'react'
import { db } from '../../Config/Firebase'
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'
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
        
          <Typography marginTop={{xs:'29%',md:'10%'}} textAlign={'center'} variant='h3' gutterBottom fontWeight={'bold'} fontStyle={'Oswald'}>GALLERY</Typography>
          <Typography textAlign={'center'} variant='body1' fontStyle={'Oswald'}>PHOTOS FROM ALL OVER THE WORLD</Typography>        
        <Grid container direction={'row'} spacing={3} marginTop={'2%'} px={8} >
    {images.map((data,index)=>{
        return(
            <Grid key={index} item xs={12} sm={6} md={4} >
            <Card>
                <CardMedia
                //@ts-ignore
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
