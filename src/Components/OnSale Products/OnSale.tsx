import { collection, getDocs } from 'firebase/firestore'
import  { useEffect, useState } from 'react'
import {  db } from '../../Config/Firebase'
import { Button, Card, CardContent, CardMedia, Grid,  Typography } from '@mui/material'
import NavBar from '../Header/NavBar'
import Section1 from './Section1'
import Footer from '../Footer/Footer'
import { useDispatch } from 'react-redux'
import { addToCart } from '../RTK Store/Slices/ProductsSlice'


export default function OnSale() {

    const[products,setProducts]=useState([{}])
    const dispatch=useDispatch()
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
      //@ts-ignore
      const filtered=products.filter(data=>data.salePrice!==0)
      const handleAddtoCart=(products:any)=>{
      dispatch(addToCart(products))
      }
      
  return (
    <div>
        <NavBar/>
        <Section1/>
        <Grid 
        key={1}
        container
        direction={'row'} spacing={2} marginTop={'2%'} px={8}>
        {filtered.map((data:any,index:number)=>{
            return(
                <>
                {data.salePrice?(<>
                    <Grid key={index} item xs={12} sm={6} md={4} >
                <Card variant='outlined' >
                    <CardMedia 
                    image={data.imageUrl}
                    sx={{height:'300px'}}
                    />
                    <CardContent sx={{backgroundColor:'#f2f7f3'}}>
                        <Typography  fontFamily={'Oswald'} textAlign={'center'} variant='h6' fontWeight={'bold'} gutterBottom>{data.title}</Typography>
                        <Typography gutterBottom fontFamily={'Oswald'} textAlign={'center'}  variant='h6' color={'grey'} fontWeight={'bold'}><s>R{data.price}</s>   R{data.salePrice}</Typography>
                        <Typography  textAlign={'center'}>
                <Button
                onClick={()=>handleAddtoCart(data)}
                variant='outlined' sx={{border:'1px solid grey',color:'white',backgroundColor:'black',borderRadius:'20px',":hover":{
                  backgroundColor:'#2e2e30'
                }}}>Add to Cart</Button></Typography>
                    </CardContent>
                </Card>
                </Grid>
                </>):(<></>)}
                
                </>
            )
        })}
        </Grid><br/>
        <Footer/>
    </div>
  )
}

