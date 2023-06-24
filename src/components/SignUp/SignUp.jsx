import React, { useState, useEffect } from 'react';
import { Link, Navigate,useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SignUp.css"
import axios from 'axios';

const SignUp = () => {
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [phoneNumberInputValue, setPhoneNumberInputValue] = useState('');
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [confirmPasswordInputValue, setConfirmPasswordInputValue] = useState('');
  const [nameInputValue, setNameInputValue] = useState('');
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const location = useLocation();

  const checkValidPhoneNumber = (e) => {
    const input = e.target.value;
    const len = input.length;
    setPhoneNumberInputValue(input);

    if (len !== 10) {
      document.querySelector(".validate-phone-number").innerHTML = "Số điện thoại phải gồm 10 chữ số";
      setIsValidPhoneNumber(false);
    } else {
      document.querySelector(".validate-phone-number").innerHTML = "";
      setIsValidPhoneNumber(true);
    }
  };

  const checkValidUsername = (e) => {
    const username = e.target.value;
    setUsernameInputValue(username);

    if (username === "") {
      document.querySelector(".validate-account-name").innerHTML = "Vui lòng nhập tên tài khoản";
      setIsValidUsername(false);
    } else {
      document.querySelector(".validate-account-name").innerHTML = "";
      setIsValidUsername(true);
    }
  };

  const checkValidName = (e) => {
    const name = e.target.value;
    setNameInputValue(name);

    if (name === "") {
      document.querySelector(".validate-name").innerHTML = "Vui lòng nhập tên người dùng";
      setIsValidName(false);
    } else {
      document.querySelector(".validate-name").innerHTML = "";
      setIsValidName(true);
    }
  };

  const checkValidPassword = (e) => {
    const input = e.target.value;
    setPasswordInputValue(input);

    if (input.length < 8 || input.length > 15) {
      document.querySelector(".validate-password").innerHTML = "Vui lòng nhập mật khẩu từ 8-15 kí tự";
      setIsValidPassword(false);
    } else {
      document.querySelector(".validate-password").innerHTML = "";
      setIsValidPassword(true);
    }
  };

  const checkValidConfirmPassword = (e) => {
    const input = e.target.value;
    setConfirmPasswordInputValue(input);
  
    if (input.length < 8 || input.length > 15) {
      document.querySelector(".validate-confirm-password").innerHTML = "Vui lòng nhập mật khẩu từ 8-15 kí tự";
      setIsValidConfirmPassword(false);
    } else if (input !== passwordInputValue) {
      document.querySelector(".validate-confirm-password").innerHTML = "Vui lòng nhập đúng mật khẩu";
      setIsValidConfirmPassword(false);
    } else {
      document.querySelector(".validate-confirm-password").innerHTML = "";
      setIsValidConfirmPassword(true);
    }
  };
  
  const post = (e) => {
    e.preventDefault();
    if (!isValidName || !isValidPassword || !isValidConfirmPassword || !isValidPhoneNumber) {
      // Xử lý khi dữ liệu không hợp lệ
    } else {
      const data = {
        username: usernameInputValue,
        password: passwordInputValue,
        name: nameInputValue,
        phone_number: phoneNumberInputValue
      };
      const url = role === "user" ? `${window.env.REACT_APP_SERVER_URL}/user/create-user` : `${window.env.REACT_APP_SERVER_URL}/seller/create-seller`;
  
      axios.post(url, data)
        .then(response => {
          console.log(response.data);
          document.querySelector(".error-message").innerHTML = "";
          toast.success('Tạo tài khoản thành công!', {
            autoClose: 300, // Thời gian hiển thị toast là 1000ms (1 giây)
          });
    
          setTimeout(() => {
            navigate("/SignIn",{state: { previousPath: location.pathname }  });
          }, 1000); // Chuyển hướng trang sau 1 giây (1000ms)
          // localStorage.setItem("user",JSON.stringify(response.data.data));
        })
        .catch(error => {
          if (error.response && error.response.data && error.response.data.message) {
            const errorMessage = error.response.data.message;
            console.log(errorMessage);
            console.log(error.response.data?.status);
            document.querySelector(".error-message").innerHTML = errorMessage;
          } else {
            document.querySelector(".error-message").innerHTML = "Tài khoản này đã tồn tại";
          }
        });
    }
  };
  
  

  const isPost = () => {
    const isValid = isValidUsername && isValidPassword && isValidConfirmPassword && isValidPhoneNumber && isValidName;
    setIsValid(isValid);

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
  }, [isValidPhoneNumber, isValidUsername, isValidPassword, isValidConfirmPassword, isValidName]);

  const selectRole = (e) => {
    setRole(e.target.value);
    console.log(role);
  }

  return (
    <div className='body'>
      <div>
        <div className="Navbar">
          <div className="shop-icon">
            <i className="fa-sharp fa-solid fa-shop fa-xl"></i> TEAM6-SHOP
          </div>
          <div className="sign-up-title">Đăng ký</div>
          <a href="" className="help">Bạn cần giúp đỡ?</a>
        </div>

        <div className="main">
          <form action="" className="sign-up-form">
            <div>
              <div className="sign-up-subtitle">
                Đăng ký
              </div>

              <input type="number" placeholder="Số điện thoại" className="input-box phone-number-input" onChange={checkValidPhoneNumber} />
              <span className="validate-phone-number error"></span>

              <input type="text" placeholder="Tên người dùng" className="input-box name-input" onChange={checkValidName} />
              <span className="validate-name error"></span>

              <input type="text" placeholder="Tên tài khoản" className="input-box username-input" onChange={checkValidUsername} />
              <span className="validate-account-name error"></span>

              <input type="password" placeholder="Mật khẩu" className="input-box password-input" onChange={checkValidPassword} />
              <span className="validate-password error"></span>

              <input type="password" placeholder="Xác nhận mật khẩu" className="input-box confirm-password" onChange={checkValidConfirmPassword} />
              <span className="validate-confirm-password error"></span>

              <select id="role" onChange={selectRole}>
                <option value="user">User</option>
                <option value="seller">Seller</option>
              </select>

              <button className="post-btn" id="post" onClick={post}>TIẾP THEO</button>
              <span className="error-message error"></span>
              <div className="rules">
                Bằng việc đăng kí, bạn đã đồng ý về <a className='link' href="http://" target="_blank" rel="noopener noreferrer">Điều khoản dịch vụ </a>
                & <a className='link' href="http://" target="_blank" rel="noopener noreferrer">Chính sách bảo mật</a>
              </div>
              <div className="sign-in">
                Bạn đã có tài khoản? <Link to="/SignIn">Đăng nhập</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
