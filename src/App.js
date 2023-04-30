import TestComponent from "./components/test";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Sign_up from "./components/Sign-up/sign-up";
import Sign_in from "./components/Sign-in/sign-in"
function App(){
    return(
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<TestComponent/>}/>
            <Route path="/Sign-up" element={<Sign_up/>} />
            <Route path="/Sign-in" element={<Sign_in/>} />
          </Routes>
        </Router>
      </div>
    );
  }

export default App;