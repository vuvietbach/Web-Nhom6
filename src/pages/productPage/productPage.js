import React, { useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  CheckboxList,
  RatingStar,
  SideCard,
  ExpandableList,
  CustomPagination,
} from "components/misc/misc";
import "./productPage.css";
import ProductCard from "components/productCard/productCard";
import { useEffect, useState } from "react";
import {
  getSubCategories,
  getBrandsByCategory,
  getItemsByCategory,
  getCategoryById
} from "axiosAPI/API";
import { CategoryList } from "pages/landingPage/landingPage";
import { setItems } from "redux_code/dispatch";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "components/layoutTemplate/layoutTemplate";
import { sortItems, filterItems } from "redux_code/dispatch";
import { selectDisplayItems } from "redux_code/selector";
import { sortTypeMap } from "utils";

const ButtonGroup = ({ items, onClick }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleOnClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
      onClick(-1);
    } else {
      setActiveIndex(index);
      onClick(index);
    }
  };
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div
            class={`sidecard-button-no-hover ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleOnClick(index)}
            key={index}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
const SortList = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState(0);
  const items = [
    "Phổ biến",
    "Bán chạy",
    "Hàng mới",
    "Giá thấp đến cao",
    "Giá cao đến thấp",
  ];
  const handelClick = (index) => {
    setSelected(index);
    const sortType = sortTypeMap[items[index]];
    dispatch(sortItems(sortType));
  };
  return (
    <ul class="list-group list-filter">
      {items.map((item, index) => {
        return (
          <li
            key={index}
            class={index === selected ? "active" : ""}
            onClick={() => handelClick(index)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
const RatingNumbers = [3, 4, 5];
const ratings = [3, 4, 5].map((rating) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <RatingStar rating={rating} />
      <div>từ {rating} sao</div>
    </div>
  );
});
export default function ProductPage() {
  const location = useLocation();
  const { id } = useParams();
  const category_id = id;
  // TODO: replace with real data
  const dispatch = useDispatch();
  const displayItems = useSelector(selectDisplayItems);
  // get sub categories
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(-1);
  const [category, setCategory] = useState({});
  useEffect(() => {
    getSubCategories(category_id)
      .then((subCategories) => {
        setSubCategories(subCategories);
      })
      .catch((err) => {
        console.log(err);
      });
    getBrandsByCategory(category_id)
      .then((brands) => {
        setBrands(CheckboxList(brands, handleCheckboxChange));
      })
      .catch((err) => {
        console.log(err);
      });
    getItemsByCategory(category_id)
      .then((items) => {
        dispatch(setItems(items));
      })
      .catch((err) => {
        console.log(err);
      });
    getCategoryById(category_id).then((category) => {
      setCategory(category);
    });
  }, [location.pathname, location.search]);

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value);
    const isChecked = event.target.checked;

    setSelectedBrands((prevSelectedBrands) => {
      if (isChecked) {
        return [...prevSelectedBrands, value];
      } else {
        return prevSelectedBrands.filter((item) => item !== value);
      }
    });
  };
  const handleRatingFilterChange = (ratingIndex) => {
    const rating = ratingIndex === -1 ? -1 : RatingNumbers[ratingIndex];
    console.log(rating);
    setSelectedRating(rating);
  };
  useEffect(() => {
    const filterArgs = { brands: selectedBrands, rating: selectedRating };
    dispatch(filterItems(filterArgs));
  }, [selectedBrands, selectedRating]);

  // filter according to brands
  return (
    <MainLayout>
      <div style={{ display: "flex", gap: "15px" }}>
        <div class="side-container">
          {subCategories.length > 0 && (
            <div className="side-card">
              <h6 className="card-title">Danh mục</h6>
              <CategoryList data={subCategories}></CategoryList>
            </div>
          )}
          {brands.length > 0 && (
            <div className="side-card">
              <h6 className="card-title">Thương hiệu</h6>
              <ExpandableList
                data={brands}
                initiallyExpanded={10}
              ></ExpandableList>
            </div>
          )}
          <div className="side-card">
            <h6 className="card-title">Đánh giá</h6>
            <ButtonGroup
              items={ratings}
              onClick={handleRatingFilterChange}
            ></ButtonGroup>
          </div>
          <SideCard title={"Giá"}>
            <div>Chọn khoảng giá</div>
            <form>
              <div class="d-flex">
                <input class="price-inp" type="number" min="0"></input>
                <div class="hr"></div>
                <input class="price-inp" type="number" min="0"></input>
              </div>
              <input class="price-submit" type="submit"></input>
            </form>
          </SideCard>
        </div>
        <div class="main-container">
          <div class="card">
            <h4>{category.name}</h4>
            <div>
              <SortList />
            </div>
          </div>
          <div class="product-display">
            {displayItems &&
              displayItems.map((item) => {
                return <ProductCard product={item} />;
              })}
          </div>
          <CustomPagination />
        </div>
      </div>
    </MainLayout>
  );
}
