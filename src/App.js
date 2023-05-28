import React from 'react';
import Account from './components/Account_info/Account';
import Header from './components/Header/Header';
import GioHang from './components/Giohang/GioHang';


function App() {
  return (
    <div className="App">
      
      <GioHang/>
      <Header/>
      <Account/>
    </div>
  );
}

export default App;