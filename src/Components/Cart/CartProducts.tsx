import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Card,  Stack, Table, TableCell, TableContainer, TableHead, TableRow,  Typography, useMediaQuery, useTheme } from '@mui/material'
import { DeleteOutlineRounded } from '@mui/icons-material'
import { removeAllfromCart,} from '../../Redux/Slices/ProductsSlice'
import CartTotal from './CartTotal'
import EmptyCart from '../Shared/EmptyCart'
import { CartProductsDesign } from './CartProductsDesign'

export default function CartProducts() {
    const dispatch=useDispatch()
    const cartProducts=useSelector((state:any)=>{
        return state.cart
    })
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
                <CartProductsDesign
                id={index}
                salePrice={data.salePrice}
                quantity={data.quantity}
                price={data.price}
                imageUrl={data.imageUrl}
                title={data.title}
                />)})}
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

