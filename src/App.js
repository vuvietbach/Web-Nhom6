import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import OrderDetail from "./components/OrderDetail/Order-Detail";
import LandingPage from "pages/landingPage/landingPage";
import ProductPage from "pages/productPage/productPage";
import SearchResultPage from "pages/searchResultPage/searchResultPage";
function App(){
    return(
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/OrderDetail" element={<OrderDetail/>} />
            <Route path="/danh-muc/:id" element={<ProductPage/>}/>
            <Route path="/ket-qua-tim-kiem" element={<SearchResultPage/>}/>
          </Routes>
        </Router>
      </div>
    );
  }

export default App;
