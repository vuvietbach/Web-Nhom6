
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import OrderDetail from "./components/OrderDetail/Order-Detail";
import Account from 'components/Account_info/Account';
import Header from 'components/header/header';
function App(){
    return(
      <div className="App">
        <Router>
          <Routes>
            
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/Account" element={<Account/>} />
            <Route path="/OrderDetail" element={<OrderDetail/>} />
            
          </Routes>
        </Router>
      </div>
    );
  }

export default App;