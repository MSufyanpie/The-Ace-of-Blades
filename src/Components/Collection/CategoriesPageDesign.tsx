import { Box, Button, Card, CardActionArea,  CardMedia, Typography } from '@mui/material'

import { Link, useNavigate } from 'react-router-dom'
interface categoriesDesign{
    id:any,
    image:any,
    title:string,
    number:string,
    link:string
}
export default function CategoriesPageDesign({id,image,title,number,link}:categoriesDesign) {
  const navigate=useNavigate()
  return (
    <div>
   
    <Card 
    key={id}
    >
        <CardMedia
        sx={{height:'250px'}}
        image={image}
        component={'img'}
        />
        <CardActionArea>
            <Box sx={{backgroundColor:'#e4ebe5'}}>
                <Typography gutterBottom fontFamily={'Oswald'} textAlign={'center'} variant='h5' fontWeight={'bold'}>{title}</Typography>
                <Typography gutterBottom fontFamily={'Oswald'} textAlign={'center'}  variant='body2' >{number}</Typography>
                <Typography   textAlign={'center'}>
                <Button onClick={()=>navigate(link)} variant='outlined' sx={{border:'1px solid grey',color:'black'}}>View Products</Button></Typography>
                <br/>
            </Box>
        </CardActionArea>
    </Card>
    </div>
  )
}
