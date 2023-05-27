import React from 'react';
import './Account.css'
import images from "../assets/assets";
const Account = () => {
    return (
        <>
              
              <div>
                <div id="cot_menu" className="menu">
                  <div id="avatar" style={{width: '50px', display: 'inline-block', verticalAlign: 'top', backgroundColor: '#F11B1F', height: '50px', borderRadius: '50%', overflow: 'hidden'}}>
                    <img src={images['./bach.jpg']} alt="Avatar" style={{width: '100%', height: '100%', display: 'inline-block'}} />
                  </div>
                  <div id="menu_1" style={{display: 'inline-block', verticalAlign: 'top', border: '#F9EAEA 0px none', height: '50px', marginBottom: '20px', marginLeft: '20px'}}>Tài khoản của <br />
                    <strong>Bách Vũ</strong>
                  </div>
                  <div id="menu_2" style={{backgroundColor: '#E0E0E0', height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./thongtintaikhoan.png']} alt="Avatar" />Thông tin tài khoản
                  </div>
                  <div id="menu_3" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./thongbaocuatoi.png']} alt="Avatar" />Thông báo của tôi </div>
                  <div id="menu_4" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./quanlydonhang.png']} alt="Avatar" />Quản lý đơn hàng </div>
                  <div id="menu_5" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./quanlydoitra.png']} alt="Avatar" />Quản lý đổi trả </div>
                  <div id="menu_6" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./sodiachi.png']} alt="Avatar" />Sổ địa chỉ </div>
                  <div id="menu_7" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./thongtinthanhtoan.png']} alt="Avatar" />Thông tin thanh toán </div>
                  <div id="menu_8" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./danhgiasanpham.png']} alt="Avatar" />Đánh giá sản phẩm </div>
                  <div id="menu_9" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./sanphambandaxem.png']} alt="Avatar" />Sản phẩm bạn đã xem </div>
                  <div id="menu_10" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./sanphamyeuthich.png']} alt="Avatar" />Sản phẩm yêu thích </div>
                  <div id="menu_11" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./sanphammuasau.png']} alt="Avatar" />Sản phẩm mua sau </div>
                  <div id="menu_12" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./nhanxetcuatoi.png']} alt="Avatar" />Nhận xét của tôi</div>
                  <div id="menu_13" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./thanhvien.png']} alt="Avatar" />
                    <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                      Thành viên <br /> <i>Bạn đang có 0 Astra</i>
                    </div>
                  </div>
                  <div id="menu_14" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./chiasecoloi.png']} alt="Avatar" />Chia sẻ có lời </div>
                  <div id="menu_15" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./hopdongbaohiem.png']} alt="Avatar" />Hợp đồng bảo hiểm </div>
                  <div id="menu_16" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./muatruoctrasau.png']} alt="Avatar" />Mua trước trả sau </div>
                  <div id="menu_17" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./magiamgia.png']} alt="Avatar" />Mã giảm giá </div>
                  <div id="menu_18" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./astracuaban.png']} alt="Avatar" />
                    <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                      Astra của bạn<br /><i>0 ASA </i> </div>
                  </div>
                  <div id="menu_19" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./quanlytikixu.png']} alt="Avatar" />Quản lý Tiki Xu của tôi </div>
                  <div id="menu_20" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./bookcare.png']} alt="Avatar" />BookCare của tôi </div>
                </div>
                <div className="thongtinchinh" style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <div id="tieude" style={{marginLeft: '50px', marginTop: '110px'}}>Thông tin tài khoản </div><br />
                  <div id="thongtinchinh_1">
                    <div id="thongtin_tk" className="thongtin" style={{marginTop: '0px'}}>
                      <h3 style={{color: '#808080', marginLeft: '20px'}}>Thông tin cá nhân</h3>
                      <div id="avatar_1" style={{marginLeft: '10px', width: '120px', display: 'inline-block', verticalAlign: 'top', backgroundColor: '#F11B1F', height: '120px', borderRadius: '50%', overflow: 'hidden'}}>
                        <img src={images['./bach.jpg']} alt="Avatar" style={{width: '100%', height: '100%', display: 'inline-block'}} />
                      </div>
                      <div style={{display: 'inline-block', verticalAlign: 'top', marginLeft: '40px'}}>
                        <div id="ho_ten" style={{display: 'inline-block', marginTop: '20px', verticalAlign: 'top'}}> Họ và tên
                          <form style={{display: 'inline-block', marginLeft: '50px'}}>
                            <input type="text" placeholder="Nhập họ và tên" />
                          </form>
                        </div><br />
                        <div id="nickname" style={{marginTop: '20px'}}>Nickname
                          <form style={{display: 'inline-block', marginLeft: '50px'}}>
                            <input type="text" placeholder="Thêm nickname" />	
                          </form>
                        </div>
                      </div>
                      <br />
                      <div id="ngay_sinh" style={{marginTop: '50px', marginLeft: '20px'}}>Ngày sinh
                        <select name="day" id="day" style={{marginLeft: '50px'}}>
                          <option value>Ngày</option>
                        </select>
                        <select name="thang" id="thang" style={{marginLeft: '20px'}}>
                          <option value>Tháng</option>
                        </select>
                        <select name="nam" id="nam" style={{marginLeft: '20px'}}>
                          <option value>Năm</option> 
                        </select>
                      </div><br />
                      <div id="gioi_tinh" style={{marginTop: '20px', marginLeft: '20px'}}>Giới tính
                        <input type="radio" defaultValue="Nam" style={{marginLeft: '50px'}} />Nam
                        <input type="radio" defaultValue="Nam" style={{marginLeft: '20px'}} />Nữ
                        <input type="radio" defaultValue="Nam" style={{marginLeft: '20px'}} />Khác
                      </div><br />
                      <div id="quoc_tich" style={{marginTop: '20px', marginLeft: '20px'}}>Quốc tịch
                        <select style={{marginLeft: '50px'}}>
                          <option value>Chọn quốc tịch</option>
                        </select>
                      </div><br />
                      <div id="luuthaydoi" style={{marginTop: '20px'}}>Lưu thay đổi</div>
                    </div>
                    <div id="thongtinkhac" className="tkkhac" style={{marginTop: '0px'}}>
                      <h3 style={{color: '#808080', marginLeft: '30px'}}>Số điện thoại và email</h3>
                      <div id="sodienthoai">
                        <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./sodienthoai.png']} alt="Avatar" />Số điện thoại
                        <form style={{display: 'inline-block'}} id="sdt">
                          <input type="text" placeholder="Cập nhật" />
                        </form>
                      </div><br />
                      <div id="email"><img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./email.png']} alt="Avatar" />
                        Địa chỉ email
                        <form style={{display: 'inline-block'}} id="mail">
                          <input type="text" placeholder="Cập nhật" />
                        </form>
                      </div><br />
                      <h3 style={{color: '#808080', marginLeft: '30px'}}>Bảo mật</h3>
                      <div id="doimatkhau"><img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./doimatkhau.png']} alt="Avatar" />
                        Đổi mật khẩu
                        <form style={{display: 'inline-block'}} id="doimk">
                          <input type="text" placeholder="Cập nhật" />
                        </form>
                      </div><br />
                      <div id="mapin"><img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./mapin.png']} alt="Avatar" />
                        Thiết lập mã PIN
                        <form style={{display: 'inline-block'}} id="maP">
                          <input type="text" placeholder="Thiết lập" />
                        </form>
                      </div><br />
                      <h3 style={{color: '#808080', marginLeft: '30px'}}>Liên kết mạng xã hội</h3>
                      <div id="facebook">
                        <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./facebook.png']} alt="Avatar" />Facebook
                        <form style={{display: 'inline-block'}} id="face">
                          <input type="text" placeholder="Liên kết" />
                        </form>
                      </div><br />
                      <div id="Google">
                        <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./google.png']} alt="Avatar" />Google
                        <form style={{display: 'inline-block'}} id="goog">
                          <input type="text" placeholder="Liên kết" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
  

            </>
        )
    
}

export default Account;