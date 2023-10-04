import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/ProductsSlice";
interface saleProducts {
  imageUrl: string;
  title: string;
  price: string;
  salePrice: string;
  id: number;
  data: any;
}
export default function Section6Design({
  imageUrl,
  title,
  price,
  salePrice,
  id,
  data,
}: saleProducts) {
  const dispatch = useDispatch();
  const handleAddtoCart = (products: any) => {
    dispatch(addToCart(products));
  };
  return (
    <Grid item xs={12} sm={6} md={4} key={id}>
      <Card variant="outlined">
        <CardMedia
          image={imageUrl}
          component={"img"}
          sx={{ height: "300px" }}
        />
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
                borderRadius: "25px",
                ":hover": {
                  backgroundColor: "#454440",
                },
              }}
            >
              Add to Cart
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
