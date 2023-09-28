import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { ChangeEvent } from "react";
interface form {
  register: any;
  setProductTitle: any;
  setProductPrice: any;
  setSalePrice: any;
  errors: any;
  category: any;
  handleCategory: any;
  HandleUpload: any;
  handleSubmit: any;
  OnSubmit: any;
}
export const CollectionFormDesign = ({
  register,
  setProductTitle,
  setProductPrice,
  setSalePrice,
  errors,
  category,
  handleCategory,
  HandleUpload,
  handleSubmit,
  OnSubmit,
}: form) => {
  return (
    <form
      //@ts-ignore
      onSubmit={handleSubmit((data) => {
        OnSubmit(data);
      })}
    >
      <Stack direction={"column"} spacing={3} px={{ xs: 8, md: 10 }}>
        <TextField
          id="title"
          {...register("title")}
          multiline
          onChange={(event) => {
            setProductTitle(event.target.value);
          }}
          label="Enter Product Title"
        />
        <p style={{ color: "red" }}>{errors.title?.message}</p>
        <TextField
          id="price"
          {...register("price")}
          onChange={(event) => {
            setProductPrice(event.target.value);
          }}
          label="Enter Product Price"
        />
        <p style={{ color: "red" }}>{errors.price?.message}</p>
        <TextField
          id="salePrice"
          {...register("salePrice")}
          defaultValue={"0"}
          onChange={(event) => {
            setSalePrice(event.target.value);
          }}
          label="Enter  Sale Price"
        />
        <p style={{ color: "red" }}>{errors.salePrice?.message}</p>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Category</InputLabel>
          <Select
            {...register("category")}
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={category}
            label="Category"
            onChange={handleCategory}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Folding Knives</MenuItem>
            <MenuItem value={2}> Key Rings</MenuItem>
            <MenuItem value={3}> Knife Care Products</MenuItem>
            <MenuItem value={4}>Kitchen and Chef Knives</MenuItem>
          </Select>
          <p style={{ color: "red" }}>{errors.category?.message}</p>
        </FormControl>

        <label htmlFor="">
          <input
            id="image"
            {...register("image")}
            onChange={(event: ChangeEvent) => {
              //@ts-ignore
              setProductImage(event.target.files[0]);
            }}
            type="file"
            accept="image/*"
          />
        </label>
        <p style={{ color: "red" }}>{errors.image?.message}</p>
        <Button
          sx={{
            backgroundColor: "black",
            ":hover": { backgroundColor: "grey" },
          }}
          type="submit"
          variant="contained"
          color="info"
          onClick={HandleUpload}
        >
          Upload to FireBase
        </Button>
        <br />
      </Stack>
    </form>
  );
};
