import { collection,  } from "firebase/firestore";
import {  useState } from "react";
import { Box, Grid } from "@mui/material";
import { db } from "../../Firebase/Firebase";
import ArticleDesign from "../Shared/ArticleDeisgn";
import useArticle from "../Custom Hooks/useArticle";



export default function MyArticles() {
  const [articlesList, setArticlesList] = useState([{}]);
  const ArticlesRef = collection(db, "Articles");
  useArticle(ArticlesRef,setArticlesList)
  return (
    <Box px={10} marginTop={"4%"}>
      <Grid container direction={"row"} spacing={2}>
        {articlesList.map((data:any, index:number) => {
          return (
            <ArticleDesign
              imageUrl={data.imageUrl}
              title={data.title}
              description={data.description}
              id={index}
            />
          );
        })}
      </Grid>
    </Box>
  );
}
