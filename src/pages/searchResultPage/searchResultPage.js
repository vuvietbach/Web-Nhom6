import "./searchResultPage.scss";
import { MainLayout } from "components/layoutTemplate/layoutTemplate";
import DropdownOption from "components/dropdown/dropdown";
import Button from "react-bootstrap/Button";
import { useState, useRef, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getAllBrands, searchItems, getAllCategories } from "axiosAPI/API";
import ItemsContainer from "components/itemContainer/itemContainer";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "redux_code/dispatch";
import { selectDisplayItems } from "redux_code/selector";
import { CustomPagination } from "components/misc/misc";
import { sortItems, filterItems } from "redux_code/dispatch";
import { sortTypeMap } from "utils";
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

const Filter = ({filter}) => {
  const [showValues, setShowValues] = useState([]);
  useEffect(() => {
    if (filter.values.length <= 4) {
      setShowValues(filter.values);
    } else {
      setShowValues(filter.values.slice(0, 4));
    }
    console.log(filter);
  }, [filter]);
  const [showAll, setShowAll] = useState(false);
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div>
        <h5>{filter.name}</h5>
        <div style={{ display: "flex", gap: "7px" }}>
          {showValues.map((item) => (
            <div class="pill-box">{item.name}</div>
          ))}
        </div>
      </div>
      <VR />
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
const FilterSlider = ({filters}) => {
  const [currentFirst, setCurrentFirst] = useState(0);
  const [movement, setMovement] = useState(0);
  const elementRefs = useRef([]);
  const [elementWidths, setElementWidths] = useState([]);
  const handleClick = (type) => {
    if (type === "prev") {
      if (currentFirst > 0) {
        let offset = elementWidths[currentFirst - 1];

        setCurrentFirst(currentFirst - 1);

        setMovement(movement + offset); // Move right by 100 pixels (adjust as needed)
      }
    } else if (type === "next") {
      if (currentFirst < newFilters.length - 1) {
        let offset = elementWidths[currentFirst];
        
        setCurrentFirst(currentFirst + 1);

        setMovement(movement - offset); // Move left by 100 pixels (adjust as needed)

      }
    }
  };
  const [newFilters, setNewFilters] = useState([]);
  useEffect(() => {
    const tmpFilters = []
    const entries = Object.entries(filters);
    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i];
      tmpFilters.push({id: key, ...value});
    }
    setNewFilters(tmpFilters);
    
    let tmpWidths = elementRefs.current.map(
      (item, index) => item.getBoundingClientRect().width
    );
    setElementWidths(tmpWidths);
  
  }, [filters]);
  useEffect(() => {
  }, [newFilters]);
  const assignRef = (index) => (element) => {
    elementRefs.current[index] = element;
  };
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
          {newFilters.map((item, index) => {
            return (
              <div ref={assignRef(index)} key={index}>
                <Filter filter={item}></Filter>
              </div>
            );
          })}
        </div>
      </div>
      {currentFirst < newFilters.length - 1 && (
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
const SortSection = () => {
  const sortOptions = [
    "Phổ biến",
    "Bán chạy",
    "Hàng mới",
    "Giá thấp đến cao",
    "Giá cao đến thấp",
  ];
  const dispatch = useDispatch();
  const handleSort = (sortType) => {
    dispatch(sortItems(sortTypeMap[sortType]));
  };
  return (
    <div class="sort-section" style={{ display: "flex" }}>
      <div style={{ display: "inline-block", marginLeft: "auto" }}>
        Sắp xếp theo &nbsp;
        <DropdownOption
          options={sortOptions}
          onClick={handleSort}
        ></DropdownOption>
      </div>
    </div>
  );
};
export default function SearchResultPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const dispatch = useDispatch();
  const displayItems = useSelector(selectDisplayItems);
  useEffect(() => {
    searchItems(query)
      .then((data) => {
        dispatch(setItems(data));
      })
      .catch((err) => console.log(err));
  }, [query]);
  const handleFilter = (filterType, filterValue) => {
    setSelectedFilter({...selectedFilter, [filterType]: filterValue})
  }
  const [options, setOptions] = useState({ brands: {name: "Thương hiệu", values: [], onClick: handleFilter}, categories: {name: "Danh mục", values: [], onClick: handleFilter} });
  const [selectedFilter, setSelectedFilter] = useState({})
  const items = useSelector((state) => state.item.items);
  useEffect(() => {
    let itemBrandID = items.map((item) => item.brand_id);
    itemBrandID = [...new Set(itemBrandID)];
    getAllBrands().then((data) => {
      const itemBrand = data.filter((item) => itemBrandID.includes(item.id));
      const newBrand = { ...options.brands, values: itemBrand };
      setOptions({ ...options, brands: newBrand });
    });
    let itemCategoryID = items.map((item) => item.category_id);
    itemCategoryID = [...new Set(itemCategoryID)];
    getAllCategories().then((data) => {
      const itemCategory = data.filter((item) =>
        itemCategoryID.includes(item.id)
      );
      const newCategories = { ...options.categories, values: itemCategory };
      setOptions({ ...options, categories: newCategories});
    });
  }, [items]);
  useEffect(() => {
    console.log(options);
  }, [options]);

  useEffect(() => {
    dispatch(filterItems(selectedFilter))
  }, [selectedFilter])
  return (
    <div key={query}>
      <MainLayout>
        <div class="two-area-layout">
          <div class="result-container">
            <div className="card" style={{ marginBottom: "15px" }}>
              <div class="filter-section">
                <FilterSlider filters={options}/>
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
              <SortSection />
            </div>
            <ItemsContainer items={displayItems} />
            <CustomPagination />
          </div>
          <div class="banner">
            <img src="https://salt.tikicdn.com/ts/tka/fa/7c/6b/e4540edcd4c3b6247ddca94936f23b6b.jpg" />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
