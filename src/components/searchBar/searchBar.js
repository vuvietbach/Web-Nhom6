import "./searchBar.css";
import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
export const SearchBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  
  const handleOnClick = (e) => {
    e.preventDefault();
    setShowDropdown(false);

    const queryParams = new URLSearchParams();
    queryParams.append("query", inputRef.current.value);
    const queryString = queryParams.toString();
    const url = `/tim-kiem?${queryString}`

    navigate(url);
  }
  return (
    <div>
      <div class="search-bar-wrapper">
        <form class="search-bar">
          <icon class="fa fa-search"></icon>
          <input
            class="search-text"
            type="text"
            ref={inputRef}
            onClick={() => setShowDropdown(true)}
            placeholder="Tìm kiếm sản phẩm"
          />
          <div class="vertical-rule" style={{ margin: "0" }}></div>
          <button class="search-btn" type="submit" onClick={handleOnClick}>
            Tìm kiếm
          </button>
        </form>
        {showDropdown && (
          <div className="dropdown_menu">
            <a>Hello World</a>
          </div>
        )}
      </div>
      {showDropdown && (
        <div id="background-overlay" onClick={()=>setShowDropdown(false)}>
        </div>
      )}
    </div>
  );
};
