import { useState } from "react";
import { db } from "../../Firebase/Firebase";
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { collection } from "firebase/firestore";
import useGallery from "../../Custom Hooks/useGallery";


export default function GalleryImages() {
  const [images, setImages] = useState([{}]);
  const CollectionRef = collection(db, "GalleryImages");
  useGallery(CollectionRef, setImages);
  return (
    <div>
      <Typography
        marginTop={{ xs: "29%", md: "10%" }}
        textAlign={"center"}
        variant="h3"
        gutterBottom
        fontWeight={"bold"}
        fontStyle={"Oswald"}
      >
        GALLERY
      </Typography>
      <Typography textAlign={"center"} variant="body1" fontStyle={"Oswald"}>
        PHOTOS FROM ALL OVER THE WORLD
      </Typography>
      <Grid container direction={"row"} spacing={3} marginTop={"2%"} px={8}>
        {images.map((data, index: number) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  //@ts-ignore
                  image={data.imageUrl}
                  sx={{ height: "350px" }}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <br />
    </div>
  );
}
