import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, RadioGroup, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { FormGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function CartTotal() {
    const productsCart=useSelector((state:any)=>{
        return state.cart
    })
    const delivery=75
    // const subTotal=productsCart.reduce((sum,data)=>sum+data.price,0)

    const subTotal=productsCart.map(data => data.salePrice || data.price).reduce((salePrice,price)=>salePrice+price,0)
    const theme=useTheme()
    const isMobile=useMediaQuery(theme.breakpoints.down('md'))

  return (
    
     <Box  width={{xs:'100%',md:445}} sx={{boxShadow:1}} marginTop={'2%'} >
        
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
                
                <TableCell>{subTotal>1000?(<>R{subTotal}</>):(<>R{subTotal+delivery}</>)}</TableCell>
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
                    <TableCell>{subTotal>1000?(<>R{subTotal}</>):(<>R{subTotal+delivery}</>)}</TableCell>
                </TableRow>
        
        </TableContainer><br/>
        <Typography textAlign={'center'} >
            <Button size='large' variant='contained' sx={{backgroundColor:'black',fontWeight:'bold'}}> Procced to Checkout</Button>
        </Typography><br/>
        
     </Box>
    
  )
}
