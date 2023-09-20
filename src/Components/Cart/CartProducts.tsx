
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Card, IconButton, Stack, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Image } from 'react-bootstrap'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { DeleteOutlineRounded } from '@mui/icons-material'
import { removeAllfromCart, removeFromCart,updateQuantity } from '../RTK Store/Slices/ProductsSlice'
import CartTotal from './CartTotal'
import EmptyCart from '../Checkout/EmptyCart'

export default function CartProducts() {
    const dispatch=useDispatch()

    const handleQuantity=(event:any,index:number)=>{
        const newQuantity = parseInt(event.target.value, 10);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            dispatch(updateQuantity({ index, quantity: newQuantity }))
        }
    }
    const handleAdd=(index:number)=>{
      dispatch(updateQuantity({index,quantity:cartProducts[index].quantity+1}))
      

      console.log()
    }
    const handleMinus=(index:number)=>{
        dispatch(updateQuantity({index,quantity:cartProducts[index].quantity-1}))
        
    }
    const cartProducts=useSelector((state:any)=>{
        return state.cart
    })
    console.log(cartProducts)
   
    const handleDelete=(index:any)=>{
            dispatch(removeFromCart(index))
    }
    const handleDeleteAll=(index:any)=>{
        dispatch(removeAllfromCart(index))
    }
    const theme=useTheme()
const isMobile=useMediaQuery(theme.breakpoints.down('md'))
    
  return (
    
    <Stack >
        {cartProducts.length!==0?(<>
            <Stack px={{xs:3,md:5}} direction={{xs:'column',md:'row'}}>
            <Box 
               px={{xs:0,md:2}}
                width={isMobile?'100%':'60%'}   marginTop={isMobile?'20%':'2%'}>
        <Card variant='outlined'  >
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
                        
                        <Button onClick={()=>handleMinus(index)} size='small'><BiMinus/></Button>
                        <TextField value={data.quantity}
                         onChange={(e) => handleQuantity(e, index)}
                          sx={{width:{xs:'60%',md:'20%'}}} size='small' />
                        <Button onClick={()=>handleAdd(index)} size='small'><BiPlus/></Button>
                    </TableCell>
                    {data.salePrice?
                    (<><TableCell>R{data.quantity*data.salePrice}<IconButton  onClick={()=>handleDelete(index)}>
                    <DeleteOutlineRounded sx={{color:'red'}}/></IconButton></TableCell></>)
                    :(<><TableCell>R{data.quantity*data.price}<IconButton  onClick={()=>handleDelete(index)}>
                    <DeleteOutlineRounded sx={{color:'red'}}/></IconButton></TableCell></>)}
                </TableRow>  
            )
        })}
        </Table>
        </TableContainer>
        <Typography marginTop={'2%'} textAlign={'center'}><Button color='error' variant='contained' sx={{fontWeight:'bold'}}
        onClick={()=>handleDeleteAll(cartProducts)}><DeleteOutlineRounded/>Clear Cart</Button></Typography><br/>
        </Card><br/>
        </Box>
        <CartTotal/><br/>
        </Stack></>):(
        <>
        <EmptyCart/>
        </>)}
    </Stack>
  )
}

