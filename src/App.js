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
<<<<<<< HEAD
import Header from 'components/header/header';
import GioHang from "./components/GioHang/GioHang"

=======
import mock from "myAxios";
>>>>>>> cdd8bfff44cd6082227b9275bb1a7ae9d366a6b9
function App(){
    return(
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/Account" element={<Account/>} />
            <Route path="/OrderDetail" element={<OrderDetail/>} />
<<<<<<< HEAD
            <Route path="/danh-muc" element={<ProductPage/>}/>
            <Route path="/GioHang" element={<GioHang/>}/>
            
=======
            <Route path="/danh-muc/:id" element={<ProductPage/>}/>
>>>>>>> cdd8bfff44cd6082227b9275bb1a7ae9d366a6b9
          </Routes>
        </Router>
      </div>
    );
  }

export default App;
