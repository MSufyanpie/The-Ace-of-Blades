import { Button, Stack, Typography } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import React, { ChangeEvent, useState } from 'react'
import { db, storage } from '../../Config/Firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export default function ImageUploader() {
    const [images,setImages]=useState(null)
    const CollectionRef=collection(db,"GalleryImages")
    const HandleUpload=async()=>{
      //@ts-ignore
      const imageRef=ref(storage,`GalleryImages/${images.name}`)

      try {
        //@ts-ignore
        const uploadImg=uploadBytes(imageRef,images)
        await uploadImg
       
       const DownloadUrl= await getDownloadURL(imageRef)
       await addDoc(CollectionRef,{
        imageUrl:DownloadUrl,
       })
       alert("Image Uploaded")
      } catch (error) {
        alert(error)
      }
    }
  return (
    <div>
        <Stack direction={'column'}>
        <Typography textAlign={'center'}>
            Upload Images
            
        </Typography>
        <input 
        onChange={(event)=>{
          //@ts-ignore
         setImages(event.target.files[0])
        }}
        type="file" multiple accept='image/*'/>
        <Button onClick={HandleUpload}>
            Upload 
        </Button>
        </Stack>
    </div>
  )
}
