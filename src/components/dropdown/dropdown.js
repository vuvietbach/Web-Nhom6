import "./dropdown.css";
import { useState, useRef } from "react";
export default function Dropdown({ children, dropdownList, onClick }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const displayRef = useRef(null);
  const handleItemClick = (e) => {
    onClick(e.target.innerText);
    displayRef.current.blur();
  };
  // TODO: merge dropdown-container and dropdown-menu in searchBar
  return (
    <div
      style={{ display: "inline-block", position: "relative" }}
      onClick={() => {
        if (showDropdown == false) {
            displayRef.current.focus();
            setShowDropdown(true)
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
        <div class="dropdown-container" >
          {dropdownList.map((item, index) => (
            <>
              <div class="dropdown-item" onClick={handleItemClick}>
                {item}
              </div>
              {index !== dropdownList.length - 1 && <hr />}
            </>
          ))}
        </div>
      )}
    </div>
  );
}
