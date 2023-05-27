import React, { useState } from "react";
import './SearchBar.css';

export const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };
    return (
        <div>
        <div className="search-bar-wrapper">
            <form className="search-bar">
            <icon className="fa fa-search"></icon>
            <input
                className="search-text"
                type="text"
                value={searchText}
                onChange={handleInputChange}
                onClick={() => setShowDropdown(true)}
                placeholder="Tìm kiếm sản phẩm"
            />
            <div className="vertical-rule" style={{ margin: "0" }}></div>
            <button className="search-btn" type="submit">
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
