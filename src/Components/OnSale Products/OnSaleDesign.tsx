import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../RTK Store/Slices/ProductsSlice";
interface onSale {
  salePrice: number;
  title: string;
  price: number;
  data: any;
  imageUrl: string;
  id: number;
}
export default function OnSaleDesign({
  salePrice,
  title,
  price,
  data,
  imageUrl,
  id,
}: onSale) {
  const dispatch = useDispatch();
  const handleAddtoCart = (products: any) => {
    dispatch(addToCart(products));
  };
  return (
    <>
      {salePrice ? (
        <>
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
                <Typography
                  gutterBottom
                  fontFamily={"Oswald"}
                  textAlign={"center"}
                  variant="h6"
                  color={"grey"}
                  fontWeight={"bold"}
                >
                  <s>R{price}</s> R{salePrice}
                </Typography>
                <Typography textAlign={"center"}>
                  <Button
                    onClick={() => handleAddtoCart(data)}
                    variant="outlined"
                    sx={{
                      border: "1px solid grey",
                      color: "white",
                      backgroundColor: "black",
                      borderRadius: "20px",
                      ":hover": {
                        backgroundColor: "#2e2e30",
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
