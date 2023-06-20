
import Tikilogo from "../assets/tiki.png";
import { SearchBar } from "components/searchBar/searchBar";
import "./header.css";
import { AddressModalButton } from "components/modal/AddressModal";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
function HeaderButton({ fa_icon, text, onClick }) {
  return (
    <button type="button" className="unstyled-button header-button" onClick={()=>onClick(text)}>
      <i class={fa_icon}></i>
      {text && <div>{text}</div>}
    </button>
  );
}
const CustomLink = ({ to, children, style }) => (
  <Link
    to={to}
    style={{
      textDecoration: 'none',
      color: 'inherit',
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
  )
}
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const handelClick = (text) => {
    if (text === "Tài khoản") {
      if(localStorage.getItem('user') == null) {
        navigate("/SignIn");
      } else{
        const user = JSON.parse(localStorage.getItem('user'));
        if("followers" in user) {
          navigate("/seller");
        } else {
          navigate("/Account");
        }
      }
    } else if(text === "Trang chủ") {
      navigate("/");
    }
  }
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
    {
      fa_icon: "fa-regular fa-face-smile-beam",
      text: "Tài khoản",
    }
  ];


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
                <HeaderButton fa_icon={item.fa_icon} text={item.text} onClick={handelClick} />
            )
          })}
          <div className="vertical-rule" />
          <div className="unstyled-button header-button cart-icon">
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
          <div style={{marginLeft:"auto"}}>
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
