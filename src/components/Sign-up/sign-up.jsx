import React from 'react'
import './sign-up.css' 
import {post} from "./main.js"

function Sign_up() {
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

                        <input type="number" placeholder="Số điện thoại" className="input-box phone-number-input"/>
                        <span className="validate-phone-number"></span>

                        <input type="text" placeholder="Tên tài khoản" className="input-box name-input"/>
                        <span className="validate-account-name"></span>

                        <input type="password" placeholder="Mật khẩu" className="input-box password-input" />
                        <span className="validate-password"></span>

                        <input type="password" placeholder="Xác nhận mật khẩu" className="input-box confirm-password"/>
                        <span className="validate-confirm-password"></span>

                        <button className="post-btn" id="post" onClick={post}>TIẾP THEO</button>
                        <div className="rules">
                            Bằng việc đăng kí, bạn đã đồng ý với Shopee về <a href="http://" target="_blank" rel="noopener noreferrer">Điều khoản dịch vụ</a>
                            & <a href="http://" target="_blank" rel="noopener noreferrer">Chính sách bảo mật</a>                
                        </div>
                        <div className="sign-in">
                            Bạn đã có tài khoản? <a href="http://" target="_blank" rel="noopener noreferrer" style={{ opacity: 1 }}>Đăng nhập</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Sign_up