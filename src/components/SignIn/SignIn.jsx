import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./SignIn.css";
import axios from 'axios';

const SignIn = () => {
  const [isValidName, setIsValidName] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [nameInputValue, setNameInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');

  const checkValidName = (e) => {
    const name = e.target.value;
    setNameInputValue(name);

    if (name === "") {
      document.querySelector(".validate-account-name").innerHTML =
        "Vui lòng nhập tên tài khoản";
      setIsValidName(false);
    } else {
      document.querySelector(".validate-account-name").innerHTML = "";
      setIsValidName(true);
    }
  };

  const checkValidPassword = (e) => {
    const input = e.target.value;
    setPasswordInputValue(input);

    if (input.length < 8 || input.length > 15) {
      document.querySelector(".validate-password").innerHTML =
        "Vui lòng nhập mật khẩu từ 8-15 kí tự";
      setIsValidPassword(false);
    } else {
      document.querySelector(".validate-password").innerHTML = "";
      setIsValidPassword(true);
    }
  };

  const post = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post('http://localhost:8080/auth/login',{
        username:nameInputValue,
        password:passwordInputValue
    });
    localStorage.setItem("user",JSON.stringify(res.data.data));
    // const user=localStorage.getItem("user");
    } catch (error) {
      document.querySelector(".error-message").innerHTML = "Sai tài khoản hoặc mật khẩu";
    }
    
  };

  const isPost = () => {
    const isValid = isValidName && isValidPassword;
    if (!isValid) {
      document.getElementById("post").disabled = true;
      document.getElementById("post").style.cursor = 'no-drop';
    } else {
      document.getElementById("post").disabled = false;
      document.getElementById("post").style.cursor = 'pointer';
    }
  };

  useEffect(() => {
    isPost();
  }, [isValidName, isValidPassword]);

  return (
    <div className='body'>
      <div>
        <div className="Navbar">
          <div className="shop-icon">
            <i className="fa-sharp fa-solid fa-shop fa-xl"></i> TEAM6-SHOP
          </div>
          <div className="sign-in-title">Đăng nhập</div>
          <a href="" className="help">Bạn cần giúp đỡ?</a>
        </div>

        <div className="Main">
          <form action="" className="sign-in-form">
            <div>
              <div className="sign-in-subtitle" >
                Đăng nhập
              </div>
              <input type="text" placeholder="Tên tài khoản" className="input-box name-input" onChange={checkValidName} />
              <span className="validate-account-name error"></span>

              <input type="password" placeholder="Mật khẩu" className="input-box password-input" onChange={checkValidPassword} />
              <span className="validate-password error"></span>

              <button className="post-btn" id="post" onClick={post} style={{}}>
                ĐĂNG NHẬP
              </button>
              <span className="error-message error"></span>
              <div className="forget-password">
                <a href="http://" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 85, 170)' }}>Quên mật khẩu</a>
              </div>
              <div className="sign-up">
                Bạn chưa có tài khoản? <Link to="/SignUp">Đăng ký</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
