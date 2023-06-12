import "./searchResultPage.scss";
import { MainLayout } from "components/layoutTemplate/layoutTemplate";
import Dropdown from "components/dropdown/dropdown";
import Button from "react-bootstrap/Button";
import { useState, useRef, useEffect } from "react";

const filters = [
  {
    name: "Thương hiệu",
    values: ["Apple", "Samsung", "Oppo", "Nexus"],
  },
  {
    name: "Thương hiệu1",
    values: ["Apple", "Samsung", "Oppo", "Nexus"],
  },
  {
    name: "Thương hiệu2",
    values: ["Apple", "Samsung", "Oppo", "Nexus"],
  },
  {
    name: "Thương hiệu3",
    values: ["Apple", "Samsung", "Oppo", "Nexus"],
  },
  {
    name: "Thương hiệu4",
    values: ["Apple", "Samsung", "Oppo", "Nexus"],
  },
];
const sortOptions = ["Phổ biến", "Giá thấp", "Giá cao", "Bán chạy", "Hàng mới"];
const Filter = ({ filter }) => {
  return (
    <div>
      <div>{filter.name}</div>
      <div style={{ display: "flex", gap: "7px" }}>
        {filter["values"].map((item) => (
          <div class="pill-box">{item}</div>
        ))}
      </div>
    </div>
  );
};
const VR = () => {
  return (
    <div
      style={{
        borderLeft: "1px solid #efefef",
        height: "60%",
        margin: "0 10px",
        alignSelf: "end",
      }}
    ></div>
  );
};
const FilterSlider = () => {
  const [currentFirst, setCurrentFirst] = useState(0);
  const [movement, setMovement] = useState(0);
  const elementRefs = useRef([]);
  const [elementWidths, setElementWidths] = useState([]);
  const stack = [];
  const handleClick = (type) => {
    if (type === "prev") {
      if (currentFirst > 0) {
        let offset = elementWidths[currentFirst - 1];
        
        setCurrentFirst(currentFirst - 1);

        setMovement(movement + offset); // Move right by 100 pixels (adjust as needed)
      }
    } else if (type === "next") {
      if (currentFirst < filters.length - 1) {
        let offset = elementWidths[currentFirst];

        setCurrentFirst(currentFirst + 1);

        setMovement(movement - offset); // Move left by 100 pixels (adjust as needed)
      }
    }
  };
  const filterElements = filters.map((item, index) => (
    <div style={{ display: "flex" }}>
      <Filter filter={item}></Filter>
      {index < filters.length - 1 && <VR />}
    </div>
  ));
  const assignRef = (index) => (element) => {
    elementRefs.current[index] = element;
  };
  useEffect(() => {
    let tmpWidths = elementRefs.current.map(
      (item, index) => item.getBoundingClientRect().width
    );
    setElementWidths(tmpWidths);
  }, []);

  return (
    <div class="filter-slider">
      {currentFirst > 0 && (
        <button
          class="filter-slider_prev-button"
          onClick={() => handleClick("prev")}
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
      )}
      <div style={{ flex: "1", overflow: "hidden" }}>
        <div
          class="filter-container"
          style={{ transform: `translateX(${movement}px)` }}
        >
          {filterElements.map((item, index) => {
            return (
              <div ref={assignRef(index)} key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      {currentFirst < filters.length - 1 && (
        <button
          class="filter-slider_next-button"
          onClick={() => handleClick("next")}
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      )}
    </div>
  );
};
export default function SearchResultPage() {
  const handleSort = (type) => {
    console.log("sort");
  };
  return (
    <MainLayout>
      <div class="two-area-layout">
        <div class="result-container">
          <div className="card">
            <div class="filter-section">
              <FilterSlider />
              <div class="filter-modal-section">
                <VR />
                <button class="filter-modal-button">
                  <i class="fa-solid fa-filter"></i>
                  &nbsp;
                  <span>Tất cả</span>
                </button>
              </div>
            </div>
            <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
            <div class="sort-section" style={{ display: "flex" }}>
              <div style={{ display: "inline-block", marginLeft: "auto" }}>
                Sắp xếp theo &nbsp;
                <Dropdown dropdownList={sortOptions} onClick={handleSort}>
                  <button class="pill-box" style={{ backgroundColor: "#fff" }}>
                    Phổ biến &nbsp;
                    <i class="fa-solid fa-chevron-down"></i>
                  </button>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div class="banner">
          <img src="https://salt.tikicdn.com/ts/tka/fa/7c/6b/e4540edcd4c3b6247ddca94936f23b6b.jpg" />
        </div>
      </div>
    </MainLayout>
  );
}
