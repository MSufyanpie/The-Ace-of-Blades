import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Card, IconButton, Stack, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import NavBar from '../Header/NavBar'
import { Image } from 'react-bootstrap'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { DeleteOutlineRounded, RemoveCircleOutlineSharp, ShoppingCart } from '@mui/icons-material'
import { FaCross } from 'react-icons/fa'
import { removeAllfromCart, removeFromCart } from '../RTK Store/Slices/ProductsSlice'
import { Link, useNavigate } from 'react-router-dom'
import CartTotal from './CartTotal'
import Footer from '../Footer/Footer'


export default function CartProducts() {
    const dispatch=useDispatch()
    const[ProductsCart,setProductsCart]=useState()
    const cartProducts=useSelector((state:any)=>{
        return state.cart
    })
   
    const handleDelete=(index:any)=>{
            dispatch(removeFromCart(index))
    }
    const handleDeleteAll=()=>{
        dispatch(removeAllfromCart())
    }
    const theme=useTheme()
const isMobile=useMediaQuery(theme.breakpoints.down('md'))
    
  return (
    
    <div>
        
        <NavBar/>
        {cartProducts.length!==0?(<>
            <Box 
               px={2}
                width={isMobile?'100%':'79%'} m={'auto'}  marginTop={isMobile?'32%':'10%'}>
        <Card sx={{boxShadow:5}}  >
        <TableContainer >
        <Table >
            <TableHead sx={{backgroundColor:'#f2f5f7'}}>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell  sx={{fontWeight:'bold'}}>Product</TableCell>
                    <TableCell align='center' sx={{fontWeight:'bold'}}>Price</TableCell>
                    <TableCell align='center' sx={{fontWeight:'bold'}}>Quantity</TableCell>
                    <TableCell align='center' sx={{fontWeight:'bold'}}>Sub-Total</TableCell>
                    <TableCell/>
                </TableRow>
            </TableHead>
            {cartProducts?.map((data:any,index:any)=>{
            return(
                <TableRow key={index}>
                    <TableCell><Image height={'50px'} width={'50px'} src={data.imageUrl}></Image></TableCell>
                    <TableCell sx={{fontWeight:'bold'}}>{data.title}</TableCell>
                    {data.salePrice?(<><TableCell>R{data.salePrice}</TableCell></>):(<><TableCell>R{data.price}</TableCell></>)}
                    <TableCell align='center'>
                        
                        <Button size='small'><BiMinus/></Button>
                        <TextField sx={{width:'20%'}} size='small' defaultValue={1}/>
                        <Button size='small'><BiPlus/></Button>
                    </TableCell>
                    {data.salePrice?
                    (<><TableCell>R{data.salePrice}<IconButton  onClick={()=>handleDelete(index)}>
                    <DeleteOutlineRounded sx={{color:'red'}}/></IconButton></TableCell></>)
                    :(<><TableCell>R{data.price}<IconButton  onClick={()=>handleDelete(index)}>
                    <DeleteOutlineRounded sx={{color:'red'}}/></IconButton></TableCell></>)}
                    
                    
                    
                </TableRow>
            )
        })}
        </Table>
        </TableContainer>
        <Typography marginTop={'2%'} textAlign={'center'}><Button color='error' variant='contained'
        onClick={()=>handleDeleteAll()}>Clear Cart</Button></Typography><br/>
        </Card><br/>
        </Box>
        <CartTotal/><br/>
        </>):(
        <>
        <Box boxShadow={1} borderTop={3}  width={700} m={'auto'} sx={{backgroundColor:'#f2f5f7'}} marginTop={'10%'}>
            <Stack direction={'row'} spacing={2} paddingTop={'3%'} px={10}>

        <ShoppingCart sx={{marginTop:'5%'}}></ShoppingCart><Typography textAlign={'center'}  variant='h6'>Your Cart is currently empty</Typography></Stack><br/>
        </Box>
        <Typography gutterBottom marginTop={'3%'}  textAlign={'center'} color={'black'}>
            <Link style={{textDecoration:'none'}} to={'http://localhost:5173/AOBCollection'}>
            <Button
            
            variant='contained' sx={{backgroundColor:'black',fontWeight:'bold'}}>Return to Shop</Button>
            </Link>
        </Typography><br></br>
        </>)}


       
    </div>
  )
}

