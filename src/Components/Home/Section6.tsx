import { collection, getDocs } from "firebase/firestore";
import  { useEffect, useState } from "react";
import { db } from "../../Config/Firebase";
import {
  Grid,
  Typography,
} from "@mui/material";

import Section6Design from "./Section6Design";
interface knife {
  imageUrl: any;
  title: string;
  price: string;
  salePrice: string;
}
export default function Section6() {
  const [products, setProducts] = useState([{}]);
  const ProductsRef = collection(db, "AOB Collection");

  useEffect(() => {
    const getProductsList = async () => {
      try {
        let data = await getDocs(ProductsRef);
        const actualData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(actualData);
        setProducts(actualData);
      } catch (error) {
        console.error(error);
      }
    };
    getProductsList();
  }, []);
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
      <Grid container direction={"row"} spacing={2} marginTop={"4%"} px={8}>
        {filtered.map((data, index) => {
          return (
            <>
              {data.salePrice ? (
                <>
                  <Section6Design
                  imageUrl={data.imageUrl}
                  title={data.title}
                  price={data.price}
                  salePrice={data.salePrice}
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
