import { Typography, Box, Stack, useTheme, useMediaQuery } from "@mui/material";
import { AiFillLock } from "react-icons/ai";
import { GiSurferVan } from "react-icons/gi";
import { MdStars } from "react-icons/md";
import "./Section7.css";
export default function Section7() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width={isMobile ? "100%" : "100%"} sx={{ backgroundColor: "black" }}>
      <Typography
        gutterBottom
        textAlign={"center"}
        fontFamily={"Oswald"}
        fontWeight={"bold"}
        variant="h2"
        color={"white"}
      >
        HOW DOES IT WORK
      </Typography>
      <Typography
        textAlign={"center"}
        fontFamily={"Oswald"}
        fontWeight={"bold"}
        variant="h6"
        color={"white"}
      >
        OUR ONLINE EXPERIENCE MADE EASY
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        marginTop={"5%"}
        px={8}
      >
        <Box
          px={isMobile ? "0" : 3}
          width={isMobile ? "100%" : "350px"}
          borderRight={3}
          borderColor={"white"}
        >
          <Typography
            className="icon1"
            variant="h2"
            gutterBottom
            textAlign={"center"}
            color={"white"}
          >
            <MdStars />
          </Typography>

          <Typography
            textAlign={"center"}
            gutterBottom
            fontFamily={"Oswald"}
            fontWeight={"bold"}
            variant="h4"
            color={"white"}
          >
            OUR SELECT RANGE
          </Typography>
          <Typography
            textAlign={"center"}
            fontFamily={"Oswald"}
            variant="h6"
            color={"white"}
          >
            OUR EXCLUSIVE RANGE
          </Typography>
          <br />
          <Typography
            textAlign={"center"}
            gutterBottom
            fontFamily={"Oswald"}
            fontWeight={"bold"}
            variant="h6"
            color={"white"}
          >
            TAKE YOUR PICK OF OUR TOP QUALITY, EVER-GROWING RANGE OF HANDCRAFTED
            DAMASCUS KNIVES.
          </Typography>
        </Box>

        <Box
          px={isMobile ? "0" : 3}
          width={isMobile ? "100%" : "350px"}
          borderRight={3}
          borderColor={"white"}
        >
          <Typography
            variant="h2"
            gutterBottom
            textAlign={"center"}
            color={"white"}
          >
            <AiFillLock />
          </Typography>

          <Typography
            textAlign={"center"}
            gutterBottom
            fontFamily={"Oswald"}
            fontWeight={"bold"}
            variant="h4"
            color={"white"}
          >
            SECURE CHECKOUT
          </Typography>
          <Typography
            textAlign={"center"}
            fontFamily={"Oswald"}
            variant="h6"
            color={"white"}
          >
            SIMPLE AND EASY
          </Typography>
          <br />
          <Typography
            textAlign={"center"}
            gutterBottom
            fontFamily={"Oswald"}
            fontWeight={"bold"}
            variant="h6"
            color={"white"}
          >
            GET YOUR DAMASCUS COLLECTION STARTED NOW! SIMPLY ADD TO CART AND
            PROCEED TO OUR VERIFIED AND SECURE PAYMENT GATEWAYS, PAYFAST/ OZOW.
          </Typography>
        </Box>

        <Box px={isMobile ? "0" : 0} width={isMobile ? "100%" : "350px"}>
          <Typography
            variant="h2"
            gutterBottom
            textAlign={"center"}
            color={"white"}
          >
            <GiSurferVan />
          </Typography>

          <Typography
            textAlign={"center"}
            gutterBottom
            fontFamily={"Oswald"}
            fontWeight={"bold"}
            variant="h4"
            color={"white"}
          >
            SIMPLE DELIVERY
          </Typography>
          <Typography
            textAlign={"center"}
            fontFamily={"Oswald"}
            variant="h6"
            color={"white"}
          >
            NO HASSLE
          </Typography>
          <br />
          <Typography
            textAlign={"center"}
            gutterBottom
            fontFamily={"Oswald"}
            fontWeight={"bold"}
            variant="h6"
            color={"white"}
          >
            WE USE COURIER SERVICES TO ENSURE YOUR PACKAGE IS DELIVERED TO YOUR
            DOOR OR BUSINESS WITH NO HASSLE. THEY SAY GOOD THINGS COME TO THOSE
            WHO WAIT, LUCKILY YOU DON’T HAVE TO.
          </Typography>
        </Box>
      </Stack>
      <br />
    </Box>
  );
}
