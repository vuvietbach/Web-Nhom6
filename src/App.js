import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import OrderDetail from "./components/OrderDetail/Order-Detail";
import Account from "components/Account_info/Account";
import LandingPage from "pages/landingPage/landingPage";
import ProductPage from "pages/productPage/productPage";
import Header from "components/header/header";
import GioHang from "./components/GioHang/GioHang";
import mock from "myAxios";
import SellerMenu from "components/seller_menu/sellermenu";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/chi-tiet-san-pham" element={<OrderDetail />} />
          <Route path="/GioHang" element={<GioHang />} />
          <Route path="/danh-muc/:id" element={<ProductPage />} />
          <Route path="/seller" element={<SellerMenu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
