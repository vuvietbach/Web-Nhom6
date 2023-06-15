import React from "react";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Header from "components/header/header";
import { useParams } from "react-router-dom";
import {
  CheckboxList,
  RatingStar,
  SideCard,
  ExpandableList,
} from "components/misc/misc";
import "./productPage.css";
import { Pagination } from "@mui/material";
import ProductCard from "components/productCard/productCard";
import productData from "axiosAPI/data/products.json";
import { useEffect, useState } from "react";
import { SortList } from "components/misc/misc";
import {
  getSubCategories,
  sortProducts,
  getBrandsByCategory,
  getItemsByCategory,
} from "axiosAPI/API";
import { CategoryList } from "pages/landingPage/landingPage";
import fakeSubCategories from "data/subCategories.json";
import fakeBrands from "data/fakeBrands.json";
const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit">
    Trang chủ
  </Link>,
  <Link key="2" color="text.primary">
    Thời trang nam
  </Link>,
];
const brands = ["Gia dụng Việt", "Tiki Trading", "Shop máy đọc sách Hà Nội"];
const sortTypeMap = {
  "Giá thấp đến cao": "price-asc",
  "Giá cao đến thấp": "price-desc",
  "Bán chạy": "best-seller",
  "Hàng mới": "newest",
  "Phổ biến": "popular",
};

export default function ProductPage() {
  const { id } = useParams();
  const category_id = id;
  // TODO: replace with real data

  // sort by price asc, price desc, best seller, newest, popular
  const [items, setItems] = useState(
    productData["Điện Thoại - Máy Tính Bảng"]
  );
  const sortList = (sortType) => {
    sortType = sortTypeMap[sortType];
    let newList = sortProducts(items, sortType);
    setItems(newList);
  };
  // get sub categories
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  useEffect(() => {
    getSubCategories(category_id)
      .then((subCategories) => {
        console.log(subCategories.data);
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
        setItems(items);
      })
      .catch((err) => {
        console.log(err);
      }
    );
  }, [category_id]);
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
  
    setSelectedBrands((prevSelectedBrands) => {
      if (isChecked) {
        return [...prevSelectedBrands, value];
      } else {
        return prevSelectedBrands.filter((item) => item !== value);
      }
    });
  };
  
  // get brands
  useEffect(() => {
    console.log("selectedBrands", selectedBrands);
  }, [selectedBrands]);

  // filter according to brands

  return (
    <div>
      <Header></Header>
      <div class="content-container">
        <Breadcrumbs aria-label="breadcrumb">{breadcrumbs}</Breadcrumbs>
      </div>
      <div class="body-container" style={{ marginTop: "0" }}>
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
          <SideCard title={"Đánh giá"}>
            <ul class="list-group">
              <li>
                <RatingStar rating={5} />
                từ 5 sao
              </li>
              <li>
                <RatingStar rating={4} />
                từ 4 sao
              </li>
              <li>
                <RatingStar rating={3} />
                từ 3 sao
              </li>
            </ul>
          </SideCard>
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
            <h4>Điện gia dụng</h4>
            <div>
              <SortList onClick={sortList} />
            </div>
          </div>
          <div class="product-display">
            {items.map((item) => {
              return <ProductCard product={item} />;
            })}
          </div>
          <div class="custom-pagination">
            <Pagination
              count={20}
              siblingCount={2}
              size="large"
              variant="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
