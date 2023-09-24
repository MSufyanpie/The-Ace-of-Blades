import { collection,getDocs } from 'firebase/firestore'
import  { useEffect, useState } from 'react'
import { Box,Grid, } from '@mui/material'

import { db } from '../../../Firebase/Firebase'
import ArticleDesign from '../../Shared/ArticleDeisgn'

export default function RelatedPosts() {
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
  const slicedList:any=articlesList.slice(0,2)
  return (
    <Box  marginTop={'4%'}>
    <Grid container direction={'row'} spacing={2}>
{slicedList.map((data:any,index:number)=>{
    return( 
    
    //@ts-ignore
    <ArticleDesign
    imageUrl={data.imageUrl}
    title={data.title}
    description={data.description}
    id={index}
    >
    
             
    </ArticleDesign>
  )
})}
</Grid>

</Box >
  )
}

