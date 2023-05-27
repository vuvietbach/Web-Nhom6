import React from 'react';
import TikiLogo from '../assets/tiki.png'
import { SearchBar } from '../SearchBar/SearchBar';
import '../Header/Header.css';
import trangchu from '../assets/trangchu.png';
import images from "../assets/assets";

const HeaderButton = ({ fa_icon, text, imgSrc }) => {
    return (
      <button type="button" className="unstyled-button header-button">
        {imgSrc && <img src={imgSrc} alt="icon" />}
        <i className={fa_icon}></i>
        {text && <div>{text}</div>}
      </button>
    );
  };


const ThucPhamList = ({ thuc_pham }) => {
  return (
    <div className="thuc-pham-list">
      {thuc_pham.map((item, index) => (
        <span key={index} className="thuc-pham-item">
          {item}
        </span>
      ))}
    </div>
  );
};

const Header = () => {
  const headerButtons = [
    {
      fa_icon: 'fa fa-home',
      text: 'Trang chủ',
      imgSrc: trangchu,
    },
    {
      fa_icon: 'fa-solid fa-crown',
      text: 'Astra',
      imgSrc: 'path/to/image2.png',
    },
    {
      fa_icon: 'fa-regular fa-face-smile-beam',
      text: 'Tài khoản',
      imgSrc: 'path/to/image3.png',
    },
  ];
  const thuc_pham = [
    'trái cây',
    'thịt, trứng',
    'rau củ quả',
    'sữa, bơ, phô mai',
    'hải sản',
    'gạo, mì ăn liền',
    'đồ uống, bia rượu',
    'bánh kẹo',
  ];
  return (
    <div style={{ backgroundColor: '#fff', width: '100%', paddingTop: '5px' }}>
      <div style={{ margin: '0 auto', width: 'var(--content-max-width)' }}>
        <div className="header-row">
          <img src={TikiLogo} style={{ height: "40px", marginLeft: "100px" }} alt="tiki logo" />
          <div
            className="search-bar-ctn"
            style={{ display: "flex", alignItems: "center", flexGrow: "1" }}
          >
            <SearchBar />
          </div>
          {headerButtons.map((item, index) => {
            return (
              <HeaderButton fa_icon={item.fa_icon} text={item.text} key={index} />
            );
          })}
          <div className="vertical-rule" />
          <div className="unstyled-button header-button cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count">3</span>
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
        <ThucPhamList thuc_pham={thuc_pham} />
        <a href="#" className="unstyled-link">
            <span style={{ fontSize: "0.9rem" }}>
              <i
                className="fa-solid fa-location-dot"
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
        </a>
        </div>
        <img src={images['./freeship.png']} alt="Avatar" style={{width: '100%', height: '100%', display: 'inline-block'}} />
      </div>
    </div>
  );
};

export default Header;

