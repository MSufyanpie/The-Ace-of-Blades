import { Box, Card, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { storage, db } from "../../Firebase/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import NavBar from "../Common/Header/NavBar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Footer from "../Common/Footer/Footer";
import { CollectionFormDesign } from "../../UI/CollectionFormDesign";

const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    price: yup.number().positive().integer().required("invalid price"),
    salePrice: yup.number().integer().min(0).max(50000),
    category: yup.string().required(),
    image: yup.mixed().required(),
  })
  .required();

export default function CollectionUploadForm() {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;
  const [productTitle, setProductTitle]: any = useState("");
  const [productPrice, setProductPrice]: any = useState("");
  const [salePrice, setSalePrice] = useState("");
  const CollectionRef = collection(db, "AOB Collection");
  //@ts-ignore
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const handleCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  //@ts-ignore
  const [productImage, setProductImage] = useState(null);

  const HandleUpload = async () => {
    if (productImage == null) return;
    //@ts-ignore
    const imageref = ref(storage, `collectionImages/${productImage.name}`);

    try {
      //@ts-ignore
      const uploadImg = uploadBytes(imageref, productImage);
      await uploadImg;

      const DownloadUrl = await getDownloadURL(imageref);
      setImgUrl(DownloadUrl);

      await addDoc(CollectionRef, {
        title: productTitle,
        price: productPrice,
        salePrice: salePrice,
        imageUrl: DownloadUrl,
        category: category,
      });
      alert("Product Added");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <Box
        width={{ xs: "100%", md: 410 }}
        m={{ xs: "none", md: "auto" }}
        marginTop={{ xs: "28%", md: "8%" }}
        boxShadow={10}
      >
        <Card>
          <Box sx={{ backgroundColor: "black" }}>
            <br />
            <Typography
              color={"white"}
              gutterBottom
              textAlign={"center"}
              variant="h3"
              fontFamily={"Oswald"}
              fontWeight={"bold"}
            >
              UPLOAD PRODUCTS
            </Typography>
            <br />
          </Box>
          <br />
          <CollectionFormDesign
            register={register}
            setProductTitle={setProductTitle}
            setProductPrice={setProductPrice}
            setSalePrice={setSalePrice}
            errors={errors}
            category={category}
            handleCategory={handleCategory}
            HandleUpload={HandleUpload}
            handleSubmit={handleSubmit}
            OnSubmit={onSubmit}
          />
        </Card>
      </Box>
      <br />
      <Footer />
    </div>
  );
}
