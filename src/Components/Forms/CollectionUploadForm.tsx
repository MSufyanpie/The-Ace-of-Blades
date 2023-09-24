
import { Box, Button, Card,  FormControl,  InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import  { ChangeEvent, useState } from 'react'
import { storage,db } from '../../Firebase/Firebase'
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import NavBar from '../Common/Header/NavBar'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Footer from '../Common/Footer/Footer'

const schema=yup.object().shape({
title:yup.string().required(),
price:yup.number().positive().integer().required('invalid price'),
salePrice:yup.number().integer().min(0).max(50000),
category:yup.string().required(),
image:yup.mixed().required()
}).required()

export default function CollectionUploadForm() {
 const {register,formState,handleSubmit}= useForm({
 resolver:yupResolver(schema)
  })
  const {errors}=formState;
    const[productTitle,setProductTitle]:any=useState("")
    const[productPrice,setProductPrice]:any=useState("")
    const[salePrice,setSalePrice]=useState('')
    const CollectionRef=collection(db,"AOB Collection")
    //@ts-ignore
    const [imgUrl,setImgUrl]=useState('')
    const[category,setCategory]=useState('')
    const onSubmit=(data:any)=>{
      console.log(data)
    }
    const handleCategory=(event:SelectChangeEvent)=>{
       setCategory(event.target.value)
    }
       
        
   
     const[productImage,setProductImage]=useState(null)
     //@ts-ignore
     const HandleUpload=async(payload:any)=>{
        if(productImage==null) return;
        //@ts-ignore
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
      <Box  width={{xs:'100%',md:410}} m={{xs:'none',md:'auto'}} marginTop={{xs:'28%',md:'8%'}} boxShadow={10}>
          <Card  >
              <Box sx={{backgroundColor:'black'}} ><br/>
              <Typography color={'white'} gutterBottom textAlign={'center'} variant='h3' fontFamily={'Oswald'} fontWeight={'bold'}>
                UPLOAD PRODUCTS
              </Typography><br/>
             
              </Box><br/>
             
             <form 
              //@ts-ignore
             onSubmit={handleSubmit((data)=>{
              onSubmit(data)
  })}>
            <Stack direction={'column'} spacing={3} px={{xs:8,md:10}}>
            <TextField
            id='title'
            {...register('title')}
            multiline
            onChange={(event)=>{
                setProductTitle(event.target.value)}}
            label='Enter Product Title'/>
            <p style={{color:'red'}}>{errors.title?.message}</p>
            <TextField
            id='price'
            {...register('price')}
             onChange={(event)=>{
                setProductPrice(event.target.value)}}
            label='Enter Product Price'/>
           <p style={{color:'red'}}>{errors.price?.message}</p>
             <TextField
             id='salePrice'
             {...register('salePrice')}
             defaultValue={'0'}
             onChange={(event)=>{
                setSalePrice(event.target.value)}}
            label='Enter  Sale Price'/>
            <p style={{color:'red'}}>{errors.salePrice?.message}</p>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Category</InputLabel>
      <Select
       {...register('category')}
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
      <p style={{color:'red'}}>{errors.category?.message}</p>
    </FormControl>
          
            <label  htmlFor=""><input
            id='image'
             {...register('image')}
             onChange={(event:ChangeEvent)=>{
              //@ts-ignore
                setProductImage(event.target.files[0])}}
            type="file" accept='image/*' />
            </label>
            <p style={{color:'red'}}>{errors.image?.message}</p>
            <Button sx={{backgroundColor:'black',":hover":{backgroundColor:'grey'}}} type='submit' variant='contained' color='info' onClick={HandleUpload}>Upload to FireBase</Button><br/>
            
</Stack>
</form>
</Card>
</Box><br/>
<Footer/>
    </div>
  )
}
