import { useState } from "react";

import { db } from "../../Firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import { BillingFormDesign } from "../../UI/BillingFormDesign";

export default function BillingForm() {
  const [couponBox, setCouponBox] = useState(true);
  const [userName, setUserName] = useState();
  const [Company, setCompany] = useState();
  const [HouseNo, setHouseNo] = useState();
  const [City, setCity] = useState();
  const [Province, setProvince] = useState();
  const [PhoneNo, setPhoneNo] = useState();
  const [Notes, setNotes] = useState();

  const CollectionRef = collection(db, "Orders");
  const Products = useSelector((state: any) => {
    return state.cart;
  });

  const handleCoupon = () => {
    setCouponBox(false);
  };
  const handleUpload = async () => {
    try {
      await addDoc(CollectionRef, {
        UserName_or_Email: userName,
        Company: Company,
        HouseNo: HouseNo,
        City: City,
        Province: Province,
        PhoneNo: PhoneNo,
        Notes: Notes,
        products: Products,
      });
      alert("Order Placed");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <BillingFormDesign
        setUserName={setUserName}
        setCompany={setCompany}
        setHouseNo={setHouseNo}
        setCity={setCity}
        setProvince={setProvince}
        setPhoneNo={setPhoneNo}
        setNotes={setNotes}
        couponBox={couponBox}
        handleCoupon={handleCoupon}
        handleUpload={handleUpload}
      />
    </div>
  );
}
