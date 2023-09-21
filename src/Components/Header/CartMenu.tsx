import { Menu, MenuItem, Table, TableContainer } from '@mui/material'
import { useSelector } from 'react-redux'
import { CartProductsDesign } from '../Cart/CartProductsDesign'
import { useNavigate } from 'react-router-dom'
import EmptyCart from '../Checkout/EmptyCart'


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
      >
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
        {cartProducts.length==0?(<>
        <EmptyCart/>
        </>):(<></>)}
      </Menu>
  )
}
