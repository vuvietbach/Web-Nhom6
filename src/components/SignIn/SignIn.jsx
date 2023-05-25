import React, { Component } from 'react'
import "./SignIn.css"
import {post, isValidName, isValidPassword,isPost, isValid} from "./main.js"
import { Link } from 'react-router-dom';

class SignIn extends Component {
    componentDidMount() {
        isPost();
      }
    componentDidUpdate() {
        isPost();
    }
    render () {
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
                        <input type="text" placeholder="Tên tài khoản" className="input-box name-input" onChange={() => {
                        isValidName();
                        isPost();
                    }}/>
                        <span className="validate-account-name"></span>

                        <input type="password" placeholder="Mật khẩu" className="input-box password-input" onChange={() => {
                        isValidPassword();
                        isPost();
                    }}/>
                        <span className="validate-password"></span>
                        
                        <button className="post-btn" id="post" onClick={post} style={{
                            
                        }}>ĐĂNG NHẬP</button>
                        <div className="forget-password">
                            <a href="http://" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 85, 170)' }}>Quên mật khẩu</a>
                        </div>
                        <div className="sign-up">
                            Bạn chưa có tài khoản? <a href="http://" target="_blank" rel="noopener noreferrer" style={{ opacity: 1 }}><Link to="/SignUp">Đăng ký</Link></a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )}
}

export default SignIn