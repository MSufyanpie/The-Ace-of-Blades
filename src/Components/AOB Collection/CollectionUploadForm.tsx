
import { Box, Button, Card, CardHeader, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { storage,db } from '../../Config/Firebase'
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import NavBar from '../Header/NavBar'

export default function CollectionUploadForm() {
    const[productTitle,setProductTitle]:any=useState("")
    const[productPrice,setProductPrice]:any=useState("")
    const[salePrice,setSalePrice]=useState('')
    const CollectionRef=collection(db,"AOB Collection")
    const [imgUrl,setImgUrl]=useState('')
    const[category,setCategory]=useState('')
    
    const handleCategory=(event:SelectChangeEvent)=>{
       setCategory(event.target.value)
    }
       
        
   
     const[productImage,setProductImage]=useState(null)
     const HandleUpload=async()=>{
        if(productImage==null) return;
       const imageref= ref(storage,`collectionImages/${productImage.name}`)
       
       try{
        
        const uploadImg=uploadBytes(imageref,productImage)
        await uploadImg
        
       
       const DownloadUrl= await getDownloadURL(imageref)
       setImgUrl(DownloadUrl)
       
        await addDoc(CollectionRef,{
            title:productTitle,
            price:productPrice,
            salePrice:salePrice,
            imageUrl:DownloadUrl,
            category:category
           })
        alert("Product Added")

        } catch(error){
            console.log(error)
        }
    }

  return (
    <div >
      <NavBar/>
      <Box  width={{xs:'100%',md:420}} m={'auto'} marginTop={'10%'} boxShadow={10}>
      <Grid
       container 
       
      >
        <Grid item  >
          <Card sx={{border:'5px solid white'}}  >
              <Box sx={{backgroundColor:'#7ca2cc'}} ><br/>
              <Typography color={'white'} gutterBottom textAlign={'center'} variant='h3' fontFamily={'Oswald'} fontWeight={'bold'}>
                UPLOAD PRODUCTS
              </Typography><br/>
             
              </Box><br/>
            
        
            <Stack direction={'column'} spacing={3} px={10}>
            <TextField
            multiline
            onChange={(event)=>{
                setProductTitle(event.target.value)}}
            label='Enter Product Title'/>
            <TextField
             onChange={(event)=>{
                setProductPrice(event.target.value)}}
            label='Enter Product Price'/>
             <TextField
             defaultValue={'0'}
             onChange={(event)=>{
                setSalePrice(event.target.value)}}
            label='Enter  Sale Price'/>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Category</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={category}
        label="Category"
        onChange={handleCategory}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Folding Knives</MenuItem>
        <MenuItem value={2}> Key Rings</MenuItem>
        <MenuItem value={3}> Knife Care Products</MenuItem>
        <MenuItem value={4}>Kitchen and Chef Knives</MenuItem>
      </Select>
    </FormControl>
          
            <label htmlFor="">Upload Product Image</label>
            <input
             onChange={(event:ChangeEvent)=>{
                setProductImage(event.target.files[0])
             }}
            type="file" accept='image/*' />
            <Button variant='contained' color='info' onClick={HandleUpload}>Upload to FireBase</Button>
            
</Stack>


</Card>
</Grid>
</Grid>
</Box>
    </div>
  )
}
