import { getDownloadURL, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { storage } from '../../Config/Firebase'
import { Card, CardMedia } from '@mui/material'

export default function Gallery() {
    const[imgUrl,setImgUrl]=useState([{}])
    const imageRef=ref(storage,'GalleryImages/pexels-sarah-chai-7262911.jpg')
    const imgHandler=async()=>{
        try{
        const downloadUrl= await getDownloadURL(imageRef)
        setImgUrl(downloadUrl)}
        catch(error){
            console.log(error)
        }
    }
    useEffect (()=>{
        imgHandler()
    },[imgUrl])
  return (
    <div>
    {imgUrl?.map((data,index)=>{
      return(
        <Card>
            <CardMedia
            image={data.downloadUrl}
            />
        </Card>
      )

    })}

    </div>
  )
}
