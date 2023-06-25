// File: RatingComponent.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Rating.css";
import images from "../../assets/assets";

const Rating = ({ itemId }) => {
  const [rating, setRating] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Gọi API để lấy thông tin sản phẩm dựa trên itemId
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/product/get-product/${itemId}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Gọi API để lấy thông tin đánh giá của sản phẩm dựa trên itemId
    const fetchRating = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/rate/get-rate/${itemId}`);
        setRating(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
    fetchRating();
  }, [itemId]);

  const handleCreateRating = async () => {
    // Gọi API để tạo đánh giá cho sản phẩm
    const data = {
      user_id: 123, // Thay đổi thành user_id tương ứng
      item_id: itemId,
      rate: 5, // Thay đổi thành đánh giá tương ứng
      comment: "Great product", // Thay đổi thành bình luận tương ứng
      title: "Excellent" // Thay đổi thành tiêu đề tương ứng
    };

    try {
      await axios.post(`http://localhost:8080/rate/create-rating`, data);
      // Tạo đánh giá thành công, làm các xử lý tương ứng (nếu cần)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div id="cot_menu" className="menu">
                  <div id="avatar" style={{width: '50px', display: 'inline-block', verticalAlign: 'top', backgroundColor: '#F11B1F', height: '50px', borderRadius: '50%', overflow: 'hidden'}}>
                    <img src={images['./bach.jpg']} alt="Avatar" style={{width: '100%', height: '100%', display: 'inline-block'}} />
                  </div>
                  <div id="menu_1" style={{display: 'inline-block', verticalAlign: 'top', border: '#F9EAEA 0px none', height: '50px', marginBottom: '20px', marginLeft: '20px'}}>Tài khoản của <br />
                    <strong>Bách Vũ</strong>
                  </div>
                  <div id="menu_2" style={{ height: '40px', border: '#F9EAEA 0px none'}}>
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
                  <div id="menu_8" style={{backgroundColor: '#E0E0E0',height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./danhgiasanpham.png']} alt="Avatar" />Đánh giá sản phẩm </div>
                  
                </div>
    <div className="rating-component" >
      {!product ? (
        <p className="no-product-message">Chưa có sản phẩm, hãy mua sắm</p>
      ) : (
        <>
          <div className="product-info">
            <img src={product.image_url} alt={product.title} className="product-image" />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p className="category">{product.category}</p>
              <p className="price">Giá: {product.price}</p>
              <p className="number-sold">Đã bán: {product.number_sold}</p>
            </div>
          </div>
          {rating ? (
            <div className="rated-info">
              <h3>Đánh giá sản phẩm:</h3>
              <p className="rate-label">Đánh giá:</p>
              <p className="rate-value">{rating.rate}</p>
              <p className="comment-label">Bình luận:</p>
              <p className="comment">{rating.comment}</p>
              <p className="title-label">Tiêu đề:</p>
              <p className="title">{rating.title}</p>
              <button disabled>Đã đánh giá</button>
            </div>
          ) : (
            <div>
              <button className="create-rating-button" onClick={handleCreateRating}>
                Chờ đánh giá
              </button>
            </div>
          )}
        </>
      )}
    </div>
    </>
  );
};

export default Rating;
