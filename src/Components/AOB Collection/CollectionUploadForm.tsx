
import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { storage,db } from '../../Config/Firebase'
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
export default function CollectionUploadForm() {
    const[productTitle,setProductTitle]:any=useState("")
    const[productPrice,setProductPrice]:any=useState("")
    const CollectionRef=collection(db,"AOB Collection")
    const [imgUrl,setImgUrl]=useState('')
        
       
        
   
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
            imageUrl:DownloadUrl
           })
        alert("Product Added")

        } catch(error){
            console.log(error)
        }
    }

  return (
    <div>
        <form>
            <Stack direction={'column'} spacing={1}>
            <TextField
            onChange={(event)=>{
                setProductTitle(event.target.value)}}
            label='Enter Product Title'/>
            <TextField
             onChange={(event)=>{
                setProductPrice(event.target.value)}}
            label='Enter Product Price'/>
            <label htmlFor="">Upload Product Image</label>
            <input
             onChange={(event)=>{
                setProductImage(event.target.files[0])
             }}
            type="file" accept='image/*' />
            <Button onClick={HandleUpload}>Upload to FireBase</Button>
            
</Stack>

</form>
    </div>
  )
}
