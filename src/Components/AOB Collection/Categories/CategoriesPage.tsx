import React from "react";
import folding from "../../../assets/Categories/Folding Knife.jpeg";
import ring from "../../../assets/Categories/Key Ring.jpeg";
import kitchenKnife from "../../../assets/Categories/Kitchen Knife.jpeg";
import KnifeCare from "../../../assets/Categories/Knife Care.png";
import { Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import CategoriesPageDesign from "../CategoriesPageDesign";
interface categories {
  img: any;
  title: string;
  number: string;
  link: string;
}
export default function CategoriesPage() {
  const category1: categories[] = [
    {
      img: folding,
      title: "FOLDING KNIVES",
      number: "3 PRODUCTS",
      link: "/FoldingKnives",
    },
    {
      img: ring,
      title: "KEY RINGS",
      number: "1 PRODUCT",
      link: "/KeyRings",
    },
    {
      img: kitchenKnife,
      title: "KITCHEN AND CHEF KNIVES",
      number: "5 PRODUCTS",
      link: "/KitchenandChefKnives",
    },
    {
      img: KnifeCare,
      title: "KNIFE CARE",
      number: "2 PRODUCTS",
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
            <Grid item xs={12} sm={6} md={4}>
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
      </Grid>
    </div>
  );
}
