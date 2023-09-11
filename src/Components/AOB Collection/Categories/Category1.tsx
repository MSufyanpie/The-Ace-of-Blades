
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {  db } from '../../../Config/Firebase'
import {  Badge, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import NavBar from '../../Header/NavBar'
import { DiscountRounded } from '@mui/icons-material'



export default function Category1() {
    const[products,setProducts]=useState([{}])
    const ProductsRef=collection(db,"AOB Collection")
    
    useEffect(()=>{
        const getProductsList= async()=>{
          try {
            let data=await getDocs(ProductsRef)
            const actualData=data.docs.map((doc)=>({
            ...doc.data(),
            id:doc.id,
      
            }))
            console.log(actualData)
            setProducts(actualData)
            
          } catch (error) {
            console.error(error)
          }
            
          }
        getProductsList()
       
        
      },[])
      const filtered=products.filter(data=>data.category===1)
      
  return (
    <div>
        <NavBar/>
        <Grid 
        container
        direction={'row'} spacing={2} marginTop={'10%'} px={8}>
        {filtered.map((data,index)=>{
            return(
                <Grid item xs={12} sm={6} md={4} >
                <Card variant='outlined' >
                
                    <CardMedia 
                    image={data.imageUrl}
                    sx={{height:'300px'}}
                    />
                    <CardContent sx={{backgroundColor:'#f2f7f3'}}>
                        <Typography  fontFamily={'Oswald'} textAlign={'center'} variant='h6' fontWeight={'bold'} gutterBottom>{data.title}</Typography>
                        {data.salePrice && data.salePrice!=='0'?
                        (<><Typography gutterBottom fontFamily={'Oswald'} textAlign={'center'}  variant='h6' color={'grey'} fontWeight={'bold'}><s>{data.price}</s>   {data.salePrice}  </Typography>
                       
                        </>)
                        :(<> <Typography gutterBottom fontFamily={'Oswald'} textAlign={'center'}  variant='h6' color={'grey'} fontWeight={'bold'}>{data.price}</Typography></>)}
                       
                        <Typography  textAlign={'center'}>
                <Button variant='outlined' sx={{border:'1px solid grey',color:'white',backgroundColor:'black'}}>Add to Cart</Button></Typography>
                    </CardContent>
                </Card>
                </Grid>
            )
        })}
        </Grid>
    </div>
  )
}
