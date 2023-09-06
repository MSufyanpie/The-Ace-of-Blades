import React from 'react'
import {Image} from 'react-bootstrap'
import {  Typography,Box,Stack,Card, CardMedia, CardContent, Button} from "@mui/material";
import { Link } from "react-router-dom";
interface saleProducts{
    id:number,
    image:any,
    title:string,
    actualPrice:string,
    discountPrice:string
}
export default function Section6Design({id,image,title,actualPrice,discountPrice}:saleProducts) {
  return (
    
    
    <Box>
    <Link to={'/'} style={{textDecoration:'none'}}>
    <Card>
     <CardMedia 
     sx={{height:'240px'}}
     image={image}/>
     <CardContent>
        <Typography>{title}</Typography>
     </CardContent>
    </Card>
    </Link>
    <Typography gutterBottom textAlign={'center'}>
        <s>{actualPrice}</s>{discountPrice}
    </Typography>
    <Typography textAlign={'center'}>
    <Button variant='contained' size='small' 
    sx={{backgroundColor:'black',color:'white',borderRadius:'10px'}}>Add to Cart</Button></Typography>
    </Box>
    
  )
}
