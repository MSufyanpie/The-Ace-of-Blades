import { collection } from "firebase/firestore";
import { useState } from "react";
import { Box, Grid } from "@mui/material";

import { db } from "../../../Firebase/Firebase";
import ArticleDesign from "../../Shared/ArticleDeisgn";
import useArticle from "../../../Custom Hooks/useArticle";

export default function RelatedPosts() {
  const [articlesList, setArticlesList] = useState([{}]);
  const ArticlesRef = collection(db, "Articles");
  useArticle(ArticlesRef, setArticlesList);
  const slicedList: any = articlesList.slice(0, 2);
  return (
    <Box marginTop={"4%"}>
      <Grid container direction={"row"} spacing={2}>
        {slicedList.map((data: any, index: number) => {
          return (
            //@ts-ignore
            <ArticleDesign
              imageUrl={data.imageUrl}
              title={data.title}
              description={data.description}
              id={index}
            ></ArticleDesign>
          );
        })}
      </Grid>
    </Box>
  );
}
