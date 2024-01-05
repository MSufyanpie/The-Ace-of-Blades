import { DeleteOutlineRounded } from "@mui/icons-material";
import {
  Button,
  IconButton,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { Image } from "react-bootstrap";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  // deleteFromFirebase,
  
  removeFromCart,
  updateQuantity,
} from "../Redux/Slices/ProductsSlice";
import { number } from "yup";
interface cartProducts {
  salePrice: number;
  title: string;
  price: number;
  imageUrl: string;
  id: any;
  quantity: number;
  // docId:any
}

export const CartProductsDesign = ({
  salePrice,
  title,
  price,
  imageUrl,
  id,
  quantity,
  // docId,
}: cartProducts) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: any) => {
    return state.cart;
  });
  const handleQuantity = (event: any, index: number) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      dispatch(updateQuantity({ index, quantity: newQuantity }));
    }
  };
  const handleAdd = (index: number) => {
    dispatch(
      updateQuantity({ index, quantity: cartProducts[index].quantity + 1 })
    );
  };
  const handleDelete = async() => {
   
    dispatch(removeFromCart(id));
    // console.log('deleting document',docId)
    // try {
    //  await dispatch(deleteFromFirebase(docId))
    //  console.log('document deleted')
    // } catch (error) {
    //   console.log(error)
    // }
    
    
   
    
  };
  const handleMinus = (index: number) => {
    dispatch(
      updateQuantity({ index, quantity: cartProducts[index].quantity - 1 })
    );
  };
  return (
    
    <TableRow key={id}>
      <TableCell>
        <Image height={"50px"} width={"50px"} src={imageUrl}></Image>
      </TableCell>
      <TableCell sx={{ fontWeight: "bold" }}>{title}</TableCell>
      {salePrice ? (
        
          <TableCell>R{salePrice}</TableCell>
       
      ) : (
        
          <TableCell>R{price}</TableCell>
      
      )}
      <TableCell align="center">
        <Button onClick={() => handleMinus(id)} size="small">
          <BiMinus />
        </Button>
        <TextField
          
          value={quantity}
          onChange={(e) => handleQuantity(e, id)}
          sx={{ width: { xs: "60%", md: "22%" } }}
          size="small"
        />
        <Button onClick={() => handleAdd(id)} size="small">
          <BiPlus />
        </Button>
      </TableCell>
      
      {salePrice ? (
        <>
       
          <TableCell>
          {quantity<1?(<><p>Quantity should be atleast 1</p></>):(<> R{quantity * salePrice}
            <IconButton onClick={() => handleDelete()}>
              <DeleteOutlineRounded sx={{ color: "red" }} />
            </IconButton></>)}
           
          </TableCell>
        </>
      ) : (
        <>
          <TableCell>
            R{quantity * price}
            <IconButton onClick={() => handleDelete()}>
              <DeleteOutlineRounded sx={{ color: "red" }} />
            </IconButton>
          </TableCell>
        </>
      )}
    </TableRow>
   
  );
};
