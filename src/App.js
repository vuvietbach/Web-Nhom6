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
import SearchResultPage from "pages/searchResultPage/searchResultPage";
import GioHang from "./components/GioHang/GioHang";
import { CookiesProvider } from "react-cookie";
import SellerMenu from "components/seller_menu/sellermenu";
import ShopInfo from "components/shop_info/shopInfo";

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/Account" element={<Account/>} />
            <Route path="/chi-tiet-san-pham" element={<OrderDetail/>} />
            <Route path="/GioHang" element={<GioHang/>}/>
            <Route path="/danh-muc/:id" element={<ProductPage/>}/>
            <Route path="/tim-kiem" element={<SearchResultPage/>}/>
            <Route path="/seller" element={<SellerMenu />} />
            <Route path="/shop/:id" element={<ShopInfo />} />
          </Routes>
        </Router>
      </div>
    </CookiesProvider>
  );
}

export default App;
