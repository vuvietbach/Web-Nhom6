import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import ProductPage from "pages/productPage/productPage";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import OrderDetail from "./components/OrderDetail/Order-Detail";
import Account from 'components/Account_info/Account';
import LandingPage from "pages/landingPage/landingPage";
import Header from 'components/header/header';

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
            <Route path="/ProductPage" element={<ProductPage/>} />
            <Route path="/danh-muc" element={<ProductPage/>}/>
          </Routes>
        </Router>
      </div>
    );
  }

export default App;
