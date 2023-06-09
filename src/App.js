import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Rating from "./components/Account_info/Rating/Rating";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Account from "components/Account_info/Account/Account";
import LandingPage from "pages/landingPage/landingPage";
import ProductPage from "pages/productPage/productPage";
import SearchResultPage from "pages/searchResultPage/searchResultPage";
import CartPage from "pages/cartPage/cartPage";
import { CookiesProvider } from "react-cookie";
import SellerMenu from "components/seller_menu/sellermenu";
import ShopInfo from "components/shop_info/shopInfo";
import OrderManagement from "components/Account_info/OrderManagement/OrderManagement";
import { Test } from "components/Test";

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Account/:id" element={<Account />} />
            <Route path="/Rating" element={<Rating />} />
            <Route path="/chi-tiet-san-pham/:id" element={<ProductDetail />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/OrderManagement" element={<OrderManagement />} />
            <Route path="/danh-muc/:id" element={<ProductPage />} />
            <Route path="/tim-kiem" element={<SearchResultPage />} />
            <Route path="/seller" element={<SellerMenu />} />
            <Route path="/shop/:id" element={<ShopInfo />} />
            <Route path="/gio-hang" element={<CartPage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </div>
    </CookiesProvider>
  );
}

export default App;
