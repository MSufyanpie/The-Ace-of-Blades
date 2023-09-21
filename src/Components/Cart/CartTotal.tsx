import { Box, Button,  Checkbox, FormControlLabel,  TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material'

import { FormGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function CartTotal() {
    const productsCart=useSelector((state:any)=>{
        return state.cart
    })
    const delivery=75
   

    const subTotal=productsCart.reduce((total:number,data:any)=>{
        const price=data.salePrice || data.price;
        const quantity=data.quantity;
        return total+(price*quantity)

    },0)
  return (
    
     <Box  width={{xs:'100%',md:369}} sx={{boxShadow:1}} marginTop={'2%'} >
        
        <TableContainer >
        <TableHead  sx={{backgroundColor:'#f2f5f7'}}>
            <TableRow >
                <TableCell sx={{fontWeight:'bold'}}>Cart Totals</TableCell>
                <TableCell ></TableCell>
                <TableCell ></TableCell>
                
                
            </TableRow>
            </TableHead>
            <TableRow>
                <TableCell sx={{fontWeight:'bold',}}>Sub-Total</TableCell>
                
                <TableCell >{subTotal>1000?(<>R{subTotal}</>):(<>R{subTotal+delivery}</>)}</TableCell>
            <TableCell></TableCell>
            </TableRow>
            <TableRow>
            <TableCell sx={{fontWeight:'bold'}}>Shipping</TableCell>
                
                <TableCell>
                {subTotal>1000?(<>
                <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Free Shipping" />
      <FormControlLabel control={<Checkbox />} label={'flat rate:R75.00'} />
    </FormGroup>
    <Typography marginTop={'3%'} gutterBottom>Shipping to:<b>Northern Cape</b></Typography>
    <Typography sx={{fontWeight:'bold'}}>Change Address?</Typography>

                
                
                </>):(<>
                    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label={'flat rate:R75.00'} />
    </FormGroup>
    <Typography marginTop={'3%'} gutterBottom>Shipping to:<b>Northern Cape</b></Typography>
    <Typography sx={{fontWeight:'bold'}}>Change Address?</Typography>
</>)}
                </TableCell>
                <TableCell ></TableCell>
            </TableRow>
            <TableRow>
                    <TableCell sx={{fontWeight:'bold'}}>Total</TableCell>
                    <TableCell>{subTotal>1000?(<>R{subTotal}</>):(<>R{subTotal+delivery}</>)}</TableCell>
                    <TableCell ></TableCell>
                </TableRow>
        
        </TableContainer><br/>
        <Typography textAlign={'center'} >
            <Link to={'http://localhost:5173/Checkout'} style={{textDecoration:'none'}}>
            <Button size='large' variant='contained' sx={{backgroundColor:'black',fontWeight:'bold',":hover":{backgroundColor:'grey'}}}> Procced to Checkout</Button>
            </Link>
        </Typography><br/>
        
     </Box>
    
  )
}
