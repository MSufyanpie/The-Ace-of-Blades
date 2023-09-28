
import { collection } from 'firebase/firestore'
import  {  useState } from 'react'
import {  db } from '../../../Firebase/Firebase'
import {Grid,} from '@mui/material'

import { AllCategoriesDesign } from '../../Shared/AllCategoriesDesign'
import useCategories from '../../Custom Hooks/useCategories'

export default function Category1() {
    const[products,setProducts]=useState([{}])
    const ProductsRef=collection(db,"AOB Collection")
   useCategories(products,setProducts,ProductsRef);
      //@ts-ignore
      const filtered:any=products.filter(data=>data.category===1)  
  return (
    <div>
        
        <Grid 
        container
        direction={'row'} spacing={2} marginTop={{xs:'25%',md:'10%'}} px={8}>
        {filtered.map((data:any,index:number)=>{
            return(
                <AllCategoriesDesign
                 title={data.title}
                 imageUrl={data.imageUrl}
                 id={index}
                 price={data.price}
                 salePrice={data.salePrice}
                 data={data}
                />
            )
        })}
        </Grid>
    </div>
  )
}
