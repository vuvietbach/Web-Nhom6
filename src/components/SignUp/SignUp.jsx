import React, { Component } from 'react'
import './SignUp.css' 
import {post, isValidName, isValidPassword, isValidPhoneNumber, isValidConfirmPassword,isPost,isValid} from "./main.js"
import { Link } from 'react-router-dom';

class SignUp extends Component {
    componentDidMount() {
        isPost();
      }
    componentDidUpdate() {
        isPost();
    }
  render() {
    return (
        <div className='body'>
            <div className="container">
                <div className="navbar">
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
    
                            <input type="number" placeholder="Số điện thoại" className="input-box phone-number-input" onChange={() => {
                                isValidPhoneNumber();
                                isPost();
                            }}/>
                            <span className="validate-phone-number"></span>
    
                            <input type="text" placeholder="Tên tài khoản" className="input-box name-input" onChange={() => {
                                isValidName();
                                isPost();
                            }}/>
                            <span className="validate-account-name"></span>
    
                            <input type="password" placeholder="Mật khẩu" className="input-box password-input" onChange={() => {
                                isValidPassword();
                                isPost();
                            }} />
                            <span className="validate-password"></span>
    
                            <input type="password" placeholder="Xác nhận mật khẩu" className="input-box confirm-password" onChange={() => {
                                isValidConfirmPassword();
                                isPost();
                            }}/>
                            <span className="validate-confirm-password"></span>
    
                            <button className="post-btn" id="post" onClick={post}>TIẾP THEO</button>
                            <div className="rules">
                                Bằng việc đăng kí, bạn đã đồng ý với Shopee về <a href="http://" target="_blank" rel="noopener noreferrer">Điều khoản dịch vụ</a>
                                & <a href="http://" target="_blank" rel="noopener noreferrer">Chính sách bảo mật</a>                
                            </div>
                            <div className="sign-in">
                                Bạn đã có tài khoản? <a href="http://" target="_blank" rel="noopener noreferrer" style={{ opacity: 1 }}><Link to="/SignIn">Đăng nhập</Link></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      );
  }
}

export default SignUp