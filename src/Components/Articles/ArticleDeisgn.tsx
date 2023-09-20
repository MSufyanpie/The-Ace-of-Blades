import { collection,getDocs } from 'firebase/firestore'
import  { useEffect, useState } from 'react'
import { Box, Card, CardContent, CardMedia, Grid,  Typography } from '@mui/material'

import { db } from '../../Config/Firebase'

export default function ArticleDeisgn() {
    const[articlesList,setArticlesList]=useState([{}])
    const ArticlesRef=collection(db,"Articles")
        
  useEffect(()=>{
    const getArticlesList= async()=>{
      try {
        let data=await getDocs(ArticlesRef)
        const actualData=data.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id,
  
        }))
        console.log(actualData)
        setArticlesList(actualData)
        
      } catch (error) {
        console.error(error)
      }
        
      }
    getArticlesList()
    
    
  },[])
  return (
    <Box px={10} marginTop={'8%'}>
    <Grid container direction={'row'} spacing={2}>
{articlesList.map((data,index)=>{
    return( 
      <Grid item xs={12} sm={6} md={4} >
        <Card>
        <CardMedia 
        image={data.imageUrl}
        sx={{height:'300px'}}
        />
        <CardContent>
            <Typography fontFamily={"Oswald"} variant='h6' gutterBottom fontWeight={'bold'}>
                {data.title}
            </Typography>
            <Typography fontFamily={"Oswald"} gutterBottom variant='body1'>
                {data.description}
            </Typography>
        </CardContent>
    </Card>
    </Grid>
  )
})}
</Grid>

</Box >
  )
}
