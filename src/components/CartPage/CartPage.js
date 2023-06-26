
import React, { useEffect, useState } from "react";
import "./CartPage.css"; 
import axios from "axios";

const CartPage = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [itemId, setItemId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const SERVER_URL = window.env.REACT_APP_SERVER_URL;
  const userData = JSON.parse(localStorage.getItem("user"));
  const fetchUser = async () => {
    try {

      const response = await axios.get(
        `${SERVER_URL}/user/get-user-by-id/${userData.id}`
      );
      const data = response.data.data;
      setUser(data);
    } catch (error) {
      console.error("Error retrieving user:", error);
    }
  };

  const fetchCart = async () => {
    try {

      const response = await axios.get(
        `${SERVER_URL}/cart/get-cart/${userData.id}`
      );
      const data = await response.data.data;
      console.log(data);
      setCart(data || []);
    } catch (error) {
      console.error("Error retrieving cart:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalPrice(totalPrice);
    };
    calculateTotalPrice();
  }, [cart]);

  const addToCart = async (itemId, quantity) => {
    const payload = {
      user_id: user.id,
      item_id: itemId,
      quantity: quantity,
    };
    try {

      const response = await axios.post(`${SERVER_URL}/cart/add-cart`, payload);
      console.log(response);
      if (response.status === 200) {
        fetchCart();
      } else {
        console.error("Error adding to cart:", response.status);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const deleteFromCart = async (itemId) => {
    const payload = {
      user_id: user.id,
      item_id: itemId,
    };

    try {

      const response = await axios.delete(
        `${SERVER_URL}/cart/delete-cart`,
        payload
      );

      if (response.status === 200) {
        fetchCart();
      } else {
        console.error("Error deleting from cart:", response.status);
      }
    } catch (error) {
      console.error("Error deleting from cart:", error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="cart-page">
      <h1>
        <strong>Giỏ Hàng</strong>
      </h1>
      <h2>
        <strong> Giỏ Hàng của {user.name}</strong>
      </h2>

      <h2>
        <strong>Vật phẩm trong giỏ hàng</strong>
      </h2>
      {cart.length === 0 ? (
        <p>Không có sản phẩm nào trong giỏ hàng !</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-info">
                <span className="item-name">{item.item_id}</span>
                <span className="item-quantity">Số lượng: {item.quantity}</span>
                <span className="item-price">Đơn giá: ${item.price}</span>
              </div>
              <button
                onClick={() => deleteFromCart(item.item_id)}
                className="remove-btn"
              >
                Xóa{" "}
              </button>
            </li>
          ))}
        </ul>
      )}

      <h2>
        <strong>Thêm vật phẩm vào giỏ hàng </strong>
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className="add-item-form">
        <input
          type="text"
          placeholder="Item ID"
          className="item-id-input"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="quantity-input"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          onClick={() => addToCart(itemId, quantity)}
          className="add-to-cart-btn"
        >
          Thêm vào giỏ hàng
        </button>
      </form>

      <div className="cart-summary">
        <h2>Thông tin </h2>
        <p>Tổng số vật phẩm: {cart.length}</p>
        <p>Thành tiền: {totalPrice} vnđ</p>
        <button className="purchase-btn">Mua</button>
      </div>
    </div>
  );
};

export default CartPage;
