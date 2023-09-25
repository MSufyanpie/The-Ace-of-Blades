import { Button, Menu, MenuItem, Table, TableContainer, Typography} from '@mui/material'
import { useSelector } from 'react-redux'
import { CartProductsDesign } from '../../Cart/CartProductsDesign'
import {Link, useNavigate} from 'react-router-dom'
import EmptyCart from '../../Shared/EmptyCart'


export const CartMenu = ({anchorel,onClose}:any) => {
    const navigate=useNavigate()
    const handleClick=()=>{
    navigate('/Cart')
    }
    const cartProducts=useSelector((state:any)=>{
        return state.cart
    })
  return (

    <Menu
        id="simple-menu"
        anchorEl={anchorel}
        open={Boolean(anchorel)}
        onClose={onClose}
        MenuListProps={{ onMouseLeave: onClose }}
        sx={{marginRight:'5%'}}
      >
        {cartProducts.length==0?(<>
        <EmptyCart/>
        </>):(<>
            <TableContainer >
                    <Table>

        {cartProducts.map((data:any,index:number)=>{
            return(
                <MenuItem onClick={handleClick}>
                    <CartProductsDesign
                id={index}
                salePrice={data.salePrice}
                quantity={data.quantity}
                price={data.price}
                imageUrl={data.imageUrl}
                title={data.title}
                />
                </MenuItem>
            )
        })}

        </Table>
        </TableContainer>
        <Link to={'/Cart'} style={{textDecoration:'none'}}><Typography textAlign={'center'} gutterBottom>
            <Button variant={'contained'}
                    sx={{color:'black', backgroundColor:'white',border:'1px solid black',":hover":{
                    backgroundColor:'grey'}
                    }}

            >
                View Cart</Button></Typography></Link>
        <Link to={'/Checkout'} style={{textDecoration:'none'}}> <Typography textAlign={'center'}>
            <Button variant={'contained'}
                    sx={{color:'white', backgroundColor:'black',":hover":{
                            backgroundColor:'grey'}}}>
                Checkout</Button></Typography></Link>
        </>)}
     
        
      </Menu>

  )
}
