import { collection} from "firebase/firestore";
import  { useState } from "react";
import { db } from "../../Firebase/Firebase";
import {
  Grid,
  Typography,
} from "@mui/material";

import Section6Design from "./Section6Design";
import useCategories from "../Custom Hooks/useCategories";

export default function Section6() {
  const [products, setProducts] = useState([{}]);
  const ProductsRef = collection(db, "AOB Collection");
  useCategories(products, setProducts, ProductsRef);
  //@ts-ignore
  const filtered = products.filter((data) => data.salePrice!== 0);
  return (
    <div style={{ backgroundColor: "#ede8e8", marginTop: "5%" }}>
      <br />
      <Typography
        fontFamily={"Oswald"}
        marginLeft={"3%"}
        fontWeight={"bold"}
        variant="h3"
      >
        ITEMS ON SALE
      </Typography>
      <Grid  container direction={"row"} spacing={2} marginTop={"4%"} px={10}>
        {filtered.map((data, index) => {
          return (
            
           
             <>
              { //@ts-ignore
              data.salePrice ? (
                <>
                  <Section6Design
                  //@ts-ignore
                  imageUrl={data.imageUrl}
                  //@ts-ignore
                  title={data.title}
                  //@ts-ignore
                  price={data.price}
                  //@ts-ignore
                  salePrice={data.salePrice}
                  id={index}
                  data={data}
                  />
                  
                </>
              ) : (
                <></>
              )}
             </>
          );
        })}
      </Grid>
      <br />
    </div>
  );
}
