import { KeyboardArrowDownSharp } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AOBCollectionMenu } from "./AOBCollectionMenu";

export default function NavbarLinks() {
  const [anchorel, setAnchorel] = useState(null);
  const handleClick = (event: any) => {
    if (anchorel !== event.currentTarget) {
      setAnchorel(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorel(null);
  };
  return (
    <div>
      <Stack spacing={2} direction={"row"} >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black", fontWeight: "bold", fontFamily:'Oswald', fontSize:'17px' }}>Home</Button>
        </Link>

        <Link to={"/AOBCollection"} style={{ textDecoration: "none" }}>
          <Button
            sx={{ color: "black", fontWeight: "bold",fontFamily:'Oswald', fontSize:'17px' }}
            aria-owns={anchorel ? "simple-menu" : undefined}
            aria-haspopup="true"
            onMouseOver={handleClick}
          >
            AOB COLLECTION <KeyboardArrowDownSharp />{" "}
          </Button>
        </Link>

        <Link to={"/OnSale"} style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black", fontWeight: "bold",fontFamily:'Oswald', fontSize:'17px' }}>ON SALE</Button>
        </Link>

        <Link to={"/Articles"} style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black", fontWeight: "bold",fontFamily:'Oswald', fontSize:'17px' }}>ARTICLES</Button>
        </Link>

        <Link to={"/Gallery"} style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black", fontWeight: "bold",fontFamily:'Oswald', fontSize:'17px' }}>GALLERY</Button>
        </Link>

        <Link to={"/Cart"} style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black", fontWeight: "bold",fontFamily:'Oswald', fontSize:'17px' }}>CART</Button>
        </Link>

        <Link to={"/Checkout"} style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black", fontWeight: "bold",fontFamily:'Oswald', fontSize:'17px' }}>CHECKOUT</Button>
        </Link>

        <Link to={"/ContactUs"} style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black", fontWeight: "bold",fontFamily:'Oswald', fontSize:'17px' }}>
            CONTACT US
          </Button>
        </Link>
      </Stack>
      <AOBCollectionMenu anchorel={anchorel} onClose={handleClose} />
    </div>
  );
}
