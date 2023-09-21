import  { useState } from "react";
import { Button, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { Menu } from "@mui/icons-material";


export default function DrawerComponent() {
    const [openDrawer,setOpenDrawer]=useState(false)
  return (
    <div>
    <Drawer
    open={openDrawer}
        onClose={() => setOpenDrawer(false)}
    >
    <List>
    <ListItem>
        <ListItemText>
        <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button sx={{color:'black',fontWeight:'bold'}}>Home</Button></Link>
        </ListItemText>
    </ListItem>

    <ListItem>
        <ListItemText>
        <Link to={"/AOBCollection"} style={{ textDecoration: "none" }}>
              <Button sx={{color:'black',fontWeight:'bold'}}>AOB Collection</Button></Link>
        </ListItemText>
    </ListItem>
    <ListItem>
        <ListItemText>
            
        <Link to={"/OnSale"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >ON SALE</Button></Link>
        </ListItemText>
    </ListItem>
    <ListItem>
        <ListItemText>
            
        <Link to={"/Articles"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >ARTICLES</Button></Link>
        </ListItemText>
    </ListItem>
    <ListItem>
        <ListItemText>
        <Link to={"/Gallery"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >GALLERY</Button></Link>
        </ListItemText>
    </ListItem>
    <ListItem>
        <ListItemText>
        <Link to={"/Cart"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >CART</Button></Link>
        </ListItemText>
    </ListItem>
    <ListItem>
        <ListItemText>
        <Link to={"/Checkout"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >CHECKOUT</Button></Link>
        </ListItemText>
    </ListItem>
    <ListItem>
        <ListItemText>
        <Link to={"/ContactUs"} style={{ textDecoration: "none" }}>
              <Button
              sx={{color:'black',fontWeight:'bold'}}
              >CONTACT US</Button></Link>
        </ListItemText>
    </ListItem>

    </List>

    </Drawer>
    <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu/>
    </IconButton>
    </div>
  )
}
