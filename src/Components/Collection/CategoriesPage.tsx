import  { useState } from "react";
import folding from '../../assets/Categories/Folding Knife.jpeg'
import ring from "../../assets/Categories/Key Ring.jpeg";
import kitchenKnife from "../../assets/Categories/Kitchen Knife.jpeg";
import KnifeCare from "../../assets/Categories/Knife Care.png";
import { Grid, } from "@mui/material";
import CategoriesPageDesign from "./CategoriesPageDesign";
import { collection } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import CategoriesHook from "../Custom Hooks/CategoriesHook";
interface categories {
  img: any;
  title: string;
  number: string;
  link: string;
}
export default function CategoriesPage() {
  const[products,setProducts]:any=useState([{}])
    let ProductsRef=collection(db,"AOB Collection")
      CategoriesHook(products, setProducts, ProductsRef);
      const filtered=products.filter((data:any)=>{ return data.category===1})
      const filtered2=products.filter((data:any)=>{ return data.category===2})
      const filtered3=products.filter((data:any)=>{ return data.category===3})
      const filtered4=products.filter((data:any)=>{ return data.category===4})
      var len1=filtered.length
      var len2=filtered2.length
      var len3=filtered3.length
      var len4=filtered4.length
      
  const category1: categories[] = [
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
    <div style={{marginTop:'10%'}}>
      
      <Grid 
      container
      direction={"row"} spacing={2} px={10} >
        {category1.map((data, index) => {
          return (
            <Grid 
            key={index}
            item xs={12} sm={6} md={4}>
            <CategoriesPageDesign
              id={index}
              image={data.img}
              title={data.title}
              number={data.number}
              link={data.link}
            />
            </Grid>
          );
        })}
      </Grid><br/>
    </div>
  );
}
