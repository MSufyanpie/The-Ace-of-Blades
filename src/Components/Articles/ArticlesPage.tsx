import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { db } from "../../Config/Firebase";
import ArticleDesign from "./ArticleDeisgn";

export default function ArticlePage() {
  const [articlesList, setArticlesList] = useState([{}]);
  const ArticlesRef = collection(db, "Articles");
  useEffect(() => {
    const getArticlesList = async () => {
      try {
        let data = await getDocs(ArticlesRef);
        const actualData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(actualData);
        setArticlesList(actualData);
      } catch (error) {
        console.error(error);
      }
    };
    getArticlesList();
  }, []);
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
