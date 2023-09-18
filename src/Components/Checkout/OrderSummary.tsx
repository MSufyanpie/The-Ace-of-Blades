import { Box, Card, CardContent,  Stack, Typography } from '@mui/material'
import { Image,  } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function OrderSummary() {
    const cartProducts=useSelector((state:any)=>{
        return state.cart
    })
    let subTotal=cartProducts.reduce((total:number,data:any)=>{
        const price=data.price || data.salePrice;
        const quantity=data.quantity;
        return total+(price*quantity)

    },0)
    if(subTotal<1000){
        subTotal=subTotal+75
    }
    return (
    <div>
        
       
     <Box width={500} sx={{float:'right',marginRight:'2%',}} marginTop={'7%'} position={'-webkit-sticky'}>
     <Typography gutterBottom variant='h5' fontWeight={'bold'}>
            Your Order
        </Typography>
        <Card variant='outlined' sx={{border:'1px solid #f2f5f7'}}>
            <Stack direction={'row'} spacing={40}  marginTop={'2%'}>
            <Box px={2}>
                <Typography fontWeight={'bold'} variant='body1'  >
                    Product
                </Typography><br/>
            </Box>
            <Box sx={{float:'right'}}>
                <Typography fontWeight={'bold'} variant='body1'>
                   Sub-Total
                </Typography>
            </Box>
            </Stack>
            <CardContent >
                {cartProducts.map((data:any,index:number)=>{
                    return(
                        <>
                        <Stack 
                        key={index}
                        direction={'row'} spacing={13} >
                            <Stack direction={'row'} spacing={3}>
                            <Image height={'50px'} width={'50px'} src={data.imageUrl}></Image>
                            <Typography fontWeight={'bold'}>{data.title}    x({data.quantity})</Typography></Stack>
                            <Box sx={{float:'right'}}>{data.salePrice?(<><Typography fontWeight={'bold'}>R{data.quantity*data.salePrice}</Typography></>)
                            :(<><Typography fontWeight={'bold'}>R{data.quantity*data.price}</Typography></>)}</Box>
                        </Stack><hr/><br/>
                        </>
                    )
                })}
                  <Stack direction={'row'} spacing={40} >
            <Box px={2}>
                <Typography fontWeight={'bold'}  variant='body1'  >
                   Sub-Total
                </Typography><br/>
            </Box>
            <Box sx={{float:'right'}}>
                <Typography fontWeight={'bold'}  variant='body1'>
                   R{subTotal}
                </Typography>
            </Box>
            </Stack>
            </CardContent>
        </Card>
     </Box>
    </div>
  )
}
