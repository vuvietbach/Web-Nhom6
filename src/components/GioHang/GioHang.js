import React, { useState, useEffect } from 'react';
import './GioHang.css';

function GioHang(props) {
  const [cartItems, setCartItems] = useState([]);
  const [receiverName, setReceiverName] = useState(props.receiverName || '');
  const [receiverAddress, setReceiverAddress] = useState(
    props.receiverAddress || ''
  );
  const [receiverPhone, setReceiverPhone] = useState(props.receiverPhone || '');
  const [totalPayment, setTotalPayment] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data.products.map((product) => ({ ...product, qty: 0 })));
      });
  }, []);

  const addToCart = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const removeFromCart = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const renderCartItems = () => {
    return cartItems
      .filter((item) => item.qty > 0)
      .map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image_url} alt={item.title} />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p className="category">{item.category}</p>
            <p className="number-sold">{item.number_sold} sold</p>
            <p className="price">{item.price.toFixed(2)}đ</p>
            <p className="rating">Rating: {item.rating}/5</p>
            <button className="remove-button" onClick={() => removeFromCart(item)}>
              -
            </button>
            <span>{item.qty}</span>
            <button className="add-button" onClick={() => addToCart(item)}>
              +
            </button>
          </div>
        </div>
      ));
  };

  const handleReceiverNameChange = (event) => {
    setReceiverName(event.target.value);
  };

  const handleReceiverAddressChange = (event) => {
    setReceiverAddress(event.target.value);
  };

  const handleReceiverPhoneChange = (event) => {
    setReceiverPhone(event.target.value);
  };

  useEffect(() => {
    setSubtotal(cartItems.reduce((acc, item) => acc + item.qty * item.price, 0));
  }, [cartItems]);

  useEffect(() => {
    setTotalPayment(subtotal);
  }, [subtotal]);

  const handleBuyClick = () => {
    props.setReceiverName(receiverName);
    props.setReceiverAddress(receiverAddress);
    props.setReceiverPhone(receiverPhone);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    props.history.push('/thanh-toan');
  };

  return (
    <div className="gio-hang">
      <div className="san-pham-gio-hang">
        <h3>GIỎ HÀNG</h3>
        {cartItems.filter((item) =>item.qty > 0).length > 0 ? (
          renderCartItems()
        ) : (
          <p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
        )}
      </div>
      <div className="thong-tin-nguoi-nhan">
        <h2>Thông tin người nhận</h2>
        <div className="form-field">
          <label htmlFor="receiver-name">Tên người nhận:</label>
          <input
            type="text"
            id="receiver-name"
            value={receiverName}
            onChange={handleReceiverNameChange}
            rules={[{ required: true }, { type: "string" },{message:'hãy nhập thông tin người nhận'}]}
          />
        </div>
        <div className="form-field">
          <label htmlFor="receiver-address">Địa chỉ:</label>
          <input
            type="text"
            id="receiver-address"
            value={receiverAddress}
            onChange={handleReceiverAddressChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="receiver-phone">Số điện thoại:</label>
          <input
            type="text"
            id="receiver-phone"
            value={receiverPhone}
            onChange={handleReceiverPhoneChange}
          />
        </div>
        <div className="thanh-toan">
          <div className="tong-tien">
            <p>Tạm tính:</p>
            <p>{subtotal.toFixed(2)}đ</p>
          </div>
          <div className="tong-tien">
            <p>Tổng tiền:</p>
            <p>{totalPayment.toFixed(2)}đ</p>
          </div>
          <button className="buy-button" onClick={handleBuyClick}>
            Mua hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default GioHang;