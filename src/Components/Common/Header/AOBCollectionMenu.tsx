import { Box, Menu, MenuItem, Stack, Typography } from '@mui/material'
import folding from '../../../assets/Categories/Folding Knife.jpeg'
import ring from "../../../assets/Categories/Key Ring.jpeg";
import kitchenKnife from "../../../assets/Categories/Kitchen Knife.jpeg";
import KnifeCare from "../../../assets/Categories/Knife Care.png";

import  { useEffect, useState } from "react"
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../Config/Firebase';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
export const AOBCollectionMenu = ({anchorel,onClose}:any) => {
  const[products,setProducts]:any=useState([{}])
    let ProductsRef=collection(db,"AOB Collection")
    
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
      const filtered=products.filter((data:any)=>{ return data.category===1})
      const filtered2=products.filter((data:any)=>{ return data.category===2})
      const filtered3=products.filter((data:any)=>{ return data.category===3})
      const filtered4=products.filter((data:any)=>{ return data.category===4})
      var len1=filtered.length
      var len2=filtered2.length
      var len3=filtered3.length
      var len4=filtered4.length
  const categories = [
    {
      img: folding,
      title: "FOLDING KNIVES",
      number: len1+" PRODUCTS",
      link: "/FoldingKnives",
    },
    {
      img: ring,
      title: "KEY RINGS",
      number: len2+" PRODUCTS",
      link: "/KeyRings",
    },
    {
      img: kitchenKnife,
      title: "KITCHEN AND CHEF KNIVES",
      number: len4+" PRODUCTS",
      link: "/KitchenandChefKnives",
    },
    {
      img: KnifeCare,
      title: "KNIFE CARE",
      number: len3+" PRODUCTS",
      link: "/KnifeCareProducts",
    },
  ];
  
  return (
    
    <Menu
    id="simple-menu"
    anchorEl={anchorel}
    open={Boolean(anchorel)}
    onClose={onClose}
    MenuListProps={{ onMouseLeave: onClose }}
    >
       <Box width={700}>
       <Stack direction={'column'}>
    {categories.map((data:any,index:number)=>{
      
      return(
        <MenuItem key={index}>
        <Link to={data.link} style={{textDecoration:'none'}}>
        <Stack direction={'row'} spacing={2}>
          <Image style={{height:'50px',width:'50px'}} src={data.img}></Image>
          <Typography sx={{color:'black',fontWeight:'bold'}}>{data.title}</Typography>
          <Typography sx={{color:'red'}}>({data.number})</Typography>
        </Stack>
        </Link>
        
        </MenuItem>
      )
      
    })}
    </Stack>
    </Box>
    </Menu>
    
  )
}
