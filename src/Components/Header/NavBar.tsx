import {
  AppBar,  Toolbar,  Stack,  Button,  Typography,  IconButton,  Menu,MenuItem, useTheme, useMediaQuery, Grid,
} from "@mui/material";
import {ShoppingCart,KeyboardArrowDownSharp} from '@mui/icons-material'
import { AiOutlineUser } from "react-icons/ai"
import React from "react";
import { Image } from "react-bootstrap";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignupPage from "../Signup/SignupPage";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../../Config/Firebase";
import { BiPlusCircle } from "react-icons/bi";
import UploaderModal from "./UploaderModal";
import DrawerComponent from "./Drawer";
export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const[openModal,setOpenModal]=useState(false);
  const[openUploader,setOpenUploader]=useState(false)
  const Openhandle = () => setOpenModal(true);
  // const openUploaderModal=()=>setOpenUploader(true)
  const CloseModal = () => setOpenUploader(false);
  const Closehandle = () => setOpenModal(false);
  const [isLoggedIn,SetLoggedIn]=useState(false)
  const theme=useTheme()
  const isMobile=useMediaQuery(theme.breakpoints.down('md'))
 onAuthStateChanged(auth,async(user)=>{
  if(user){
SetLoggedIn(true)
  }
 })
 const LogOut=async()=>{
  try {
      await signOut(auth)
  } catch (error) {
      console.log(error)
  }
 SetLoggedIn(false)
}
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {openModal?
      (<>
      <SignupPage open={openModal}
                  close={Closehandle}
      ></SignupPage>
      </>):(<></>)}

      {openUploader?(<>
      <UploaderModal open={openUploader}
      close={CloseModal}
      >

      </UploaderModal>
      </>):(<></>)}
      <AppBar >
        <TopBar></TopBar>
        <Toolbar sx={{ backgroundColor: "white" }}>
          
           
          <Typography  sx={{ flexGrow: 1 }}>
            <IconButton>
              <Image
                src="src\assets\images\logo.jpg"
                height={"90px"}
                width={"120px"}
              ></Image>
            </IconButton>
          </Typography>
          

        {isMobile?(<><DrawerComponent/></>):(<>
          
          <Stack spacing={2} direction={"row"} flexGrow={1}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button sx={{color:'black',fontWeight:'bold'}}>Home</Button>
            </Link>

            <Link to={"/AOBCollection"} style={{ textDecoration: "none" }}>
              <Button
                id="collection-btn"
                onClick={handleClick}
                aria-controls={open ? "collection" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{color:'black',fontWeight:'bold'}}
              >
                AOB COLLECTION <KeyboardArrowDownSharp></KeyboardArrowDownSharp>
              </Button>
            </Link>

            <Link to={"/OnSale"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >ON SALE</Button>
            </Link>

            <Link to={"/Articles"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >ARTICLES</Button>
            </Link>

            

            <Link to={"/Gallery"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >GALLERY</Button>
            </Link>

            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >CART</Button>
            </Link>
            <Link to={""} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >CHECKOUT</Button>
            </Link>

            <Link to={"/ContactUs"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >CONTACT US</Button>
            </Link>
          </Stack>
          
          
          <Stack direction={'row'} spacing={1}>

          {isLoggedIn?(<>
          <IconButton onClick={()=>{setOpenUploader(true)}}>
            <BiPlusCircle/>
          </IconButton>
          <Button onClick={LogOut}>Logout</Button>
          
          </>):
          (
          <IconButton 
          onClick={Openhandle}
          sx={{color:'black',backgroundColor:'goldenrod',border:'1px solid goldenrod'}}>
            <AiOutlineUser ></AiOutlineUser>
          </IconButton>)}
          
          
          <IconButton sx={{color:'black',border:'2px solid black',}}>
            <ShoppingCart></ShoppingCart>
          </IconButton>
          </Stack>
         
          <Menu
            id="collection"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
              "aria-labelledby": "collection-btn",
            }}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Folding Knives</MenuItem>
            <MenuItem onClick={handleClose}>Key Rings</MenuItem>
            <MenuItem onClick={handleClose}>Knife Care</MenuItem>
            <MenuItem onClick={handleClose}>Straight Razors</MenuItem>
          </Menu>
         
          
          </> )}
        </Toolbar>
      </AppBar><br/>
    </div>
  );
}
