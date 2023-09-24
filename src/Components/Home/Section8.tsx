import { collection, getDocs } from 'firebase/firestore'
import  { useEffect, useState } from 'react'
import {db} from '../../Firebase/Firebase'
import { Stack, Typography,Box } from '@mui/material'
import Section8Design from './Section8Design'

export default function Section8() {
  const[products,setProducts]=useState([{}])
    const ProductsRef=collection(db,"AOB Collection")
    useEffect(()=>{
        const getProductsList= async()=>{
          try {
            let data=await getDocs(ProductsRef)
            const actualData=data.docs.map((doc)=>({
            ...doc.data(),
            id:doc.id,
      
            }))
            console.log(actualData)
            setProducts(actualData)
            
            
          } catch (error) {
            console.error(error)
          }
          
          
          }

        getProductsList()
       console.log(products)
        
      },[])
      const FirstThreeProds=products.slice(0,3)
    
  return (
    <Box sx={{backgroundColor:'#ede8e8'}} px={7}>
      <br/><br/>
      <Typography
      fontFamily={'Oswald'}
     marginLeft={'3%'}
      fontWeight={'bold'}
       gutterBottom variant='h3'>
        RECENT PRODUCTS
      </Typography>
      <Box  sx={{backgroundColor:'white'}}>
      <Stack  spacing={4} direction={{xs:'column',md:'row'}} px={{xs:1,md:10}} >
    {FirstThreeProds.map((data:any,index:number)=>{
      return(
        <div key={index}
        >
        <Section8Design
        id={index}
        image={data.imageUrl}
        title={data.title}
        price={data.price}
        salePrice={data.salePrice}
        
        data={data}
        />
        </div>
      )
    })}
    </Stack><br/>
    </Box><br/>

    </Box>
  )
}