import {
  AppBar,  Toolbar,  Stack,  Button,  Typography,  IconButton,   useTheme, useMediaQuery, Badge, } from "@mui/material";
import {ShoppingCart} from '@mui/icons-material'
import { AiOutlineUser } from "react-icons/ai"
import  { useEffect } from "react";
import { Image } from "react-bootstrap";
import TopBar from "./TopBar";
import { useState } from "react";
import SignupPage from "../../Authentication/SignupPage";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../../../Firebase/Firebase";
import { BiPlusCircle } from "react-icons/bi";
import UploaderModal from "./UploaderModal";
import DrawerComponent from "./Drawer";
import { useSelector } from "react-redux";
import { CartMenu } from "./CartMenu";
import NavbarLinks from "./NavbarLinks";
export default function NavBar() {
  const cartProducts=useSelector((state:any)=>{
    return state.cart
})
const[anchorel,setAnchorel]=useState(null)
  const[openModal,setOpenModal]=useState(false);
  const[openUploader,setOpenUploader]=useState(false)
  const Openhandle = () => setOpenModal(true);
  const OpenUploaderModal=()=>setOpenUploader(true)
  const CloseModal = () => setOpenUploader(false);
  const Closehandle = () => setOpenModal(false);
  const [isLoggedIn,SetLoggedIn]=useState(false)
  const theme=useTheme()
  const isMobile=useMediaQuery(theme.breakpoints.down('md'))
  const handleClick=(event:any)=> {
    if (anchorel !== event.currentTarget) {
      setAnchorel(event.currentTarget);
    }
  }
  const handleClose=()=> {
    setAnchorel(null);
  }
  useEffect(()=>{
   const loginState= onAuthStateChanged(auth, (user)=>{
      if(user){
    SetLoggedIn(true)
      }else{
    SetLoggedIn(false)
      }
     })
     return()=> loginState();
  },[])
 const LogOut=async()=>{
  try {
      await signOut(auth)
  } catch (error) {
      console.log(error)
  }
 SetLoggedIn(false)
}
  return (
    <div>
      <AppBar  >
        <TopBar/>
        <Toolbar sx={{ backgroundColor: "white",}}  >
          
          <Typography  >
            <IconButton>
              <Image  src="src\assets\images\logo.jpg"
                height={"90px"}
                width={"120px"} ></Image>
            </IconButton>
          </Typography>
          
        {isMobile?(<><DrawerComponent/></>):(
        <NavbarLinks/>
          )}
          
          <Stack direction={'row'} spacing={2} >
          {isLoggedIn?(<>
          <IconButton onClick={OpenUploaderModal}>
            <BiPlusCircle/>
          </IconButton>
          <Button sx={{fontWeight:'bold',}}  color="error" onClick={LogOut} >Logout</Button>
          </>):
          (
          <IconButton 
          onClick={Openhandle} sx={{color:'black',backgroundColor:'goldenrod'}}>
            <AiOutlineUser ></AiOutlineUser>
          </IconButton>)}
        <IconButton
        aria-owns={anchorel ? "simple-menu" : undefined}
        aria-haspopup="true"
        onMouseOver={handleClick}
        sx={{color:'black',border:'2px solid purple',}}>
        <Badge color='secondary'badgeContent={cartProducts.length}> 
            <ShoppingCart></ShoppingCart>
            </Badge>
          </IconButton>
          </Stack> 
          
        </Toolbar>
      </AppBar><br/> 
        <UploaderModal
        open={openUploader}
        onClose={CloseModal}>
      </UploaderModal>
      <SignupPage open={openModal}
                  close={Closehandle}
      ></SignupPage> 
      <CartMenu
      anchorel={anchorel}
      onClose={handleClose}/> 
    </div>
  );
}
