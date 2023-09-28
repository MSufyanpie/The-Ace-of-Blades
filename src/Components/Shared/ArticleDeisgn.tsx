import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
interface articles {
  imageUrl: string;
  title: string;
  description: string;
  id: number;
}
export default function ArticleDesign({
  id,
  imageUrl,
  title,
  description,
}: articles) {
  return (
    <Grid key={id} item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia image={imageUrl} sx={{ height: "300px" }} />
        <CardContent>
          <Typography
            fontFamily={"Oswald"}
            variant="h6"
            gutterBottom
            fontWeight={"bold"}
          >
            {title}
          </Typography>
          <Typography fontFamily={"Oswald"} gutterBottom variant="body1">
            {description}
          </Typography>
        </CardContent>
      </Card>
      <br />
    </Grid>
  );
}
