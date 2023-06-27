import { MainLayout } from "components/layoutTemplate/layoutTemplate";
import "./cartPage.css";
import { useState } from "react";
import DeleteCartModalButton from "components/modal/DeleteCartModal";
const QuantityButton = ({ id, quantity, onClick }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        id={`l${id}`}
        className="quantity-button"
        onClick={() => onClick("decrease")}
      >
        -
      </button>
      <div style={{ margin: "0 10px" }}>{quantity}</div>
      <button
        id={`r${id}`}
        className="quantity-button"
        onClick={() => onClick("increase")}
      >
        +
      </button>
    </div>
  );
};
const convertToVND = (price) => {
  return price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};
const CartItem = ({ item, handleQuantityChange }) => {
  const handleClick = (type) => {
    console.log(type, item);
    let quantity = 0;
    if (type === "delete") {
      quantity = 0;
    }
    if (type === "increase") {
      quantity = item.quantity + 1;
    }
    if (type === "decrease") {
      quantity = item.quantity - 1;
    }
    handleQuantityChange(item, quantity);
  };
  return (
    <div class="cart-row" style={{ marginBottom: "15px" }}>
      <input type="checkbox"></input>
      <div style={{ display: "flex", gap: "15px" }}>
        <img
          src={item.image_url}
          alt={item.name}
          style={{ width: "80px", height: "80px" }}
        />
        <div>{item.name}</div>
      </div>
      <div style={{ margin: "auto 0" }}>{convertToVND(item.price)}</div>
      <div style={{ margin: "auto 0" }}>
        <QuantityButton
          id={item.id}
          quantity={item.quantity}
          onClick={handleClick}
        />
      </div>
      <div style={{ margin: "auto 0" }}>
        {convertToVND(item.price * item.quantity)}
      </div>
      <DeleteCartModalButton deleteItem={()=>handleClick("delete")}>
        <div
          class="clickable"
          style={{ display: "flex", alignItems: "center" }}
        >
          <i style={{ marginLeft: "auto" }} class="fa-solid fa-trash"></i>
        </div>
      </DeleteCartModalButton>
    </div>
  );
};

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      image_url:
        "https://salt.tikicdn.com/cache/w78/ts/product/df/b9/d1/15e8aece47d0d13ca0f0fe7d94a1f302.png.webp",
      name: "Iphone 12",
      price: 10000000,
      quantity: 1,
    },
    {
      id: 2,
      image_url:
        "https://salt.tikicdn.com/cache/w78/ts/product/df/b9/d1/15e8aece47d0d13ca0f0fe7d94a1f302.png.webp",
      name: "Iphone 12",
      price: 10000000,
      quantity: 1,
    },
    {
      id: 3,
      image_url:
        "https://salt.tikicdn.com/cache/w78/ts/product/df/b9/d1/15e8aece47d0d13ca0f0fe7d94a1f302.png.webp",
      name: "Iphone 12",
      price: 10000000,
      quantity: 1,
    },
  ]);
  const [toBeDeletedItem, setToBeDeletedItem] = useState(null);
  const [needReload, setNeedReload] = useState(true);
  const handleQuantityChange = (item, quantity) => {
    if (quantity < 1) {
      setToBeDeletedItem(item);
      return;
    } else {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: quantity };
        }
        return cartItem;
      });
      setCart(newCart);
    }
  };
  const handleDeleteItem = (type) => {
    if (type === "confirm") {
      console.log("hello");
    } else {
      setToBeDeletedItem(null);
    }
  };

  return (
    <MainLayout>
      <div style={{ fontSize: "1.5rem", textTransform: "uppercase" }}>
        Giỏ hàng
      </div>
      <div class="two-area-layout">
        <div class="main-container">
          <div class="card">
            <div class="cart-row">
              <input type="checkbox"></input>
              <div>Tất cả</div>
              <div>Đơn giá</div>
              <div>Số lượng</div>
              <div>Thành tiền</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <i style={{ marginLeft: "auto" }} class="fa-solid fa-trash"></i>
              </div>
            </div>
          </div>
          <div class="card">
            {cart.map((item) => {
              return (
                <CartItem
                  item={item}
                  handleQuantityChange={handleQuantityChange}
                ></CartItem>
              );
            })}
          </div>
        </div>
        <div class="side-container">
          <div className="card">
            <div>
              Tổng tiền:{" "}
              {convertToVND(
                cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )
              )}
            </div>
            <hr />
            <button type="button" class="btn btn-primary btn-block">
              {needReload ? "Cập nhập giỏ hàng" : "Thanh toán"}
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
