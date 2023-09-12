import React from 'react'

import {  Typography,Card, CardMedia, CardContent, Button, Grid} from "@mui/material";
interface saleProducts{
    imageUrl:string,
    title:string,
    price:string,
    salePrice:string
}
export default function Section6Design({imageUrl,title,price,salePrice}:saleProducts) {
  return (
    <Grid item xs={12} sm={6} md={4}>
    <Card variant="outlined">
      <CardMedia
        image={imageUrl}
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
          <s>{price}</s> {salePrice}
        </Typography>
        <Typography textAlign={"center"}>
          <Button
            variant="outlined"
            sx={{
              border: "1px solid grey",
              color: "white",
              backgroundColor: "black",
            }}
          >
            Add to Cart
          </Button>
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  )
}
