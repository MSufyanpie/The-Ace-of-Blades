import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { storage,db } from '../../Config/Firebase'
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import NavBar from '../Header/NavBar'
export default function ArticleUploadForm() {
    const[ArticleTitle,setArticleTitle]:any=useState("")
    const[ArticleDescription,setArticleDescription]:any=useState("")
    const CollectionRef=collection(db,"Articles")
    const [imgUrl,setImgUrl]=useState('')
        
       
        
   
     const[ArticleImage,setArticleImage]=useState(null)
     const HandleUpload=async()=>{
        if(ArticleImage==null) return;
       const imageref= ref(storage,`articleImages/${ArticleImage.name}`)
       
       try{
        
        const uploadImg=uploadBytes(imageref,ArticleImage)
        await uploadImg
        
       
       const DownloadUrl= await getDownloadURL(imageref)
       setImgUrl(DownloadUrl)
       
        await addDoc(CollectionRef,{
            title:ArticleTitle,
            description:ArticleDescription,
            imageUrl:DownloadUrl
           })
        alert("Article Added")

        } catch(error){
            console.log(error)
        }
    }

  return (
    <div>
        <NavBar/>
        <Box width={500} m={'auto'} marginTop={'10%'} >
        <Card>
        <Box sx={{backgroundColor:'blueviolet'}}>
                    <Typography color={'white'} textAlign={'center'} gutterBottom variant='h4'>
                        UPLOAD ARTICLES
                    </Typography>
                </Box>
            <Stack direction={'column'} spacing={4} px={5}>
              
            <TextField
            multiline
            onChange={(event)=>{
                setArticleTitle(event.target.value)}}
            label='Enter Article Title'/>
            <TextField
             onChange={(event)=>{
                setArticleDescription(event.target.value)}}
            label='Enter Article Description'/>
            <label htmlFor="">Upload Article Image</label>
            <input
             onChange={(event)=>{
                setArticleImage(event.target.files[0])
             }}
            type="file" accept='image/*' />
            <Typography textAlign={'center'} >
            <Button color='secondary' variant='contained' onClick={HandleUpload}>Upload to FireBase</Button></Typography>
            
            
</Stack><br />

</Card>
</Box>
    </div>
  )
}
