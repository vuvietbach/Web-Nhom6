import TestComponent from "./components/test";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import OrderDetail from "./components/OrderDetail/Order-Detail";
import ProductPage from "pages/productPage/productPage";
import LandingPage from "pages/landingPage/landingPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/OrderDetail" element={<OrderDetail />} />
          <Route path="/:product-category" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
