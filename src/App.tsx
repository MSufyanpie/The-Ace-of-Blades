import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Components/Authentication/Authentication";
import CollectionUploadForm from "./Components/Forms/CollectionUploadForm";
import ArticleUploadForm from "./Components/Forms/UploadForm";
import ImageUploader from "./Components/Forms/ImageUploader";
import { PrivacyPolicy } from "./Components/Common/Footer/FooterLinks/Privacy Policy/PrivacyPolicy";
import ShippingandReturns from "./Pages/Shipping&Returns/ShippingandReturns";
import { HomePage } from "./Pages/Home/HomePage";
import { CollectionPage } from "./Pages/Collection/CollectionPage";
import { SalePage } from "./Pages/Sale/SalePage";
import { ArticlesPage } from "./Pages/Articles/ArticlesPage";
import { Category1Page } from "./Pages/Categories/Category1Page";
import { Category2Page } from "./Pages/Categories/Category2Page";
import { Category3Page } from "./Pages/Categories/Category3Page";
import { Category4Page } from "./Pages/Categories/Category4Page";
import { CheckoutPage } from "./Pages/Checkout/CheckoutPage";
import { GalleryPage } from "./Pages/Gallery/GalleryPage";
import Contact from "./Containers/Contact";
import { CartPage } from "./Pages/Cart/CartPage";
import { KnifeCarePage } from "./Pages/KnifeCare/KnifeCarePage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    //@ts-ignore
    (function (d, m) {
      var kommunicateSettings = {
        appId: "b6cc99758e804e143be1107aa25f99af",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      //@ts-ignore
      window.kommunicate = m;
      m._globals = kommunicateSettings;
      //@ts-ignore
    })(document, window.kommunicate || {});
  }, []);

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/AOBCollection" element={<CollectionPage />}></Route>
            <Route path="/SignUp" element={<Authentication />}></Route>
            <Route
              path="/upload-Products"
              element={<CollectionUploadForm />}
            ></Route>
            <Route
              path="/upload-articles"
              element={<ArticleUploadForm />}
            ></Route>
            <Route path="/Articles" element={<ArticlesPage />}></Route>
            <Route path="/OnSale" element={<SalePage />}></Route>
            <Route path="/FoldingKnives" element={<Category1Page />}></Route>
            <Route path="/KeyRings" element={<Category2Page />}></Route>
            <Route path="/KnifeCareProducts" element={<Category3Page />} />
            <Route path="/KitchenandChefKnives" element={<Category4Page />} />
            <Route path="/Gallery" element={<GalleryPage />} />
            <Route path="/ImageUploader" element={<ImageUploader />} />
            <Route path="/ContactUs" element={<Contact />} />
            <Route path="/Cart" element={<CartPage />} />
            <Route path="/Checkout" element={<CheckoutPage />}></Route>
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route
              path="/ShippingsandReturns"
              element={<ShippingandReturns />}
            />
            <Route path="/KnifeCare" element={<KnifeCarePage />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
