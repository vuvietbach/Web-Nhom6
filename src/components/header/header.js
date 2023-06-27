import Tikilogo from "../assets/tiki.png";
import { SearchBar } from "components/searchBar/searchBar";
import "./header.css";
import { AddressModalButton } from "components/modal/AddressModal";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
function HeaderButton({ fa_icon, text, onClick }) {
  return (
    <button
      type="button"
      className="unstyled-button header-button"
      onClick={() => onClick(text)}
    >
      <i class={fa_icon}></i>
      {text && <div>{text}</div>}
    </button>
  );
}
const handleSignOut = () => {
  // Delete all cookies
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }

  // Clear local storage
  localStorage.clear();

  // Redirect to '/'
  window.location.href = "/";
};
const CustomLink = ({ to, children, style }) => (
  <Link
    to={to}
    style={{
      textDecoration: "none",
      color: "inherit",
      ...style,
    }}
  >
    {children}
  </Link>
);
const TikiLogo = () => {
  return (
    <CustomLink to="/">
      <img src={Tikilogo} style={{ height: "40px" }} alt="tiki logo" />
    </CustomLink>
  );
};
const DropdownAccount = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const displayRef = useRef(null);
  const navigate = useNavigate();
  const handleItemClick = (e) => {
    if (e.target.innerText === "Đăng xuất") {
      handleSignOut();
    }
    else if (e.target.innerText === "Thông tin tài khoản") {
      if (localStorage.getItem('user') == null) {
        navigate("/SignIn");
      } else {
        const user = JSON.parse(localStorage.getItem('user'));
        navigate(`/Account/${user.id}`);
      }
    }
    displayRef.current.blur();
  };
  const options = ["Thông tin tài khoản", "Đăng xuất"]
  // TODO: merge dropdown-container and dropdown-menu in searchBar
  return (
    <div
      style={{ display: "inline-block", position: "relative", height:"100%" }}
      onClick={() => {
        if (showDropdown == false) {
          displayRef.current.focus();
          setShowDropdown(true);
        }
      }}
      onBlur={() => {
        setShowDropdown(false);
      }}
      ref={displayRef}
      tabIndex={0}
    >
    {children}      
    {showDropdown && (
        <div class="dropdown-container" style={{width:"200px"}}>
          {options.map((item, index) => (
            <>
              <div class="dropdown-item" onClick={handleItemClick}>
                {item}
              </div>
              {index !== options.length - 1 && <hr />}
            </>
          ))}
        </div>
      )}
    </div>
  );
};
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const handelClick = (text) => {
    if (text === "Tài khoản") {
      // if(localStorage.getItem('user') == null) {
      //   navigate("/SignIn");
      // } else{
      //   const user = JSON.parse(localStorage.getItem('user'));
      //   console.log(user);
      //   if("followers" in user) {
      //     navigate("/seller");
      //   } else {
      //     navigate("/Account");
      //   }
      // }
    } else if (text === "Trang chủ") {
      navigate("/");
    }
  };
  const handleCart = () => {
    console.log(localStorage.getItem("user"));
    if (localStorage.getItem("user") == null) {
      navigate("/SignIn");
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      if ("followers" in user) {
        navigate("/SignIn");
      } else {
        navigate("/gio-hang");
      }
    }
  };
  // TODO: replace with real url
  const headerButtons = [
    {
      fa_icon: "fa fa-home",
      text: "Trang chủ",
      url: "/",
    },
    {
      fa_icon: "fa-solid fa-crown",
      text: "Astra",
      url: location.pathname,
    },
  ];
  const account = {
    fa_icon: "fa-regular fa-face-smile-beam",
    text: "Tài khoản",
  };

  return (
    <div style={{ backgroundColor: "#fff", width: "100%", paddingTop: "5px" }}>
      <div style={{ margin: "0 auto", width: "var(--content-max-width)" }}>
        <div class="header-row">
          <TikiLogo></TikiLogo>
          <div
            class="search-bar-ctn"
            style={{ display: "flex", alignItems: "center", flexGrow: "1" }}
          >
            <SearchBar />
          </div>
          {headerButtons.map((item, index) => {
            return (
              <HeaderButton
                fa_icon={item.fa_icon}
                text={item.text}
                onClick={handelClick}
              />
            );
          })}
          <DropdownAccount>
            <HeaderButton
              fa_icon={account.fa_icon}
              text={account.text}
              onClick={handelClick}
            />
          </DropdownAccount>
          <div className="vertical-rule" />
          <div
            className="unstyled-button header-button cart-icon"
            onClick={handleCart}
          >
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="cart-count">3</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "35px",
            justifyContent: "space-between",
            color: "#717171",
          }}
        >
          {/* <div class="d-flex flex-"></div> */}
          <div style={{ marginLeft: "auto" }}>
            <AddressModalButton>
              <span style={{ fontSize: "0.9rem" }}>
                <i
                  class="fa-solid fa-location-dot"
                  style={{ marginRight: "3px" }}
                ></i>
                <span>Giao đến: </span>
                <span
                  style={{
                    textDecoration: "underline",
                    color: "#000",
                    fontWeight: "500",
                  }}
                >
                  Q.Hoàn Kiếm, P.Hàng Trống, Hà Nội
                </span>
              </span>
            </AddressModalButton>
          </div>
        </div>
      </div>
    </div>
  );
}
