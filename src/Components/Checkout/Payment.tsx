import { Lock } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Checkbox, FormLabel, Stack, Typography } from '@mui/material'
import {useState} from 'react'
import { Image } from 'react-bootstrap'
import { BiLeftArrow } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Payment() {
    const cartProducts=useSelector((state:any)=>{
        return state.cart
    })
    let subTotal=cartProducts.reduce((total:number,data:any)=>{
        const price=data.price || data.salePrice;
        const quantity=data.quantity;
        return total+(price*quantity)

    },0)
    const [easypaisa,setEasypaisa]=useState(true)
    const [sadaPay,setSadapay]=useState(false)
    const [TCBox,setTCBox]=useState(false)
    const handleEasypaisa=(event:any)=>{
        setEasypaisa(event.target.checked)
    }
    const handleSadaPay=(event:any)=>{
        setSadapay(event.target.checked)
        
    }
    const handleTermsandConditions=()=>{
          setTCBox(true)
    }
  return (
    <div>
        <Box width={{xs:'100%',md:700}} px={{xs:0,md:4}}>
            <Typography marginTop={'4%'} variant='h6' fontWeight={'bold'}>Payment</Typography>
            <Card variant='outlined'>
                <CardContent sx={{border:'1px solid #f2f5f7'}}>
                <Stack direction={'row'} spacing={5}>
                    <Stack direction={'row'} >
                    <Checkbox defaultChecked checked={easypaisa} onChange={handleEasypaisa}></Checkbox>
                    <Typography paddingTop={'32%'}>EasyPaisa</Typography></Stack>
                    <Image height={'100px'} width={'100px'} src='src\assets\easypaisa.png'></Image>
                </Stack>
                </CardContent>
                {easypaisa?(<><CardContent  sx={{backgroundColor:'#f2f5f7'}}>
                    <Typography>Pay with EasyPaisa, (Your order status will be updated immediately after successful payment).</Typography>
                    </CardContent></>):(<></>)}
                    <CardContent sx={{border:'1px solid #f2f5f7'}}>
                <Stack direction={'row'} spacing={5}>
                    <Stack direction={'row'}>
                    <Checkbox checked={sadaPay}  onChange={handleSadaPay}></Checkbox>
                    <Typography  marginTop={'9%'}>SadaPay</Typography>
                    </Stack>
                    <Image height={'40px'} width={'150px'} src='src\assets\sadapay-logo.png'></Image>
                </Stack>
                </CardContent>
                {sadaPay?(<><CardContent  sx={{backgroundColor:'#f2f5f7'}}>
                    <Typography>SadaPay allows you to enter your debit  card information to process your payment.</Typography>
                    </CardContent></>):(<></>)}

                    
            </Card><br/>
            <Typography>Your personal data will be used to process your order, 
            support your experience throughout this website, and for other purposes described in our privacy policy.</Typography><br/>
            {TCBox?(<>
            <Box width={{xs:'100%',md:700}} height={150} sx={{
                overflowY:'scroll',
                backgroundColor:'#f2f5f7'
            }}>
                <Typography gutterBottom textAlign={'center'} variant='h4'>Shipping</Typography>
                <Typography px={3} gutterBottom>For orders over R1000 we will ship free of charge within South Africa. Delivery will be door-to-door and packages are generally dispatched within 1 working day after receipt of payment. Parcels are shipped via The Courier Guy with tracking and drop-off signature. We will provide you with a link to track your package online. In some cases, we may change the courier if the selected does not deliver in your area.</Typography>
                <Typography gutterBottom  textAlign={'center'} variant='h4'>Returns</Typography>
                <Typography px={3} gutterBottom>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can`t offer you a refund or exchange.
                To be eligible for a return, your item must be unused and in the same condition that you received it. 
                It must also be in the original packaging.</Typography>
            </Box><br/>
            </>):(<></>)}
            <Stack direction={'row'} marginTop={'5%'}>
                <Checkbox></Checkbox>
                <FormLabel sx={{marginTop:{xs:'8%',md:'0.5%'}}}>I have read and agree to the website
                 <Button onClick={handleTermsandConditions} sx={{color:'black'}}>terms and conditions</Button></FormLabel>
            </Stack>
           
            <Button fullWidth size='large' sx={{backgroundColor:'black',color:'white',fontWeight:'bold',}}><Lock sx={{color:'white'}}/>Place Order    R{subTotal} </Button>
            <Typography marginTop={'2%'} textAlign={'center'}>
                <BiLeftArrow/>
                <Link to={'http://localhost:5173/Cart'} style={{textDecoration:'none',fontWeight:'bolder',color:'black'}}>Back to Cart</Link>

            </Typography><br/>
        </Box>
    </div>
  )
}
