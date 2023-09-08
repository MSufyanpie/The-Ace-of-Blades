import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../Config/Firebase'
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { onAuthStateChanged } from 'firebase/auth'
import { Link } from 'react-router-dom'

export default function AllProducts() {
    const[productList,setProductList]=useState([{}])
    const ProductsRef=collection(db,"AOB Collection")
    const [isLoggedIn,SetLoggedIn]=useState(false)
 onAuthStateChanged(auth,async(user)=>{
  if(user){
SetLoggedIn(true)
  }
 })
     useEffect(()=>{},[isLoggedIn])
  useEffect(()=>{
    const getProductsList= async()=>{
      try {
        let data=await getDocs(ProductsRef)
        const actualData=data.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id,
  
        }))
        console.log(actualData)
        setProductList(actualData)
        
      } catch (error) {
        console.error(error)
      }
        
      }
    getProductsList()
    
    
  },[productList])
  return (
    <Box px={10} marginTop={'10%'}>
        {isLoggedIn?(<>
     <Link to={'/upload-Products'} style={{textDecoration:'none'}}> 
     <Button variant='contained'>Upload Products</Button></Link><br/>  
        </>):(<></>)}
        
        <Stack direction={'row'} spacing={2} marginTop={'1%'}>
    {productList.map((data,index)=>{
        return(<Card>
            <CardMedia 
            image={data.imageUrl}
            sx={{height:'300px'}}
            />
            <CardContent>
                <Typography gutterBottom>
                    {data.title}
                </Typography>
                <Typography gutterBottom>
                    {data.price}
                </Typography>
            </CardContent>
        </Card>
      )
    })}
    </Stack>

    </Box >
  )
}
