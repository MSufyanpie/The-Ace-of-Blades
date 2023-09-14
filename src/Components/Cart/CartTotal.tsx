import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, RadioGroup, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { FormGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function CartTotal() {
    const productsCart=useSelector((state:any)=>{
        return state.cart
    })
    const delivery=75
    const subTotal=productsCart.reduce((sum,data)=>sum+data.price,0)
  return (
    
     <Box width={445} m={'auto'}  boxShadow={4} >
        
        <TableContainer>
        <TableHead  sx={{backgroundColor:'#f2f5f7',}}>
            <TableRow>
                <TableCell sx={{fontWeight:'bold'}}>Cart Totals</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
            </TableRow>
            </TableHead>
            <TableRow>
                <TableCell sx={{fontWeight:'bold'}}>Sub-Total</TableCell>
                <TableCell>R{subTotal}</TableCell>
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
      <FormControlLabel control={<Checkbox />} label={'flat rate:R75.00'} />
    </FormGroup>
    <Typography marginTop={'3%'} gutterBottom>Shipping to:<b>Northern Cape</b></Typography>
    <Typography sx={{fontWeight:'bold'}}>Change Address?</Typography>
</>)}
                </TableCell>
            </TableRow>
            <TableRow>
                    <TableCell sx={{fontWeight:'bold'}}>Total</TableCell>
                    <TableCell>R{subTotal}</TableCell>
                </TableRow>
        
        </TableContainer><br/>
        <Typography textAlign={'center'}>
            <Button variant='contained' sx={{backgroundColor:'black',fontWeight:'bold'}}> Procced to Checkout</Button>
        </Typography><br/>
        
     </Box>
    
  )
}
