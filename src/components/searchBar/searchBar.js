import "./searchBar.css";
import React, { useState } from "react";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div>
      <div class="search-bar-wrapper">
        <form class="search-bar">
          <icon class="fa fa-search"></icon>
          <input
            class="search-text"
            type="text"
            value={searchText}
            onChange={handleInputChange}
            onClick={() => setShowDropdown(true)}
            placeholder="Tìm kiếm sản phẩm"
          />
          <div class="vertical-rule" style={{ margin: "0" }}></div>
          <button class="search-btn" type="submit">
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
