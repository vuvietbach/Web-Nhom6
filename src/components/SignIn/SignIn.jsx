import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SignIn.css";
import axios from 'axios';

const SignIn = () => {
  const [isValidName, setIsValidName] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [nameInputValue, setNameInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);
  const navigate = useNavigate();

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
      const res = await axios.post('http://localhost:8080/auth/login', {
        username: nameInputValue,
        password: passwordInputValue
      });
      setCookie('accessToken', res.data.accessToken);
      setCookie('refreshToken', res.data.refreshToken);
      // const userData = JSON.parse(localStorage.getItem("user"));
      // console.log(userData.phone_number);
      document.querySelector(".error-message").innerHTML = "";

      sendRefreshToken(); // Gửi refresh token sau khi nhận được token từ API login
      if(res.data.data.role == 'user'){
        localStorage.setItem("user", JSON.stringify(res.data.data.dataUser));
      }
      else {
        localStorage.setItem('user', JSON.stringify(res.data.data.dataSeller));
      }
      toast.success('Đăng nhập thành công!', {
        autoClose: 300, // Thời gian hiển thị toast là 1000ms (1 giây)
      });

      setTimeout(() => {
        navigate(-1);
      }, 1000); // Chuyển hướng trang sau 1 giây (1000ms)
    } catch (error) {
      document.querySelector(".error-message").innerHTML = "Sai tài khoản hoặc mật khẩu";
    }

  };


const sendRefreshToken = () => {

  setTimeout(async () => {
    try {
      const res = await axios.post('http://localhost:8080/auth/refresh-token', null, {
        withCredentials: true // Gửi cookie trong yêu cầu
      });
      setCookie('accessToken', res.data.accessToken);
    } catch (error) {
      console.log(error.response.data);
    }
    sendRefreshToken();
  }, 1000 * 60 * 30);
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
              <div className="sign-in-subtitle">
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
                <a className='link' href="http://" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 85, 170)' }}>Quên mật khẩu</a>
              </div>
              <div className="sign-up">
                Bạn chưa có tài khoản? <Link to="/SignUp">Đăng ký</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
