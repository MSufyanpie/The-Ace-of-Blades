
import {  Typography,Box,Card, CardMedia, CardContent, Button} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../RTK Store/Slices/ProductsSlice";
interface saleProducts{
    id:number,
    image:any,
    title:string,
    price:string,
    salePrice:number,
    data:any,
    
}
export default function Section8Design({id,image,title,price,salePrice,data}:saleProducts) {
  const dispatch=useDispatch()
  const handleAddToCart=(products:any)=>{
      dispatch(addToCart(products))
  }
  return (
    <Box key={id}>
    <Link to={'/'} style={{textDecoration:'none'}}>
    <Card  sx={{border:'none',}} variant='outlined'>
     <CardMedia 
     sx={{height:'350px'}}
     image={image}
     component={'img'}
     />
     <CardContent>
        <Typography textAlign={'center'} variant='h5' gutterBottom fontFamily={'Oswald'} fontWeight={'bold'} >{title}</Typography>
     </CardContent>
    </Card>
    </Link>
    <Typography variant='h5' gutterBottom textAlign={'center'} fontFamily={'Oswald'} fontWeight={'bold'}>
        R{salePrice? salePrice:price}
    </Typography>
    <Typography textAlign={'center'}>
    <Button 
    onClick={()=>handleAddToCart(data)}
    variant='text' size='large' 
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
