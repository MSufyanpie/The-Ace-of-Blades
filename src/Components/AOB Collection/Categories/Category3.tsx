import { collection, getDocs } from 'firebase/firestore'
import  { useEffect, useState } from 'react'
import {  db } from '../../../Config/Firebase'
import { Button, Card, CardContent, CardMedia, Grid,  Typography } from '@mui/material'
import NavBar from '../../Header/NavBar'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../RTK Store/Slices/ProductsSlice'


export default function Category3() {
    const[products,setProducts]=useState([{}])
    const ProductsRef=collection(db,"AOB Collection")
    const dispatch=useDispatch()
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
      const filtered:any=products.filter(data=>data.category===3)
      const handleAddToCart=(products:any)=>{
        console.log("adding to cart",products)
          dispatch(addToCart(products))

          
      }
  return (
    <div>
        <NavBar/>
        <Grid
        container
        direction={'row'} spacing={2} marginTop={'10%'} px={10}>
        {filtered.map((data:any,index:number)=>{
            return(
                <Grid key={index} item xs={12} sm={6} md={4}>
                <Card variant='outlined' >
                    <CardMedia 
                    image={data.imageUrl}
                    sx={{height:'300px'}}
                    />
                    <CardContent sx={{backgroundColor:'#f2f7f3'}}>
                        <Typography gutterBottom fontFamily={'Oswald'} textAlign={'center'} variant='h6' fontWeight={'bold'}>{data.title}</Typography>
                        {data.salePrice && data.salePrice!=='0'?
                        (<><Typography gutterBottom fontFamily={'Oswald'} textAlign={'center'}  variant='h6' color={'grey'} fontWeight={'bold'}><s>R{data.price}</s>   R{data.salePrice}  </Typography>
                       
                        </>)
                        :(<> <Typography gutterBottom fontFamily={'Oswald'} textAlign={'center'}  variant='h6' color={'grey'} fontWeight={'bold'}>R{data.price}</Typography></>)}
                       
                        <Typography  textAlign={'center'}>
                <Button onClick={()=>handleAddToCart(data)}
                variant='outlined' sx={{border:'1px solid grey',color:'white',backgroundColor:'black'}}>Add to Cart</Button></Typography>
                    </CardContent>
                </Card>
                </Grid>
            )
        })}
        </Grid>
    </div>
  )
}