import React from 'react'
import "./sign-in.css"
import {post} from "./main.js"

function Sign_in() {
  return (
    <div className='body'>
    <div class="container">
        <div class="navbar">
            <div class="shop-icon">
                <i class="fa-sharp fa-solid fa-shop fa-xl"></i> TEAM6-SHOP
            </div>
            <div class="sign-in-title">Đăng nhập</div>
            <a href="" class="help">Bạn cần giúp đỡ?</a>
        </div>

        <div class="main">
            <form action="" class="sign-in-form">
                <div>
                    <div class="sign-in-subtitle">
                        Đăng nhập
                    </div>
                    <input type="text" placeholder="Tên tài khoản" class="input-box name-input"/>
                    <span class="validate-account-name"></span>

                    <input type="password" placeholder="Mật khẩu" class="input-box password-input" />
                    <span class="validate-password"></span>
                    <button class="post-btn" id="post" onClick={post}>ĐĂNG NHẬP</button>
                    <div class="forget-password">
                        <a href="http://" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 85, 170)' }}>Quên mật khẩu</a>
                    </div>
                    <div class="sign-up">
                        Bạn đã có tài khoản? <a href="http://" target="_blank" rel="noopener noreferrer" style={{ opacity: 1 }}>Đăng ký</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default Sign_in