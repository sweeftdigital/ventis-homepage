import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Success from "./pages/success/Success";
import Fail from "./pages/fail/Fail";
import MerchantPaymentRedirectionToMobile from "./pages/merchantPayment/MerchantPaymentRedirectionToMobile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
        <Route
          path="/merchant_payment"
          element={<MerchantPaymentRedirectionToMobile />}
        />
      </Routes>
    </div>
  );
}

export default App;
