import "./dropdown.css";
import { useState, useRef } from "react";
export default function DropdownOption({ options, onClick }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const displayRef = useRef(null);
  const handleItemClick = (e) => {
    onClick(e.target.innerText);
    setSelected(e.target.innerText);
    displayRef.current.blur();
  };
  const [selected, setSelected] = useState(options[0]);
  // TODO: merge dropdown-container and dropdown-menu in searchBar
  return (
    <div
      style={{ display: "inline-block", position: "relative" }}
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
      <button class="pill-box" style={{ backgroundColor: "#fff" }}>
        {selected} &nbsp;
        <i class="fa-solid fa-chevron-down"></i>
      </button>
      {showDropdown && (
        <div class="dropdown-container">
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
}