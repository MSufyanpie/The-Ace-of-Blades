import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, addToFirebase } from "../Redux/Slices/ProductsSlice";
import { useState } from "react";
import { MdDoneOutline } from "react-icons/md";

interface categories {
  id: number;
  imageUrl: string;
  salePrice: number;
  title: string;
  price: number;
  data: any;
}
export const AllCategoriesDesign = ({
  id,
  imageUrl,
  salePrice,
  title,
  price,
  data,
}: categories) => {
  const [tick, setTick] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = (products: any) => {
    console.log("adding to cart", products);
    dispatch(addToCart(products));
    //@ts-ignore
    dispatch(addToFirebase(products))
    setTick(true);
    
    
  };
  return (
    <Grid key={id} item xs={12} sm={6} md={4}>
      <Card variant="outlined">
        <CardMedia image={imageUrl} sx={{ height: "300px" }} />
        <CardContent sx={{ backgroundColor: "#f2f7f3" }}>
          <Typography
            fontFamily={"Oswald"}
            textAlign={"center"}
            variant="h6"
            fontWeight={"bold"}
            gutterBottom
          >
            {title}
          </Typography>
          {salePrice && salePrice !== 0 ? (
            <>
              <Typography
                gutterBottom
                fontFamily={"Oswald"}
                textAlign={"center"}
                variant="h6"
                color={"grey"}
                fontWeight={"bold"}
              >
                <s>R{price}</s> R{salePrice}{" "}
              </Typography>
            </>
          ) : (
            <>
              {" "}
              <Typography
                gutterBottom
                fontFamily={"Oswald"}
                textAlign={"center"}
                variant="h6"
                color={"grey"}
                fontWeight={"bold"}
              >
                R{price}
              </Typography>
            </>
          )}

          <Typography textAlign={"center"}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                border: "1px solid grey",
                color: "white",
                backgroundColor: "black",
                borderRadius:'50px',
                fontWeight:'bold',
                ":hover": {
                  backgroundColor: "grey",
                },
              }}
              onClick={() => handleAddToCart(data)}
            >
              Add to Cart{" "}
              {tick ? (
                <>
                  <MdDoneOutline />
                </>
              ) : (
                <></>
              )}
            </Button>
          </Typography>
        </CardContent>
      </Card>
      <br />
    </Grid>
  );
};
