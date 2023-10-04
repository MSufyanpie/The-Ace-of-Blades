import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./TopBar.css";
import Ticker from "react-ticker";

export default function TopBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      className="topBar"
      direction={"row"}
      sx={{ backgroundColor: "black" }}
    >
      <Box width={isMobile ? "100%" : "100%"}>
        <Ticker offset={"run-in"} speed={7} mode="smooth" direction="toRight">
          
          {({ }) => (
            <Typography
              textAlign={"center"}
              flexGrow={1}
              variant="body1"
              color={"white"}
              fontFamily={'Oswald'}
              fontWeight={'bold'}
            >
              FREE DELIVERY FOR ALL ORDERS OVER R1000{" "}
            </Typography>
          )}
        </Ticker>
      </Box>

      <Box>
        <Typography
          display={isMobile ? "none" : "flex"}
          variant="body2"
          color={"white"}
        >
          <Facebook></Facebook>
          <Instagram></Instagram>
          <WhatsApp></WhatsApp>
        </Typography>
      </Box>
    </Stack>
  );
}
