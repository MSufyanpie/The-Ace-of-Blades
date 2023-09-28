import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      width={isMobile ? "100%" : "63.5%"}
      sx={{ backgroundColor: "#171515" }}
      px={isMobile ? 0 : 30}
    >
      <br />
      <br />
      <Stack
        px={isMobile ? 15 : 15}
        spacing={isMobile ? 3 : 5}
        direction={{ xs: "column", md: "row" }}
      >
        <Typography variant="body1" textAlign={"center"}>
          <Link to={"/"} style={{ textDecoration: "none", color: "grey" }}>
            {" "}
            Home
          </Link>
        </Typography>

        <Typography variant="body1" textAlign={"center"}>
          <Link
            to={"/PrivacyPolicy"}
            style={{ textDecoration: "none", color: "grey" }}
          >
            {" "}
            Privacy Policy
          </Link>
        </Typography>

        <Typography variant="body1" textAlign={"center"}>
          <Link
            to={"/ShippingsandReturns"}
            style={{ textDecoration: "none", color: "grey" }}
          >
            {" "}
            Shipping and Returns
          </Link>
        </Typography>

        <Typography gutterBottom variant="body1" textAlign={"center"}>
          <Link to={"/"} style={{ textDecoration: "none", color: "grey" }}>
            {" "}
            Terms and Conditions
          </Link>
        </Typography>
      </Stack>
      <br />

      <Typography variant="body1" textAlign={"center"} color={"grey"}>
        Copyright © 2023 THE ACE OF BLADES
      </Typography>
      <hr />
      <br />

      <Typography textAlign={"center"} variant="body1" color={"grey"}>
        Developed and Maintained by:
        <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
          Biographic Web and Media
        </Link>
      </Typography>
      <br />
      <br />
    </Box>
  );
}
