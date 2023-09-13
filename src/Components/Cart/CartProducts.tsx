import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addToCart} from '../RTK Store/Slices/ProductsSlice'
import { Box, Button, Card, Stack, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import NavBar from '../Header/NavBar'
import { Image } from 'react-bootstrap'
import { BiMinus, BiPlus } from 'react-icons/bi'

export default function CartProducts() {
    
    const cart=useSelector((state:any)=>{
        return state.cart
    })
    console.log(cart)
  return (
    <div>
        <NavBar/>
        <Box width={'75%'} m={'auto'} marginTop={'15%'}>
        <Card sx={{boxShadow:5}}  >
        <TableContainer >
        <Table >
            <TableHead sx={{backgroundColor:'#f2f5f7'}}>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align='center' sx={{fontWeight:'bold'}}>Product</TableCell>
                    <TableCell sx={{fontWeight:'bold'}}>Price</TableCell>
                    <TableCell align='center' sx={{fontWeight:'bold'}}>Quantity</TableCell>
                    <TableCell sx={{fontWeight:'bold'}}>Sub-Total</TableCell>
                  
                </TableRow>
            </TableHead>
            {cart.map((data,index)=>{
            return(
                <TableRow>
                    <TableCell><Image height={'40px'} width={'40px'} src={data.imageUrl}></Image></TableCell>
                    <TableCell>{data.title}</TableCell>
                    <TableCell>{data.price}</TableCell>
                    <TableCell>
                        
                        <Button size='small'><BiMinus/></Button>
                        <TextField size='small' defaultValue={1}/>
                        <Button size='small'><BiPlus/></Button>
                    </TableCell>
                    <TableCell>{data.price}</TableCell>
                    
                </TableRow>
            )
        })}
        </Table>
        </TableContainer>
        </Card>
        </Box>
    </div>
  )
}

