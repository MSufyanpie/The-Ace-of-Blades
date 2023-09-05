import {
  AppBar,  Toolbar,  Stack,  Button,  Typography,  IconButton,  Menu,MenuItem,
} from "@mui/material";
import {ShoppingCart,KeyboardArrowDownSharp} from '@mui/icons-material'
import { AiOutlineUser } from "react-icons/ai"
import React from "react";
import { Image } from "react-bootstrap";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar>
        <TopBar></TopBar>
        <Toolbar sx={{ backgroundColor: "white" }}>
          <Typography sx={{ flexGrow: 1 }}>
            <IconButton>
              <Image
                src="src\assets\images\logo.jpg"
                height={"90px"}
                width={"120px"}
              ></Image>
            </IconButton>
          </Typography>

          <Stack spacing={2} direction={"row"} flexGrow={1}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button sx={{color:'black',fontWeight:'bold'}}>Home</Button>
            </Link>

            <Link to={"/"} style={{ textDecoration: "none" }}>
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

            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >ON SALE</Button>
            </Link>

            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >ARTICLES</Button>
            </Link>

            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >Projects</Button>
            </Link>

            <Link to={"/"} style={{ textDecoration: "none" }}>
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

            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >CONTACT US</Button>
            </Link>
          </Stack>
          <Stack direction={'row'} spacing={1}>
          <IconButton sx={{color:'white',backgroundColor:'goldenrod'}}>
            <AiOutlineUser ></AiOutlineUser>
          </IconButton>
          <IconButton sx={{color:'black',border:'1px solid black',}}>
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
        </Toolbar>
      </AppBar><br/>
    </div>
  );
}
