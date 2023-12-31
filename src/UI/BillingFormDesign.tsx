import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Lock, Star } from "@mui/icons-material";
import Payment from "../Components/Checkout/Payment";
import { BiLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
interface BillingForm {
  setUserName: any;
  setCompany: any;
  setHouseNo: any;
  setCity: any;
  setProvince: any;
  setPhoneNo: any;
  setNotes: any;
  couponBox: any;
  handleCoupon: any;
  handleUpload: any;
}
export const BillingFormDesign = ({
  setUserName,
  setCompany,
  setHouseNo,
  setCity,
  setProvince,
  setPhoneNo,
  setNotes,
  couponBox,
  handleCoupon,
  handleUpload,
}: BillingForm) => {
  return (
    <div>
      <form>
        <Box
          marginTop={"7%"}
          width={{ xs: "100%", md: 700 }}
          px={{ xs: 0, md: 4 }}
        >
          <Stack direction={"column"} spacing={2}>
            <FormLabel
              sx={{ fontSize: "27px", fontWeight: "bold", color: "black" }}
            >
              Customer Information
            </FormLabel>
            <TextField
              onChange={(e: any) => {
                setUserName(e.target.value);
              }}
              required
              placeholder="Username or Email Address"
            />
          </Stack>
          <br />

          <Stack spacing={2}>
            <FormLabel
              sx={{ fontSize: "27px", fontWeight: "bold", color: "black" }}
            >
              Billing Details
            </FormLabel>

            <Stack direction={"row"} spacing={2}>
              <TextField fullWidth required placeholder="First name" />
              <TextField fullWidth required placeholder="Last name" />
            </Stack>

            <TextField
              onChange={(e: any) => {
                setCompany(e.target.value);
              }}
              required
              placeholder="Company name"
            />

            <Stack>
              <Typography variant="body2">
                Country/Region
                <Star sx={{ fontSize: "13px" }} />
              </Typography>
              <Typography variant="body1" fontWeight={"bold"}>
                Pakistan
              </Typography>
            </Stack>
          </Stack>
          <br />
          <Stack direction={"row"} spacing={2}>
            <TextField
              onChange={(e: any) => {
                setHouseNo(e.target.value);
              }}
              multiline
              fullWidth
              required
              placeholder="House number and street name"
            />
            <TextField
              multiline
              fullWidth
              required
              placeholder="Apartment, suite,unit,etc. (Optional)"
            />
          </Stack>
          <br />

          <Stack direction={"row"} spacing={2}>
            <TextField
              onChange={(e: any) => {
                setCity(e.target.value);
              }}
              fullWidth
              required
              placeholder="Town/City"
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Province</InputLabel>
              <Select
                onChange={(e: any) => {
                  setProvince(e.target.value);
                }}
                id="demo-simple-select"
                labelId="demo-simple-select-label"
                label="Province"
              >
                <MenuItem value={10}>Punjab</MenuItem>
                <MenuItem value={20}>Sindh</MenuItem>
                <MenuItem value={30}>Balochistan</MenuItem>
                <MenuItem value={30}>KPK</MenuItem>
              </Select>
            </FormControl>
            <TextField fullWidth required placeholder="Postcode/ZIP" />
          </Stack>
          <br />
          <TextField
            onChange={(e: any) => {
              setPhoneNo(e.target.value);
            }}
            fullWidth
            required
            placeholder="Phone"
          />
          <br />
          <Stack direction={"row"} marginTop={"2%"}>
            <Checkbox></Checkbox>
            <FormLabel
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
                marginTop: "1%",
              }}
            >
              Ship to a Different Address?
            </FormLabel>
          </Stack>
          <br />
          <TextField
            onChange={(e: any) => {
              setNotes(e.target.value);
            }}
            multiline
            size="medium"
            fullWidth
            placeholder="notes about your order,e.g,special notes for delivery"
          />

          {couponBox ? (
            <>
              <Typography marginTop={"1%"}>
                <Button
                  onClick={handleCoupon}
                  color="error"
                  sx={{ fontWeight: "bold" }}
                  variant="text"
                >
                  Have a Coupon?
                </Button>
              </Typography>
            </>
          ) : (
            <Stack direction={"row"} spacing={1} marginTop={"1%"}>
              <TextField
                fullWidth
                size="medium"
                multiline
                placeholder="Coupon Code"
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  fontWeight: "bold",
                  width: 350,
                  ":hover": { backgroundColor: "grey" },
                }}
              >
                Apply
              </Button>
            </Stack>
          )}
          <Payment />

          <Button
            onClick={handleUpload}
            fullWidth
            size="large"
            sx={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#2e2e30",
              },
            }}
          >
            <Lock sx={{ color: "white" }} />
            Place Order
          </Button>
          <Typography marginTop={"2%"} textAlign={"center"}>
            <BiLeftArrow />
            <Link
              to={"/Cart"}
              style={{
                textDecoration: "none",
                fontWeight: "bolder",
                color: "black",
              }}
            >
              Back to Cart
            </Link>
          </Typography>
          <br />
        </Box>
      </form>
    </div>
  );
};
