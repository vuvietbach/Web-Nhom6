import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import OrderDetail from "./components/OrderDetail/Order-Detail";
import Account from 'components/Account_info/Account';
import LandingPage from "pages/landingPage/landingPage";
import ProductPage from "pages/productPage/productPage";
import Header from 'components/header/header';
import GioHang from "./components/GioHang/GioHang"
import mock from "myAxios";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/OrderDetail" element={<OrderDetail />} />
          <Route path="/GioHang" element={<GioHang />} />
          <Route path="/danh-muc/:id" element={<ProductPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
