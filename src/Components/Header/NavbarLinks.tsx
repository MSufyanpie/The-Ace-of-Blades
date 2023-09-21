import { KeyboardArrowDownSharp } from '@mui/icons-material'
import { Button, Stack } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AOBCollectionMenu } from './AOBCollectionMenu'

export default function NavbarLinks() {
    const[anchorel,setAnchorel]=useState(null)
    const handleClick=(event:any)=> {
        if (anchorel !== event.currentTarget) {
          setAnchorel(event.currentTarget);
        }
      }
    
      const handleClose=()=> {
        setAnchorel(null);
      }
  return (
    <div>
        <Stack spacing={2} direction={"row"} flexGrow={1}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button sx={{color:'black',fontWeight:'bold'}}>Home</Button>
            </Link>

            <Link to={"/AOBCollection"} style={{ textDecoration: "none" }}>
              <Button sx={{color:'black',fontWeight:'bold'}} 
               aria-owns={anchorel ? "simple-menu" : undefined}
               aria-haspopup="true"
               onMouseOver={handleClick}
              >
                AOB COLLECTION <KeyboardArrowDownSharp/> </Button>
            </Link>

            <Link to={"/OnSale"} style={{ textDecoration: "none" }}>
              <Button sx={{color:'black',fontWeight:'bold'}}>ON SALE</Button>
            </Link>

            <Link to={"/Articles"} style={{ textDecoration: "none" }}>
              <Button sx={{color:'black',fontWeight:'bold'}}>ARTICLES</Button> 
            </Link>

            <Link to={"/Gallery"} style={{ textDecoration: "none" }}>
              <Button sx={{color:'black',fontWeight:'bold'}}>GALLERY</Button>
            </Link>

            <Link to={"/Cart"} style={{ textDecoration: "none" }}>
              <Button sx={{color:'black',fontWeight:'bold'}}>CART</Button>
            </Link>

            <Link to={"/Checkout"} style={{ textDecoration: "none" }}>
              <Button  sx={{color:'black',fontWeight:'bold'}}>CHECKOUT</Button>
            </Link> 

            <Link to={"/ContactUs"} style={{ textDecoration: "none" }}>
              <Button  sx={{color:'black',fontWeight:'bold'}}>CONTACT US</Button>
            </Link>
          </Stack>
          <AOBCollectionMenu
      anchorel={anchorel}
      onClose={handleClose}

      />
    </div>
  )
}
