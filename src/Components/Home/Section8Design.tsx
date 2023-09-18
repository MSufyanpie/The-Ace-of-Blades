
import {  Typography,Box,Card, CardMedia, CardContent, Button} from "@mui/material";
import { Link } from "react-router-dom";
interface saleProducts{
    id:number,
    image:any,
    title:string,
    price:string,
    
}
export default function Section8Design({id,image,title,price}:saleProducts) {
  return (
    
    
    <Box>
    <Link to={'/'} style={{textDecoration:'none'}}>
    <Card sx={{border:'none'}} variant='outlined'>
     <CardMedia 
     sx={{height:'350px'}}
     image={image}/>
     <CardContent>
        <Typography textAlign={'center'} variant='h5' gutterBottom fontFamily={'Oswald'} fontWeight={'bold'} >{title}</Typography>
     </CardContent>
    </Card>
    </Link>
    <Typography variant='h5' gutterBottom textAlign={'center'} fontFamily={'Oswald'} fontWeight={'bold'}>
        {price}
    </Typography>
    <Typography textAlign={'center'}>
    <Button variant='text' size='large' 
    sx={{backgroundColor:'white',
    color:'black',
    border:'1px solid grey',
    ":hover":{
      border:'none',
      backgroundColor:'white'
    }
    }}>
      Add to Cart</Button></Typography>
    </Box>
    
  )
}
