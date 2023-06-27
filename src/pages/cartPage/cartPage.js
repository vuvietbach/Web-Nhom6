import { MainLayout } from "components/layoutTemplate/layoutTemplate";
import "./cartPage.css";
import { useEffect, useState } from "react";
import DeleteCartModalButton from "components/modal/DeleteCartModal";
import { deleteCart, getCartByUserId, updateCartItem, createOrder } from "axiosAPI/API";
import { CustomLink } from "components/misc/misc";
import { deleteCartItem } from "axiosAPI/API";
import CustomModal from "components/modal/customModal";
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
        <CustomLink to={`/chi-tiet-san-pham/${item.origin_id}`}>
          <img src={item.image_url} alt={item.name} style={{ width: "80px" }} />
        </CustomLink>
        <CustomLink to={`/chi-tiet-san-pham/${item.origin_id}`}>
          <div>{item.name}</div>
        </CustomLink>
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
      <DeleteCartModalButton deleteItem={() => handleClick("delete")}>
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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [cart, setCart] = useState([]);
  const [updateCart, setUpdateCart] = useState(false);
  const handleQuantityChange = (item, quantity) => {
    if (quantity < 1) {
      // const newCart = cart.filter((cartItem) => cartItem.item_id !== item.item_id);
      // setCart(newCart);
      deleteCartItem(user.id, item.item_id)
        .then((res) => {
          console.log(res);
          setUpdateCart(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      quantity = quantity > item.quantity ? 1 : -1;
      updateCartItem(user.id, item.item_id, quantity)
        .then((res) => {
          console.log(res);
          setUpdateCart(true);
        })
        .catch((err) => {
          console.log(err);
        });
      //   const newCart = cart.map((cartItem) => {
      //     if (cartItem.item_id === item.item_id) {
      //       return { ...cartItem, quantity: quantity };
      //     }
      //     return cartItem;
      //   });
      //   setCart(newCart);
      // updateCartItem(user.id, item.item_id, quantity).then((res) => {
    }
  };
  const handleCheckOut = () => {
    const order = {
      user_id: user.id,
      ship_address: "Hanoi",
      order_detail: cart.map((item) => {
        return {
          item_id: item.item_id,
          quantity: item.quantity,
        };
      })
    };
    createOrder(order).then((res) => {
        deleteCart(user.id).then((res) => {
            setUpdateCart(true);
        })
    })
};
  useEffect(() => {
    if (user) {
      setUser(JSON.parse(localStorage.getItem("user")));
      getCartByUserId(user.id).then((res) => {
        setCart(res);
      });
    }
  }, []);
  useEffect(() => {
    if (updateCart) {
      if (user) {
        getCartByUserId(user.id).then((res) => {
          setCart(res);
        });
      }
      setUpdateCart(false);
    }
  }, [updateCart]);
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
            {/* <button type="button" class="btn btn-primary btn-block" onClick={()=>setUpdateCart(true)}>
              {"Cập nhập giỏ hàng"}
            </button> */}
            <CustomModal onConfirm={handleCheckOut}>
              <button type="button" class="btn btn-danger btn-block">
                {"Thanh toán"}
              </button>
            </CustomModal>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
