import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../Firebase/Firebase";
import { Grid } from "@mui/material";
import { AllCategoriesDesign } from "../../Shared/AllCategoriesDesign";

export default function Category4() {
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
  //@ts-ignore
  const filtered: any = products.filter((data) => data.category === 4);

  return (
    <div>
     
      <Grid container direction={"row"} spacing={2} marginTop={"10%"} px={4}>
        {filtered.map((data: any, index: number) => {
          return (
            <AllCategoriesDesign
              title={data.title}
              imageUrl={data.imageUrl}
              id={index}
              price={data.price}
              salePrice={data.salePrice}
              data={data}
            />
          );
        })}
      </Grid>
    </div>
  );
}