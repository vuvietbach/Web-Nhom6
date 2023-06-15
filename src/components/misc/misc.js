import "./misc.css";
import React from "react";
import { Link } from "react-router-dom";
export const RatingStar = ({ rating }) => {
  let stars = [];
  rating = Math.max(0, Math.min(5, rating));
  for (let i = 0; i < rating; i++) {
    stars.push(<i className="fas fa-star" key={i}></i>);
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push(<i className="far fa-star" key={i + rating}></i>);
  }
  return (
    <span class="stars">
      {stars.map((star, index) => {
        return star;
      })}
    </span>
  );
};
export const SideBar = ({ children }) => {
  return <div className="side-bar">{children}</div>;
};
export const SideCard = ({ title, children, hiddenContent }) => {
  const [expand, setExpand] = React.useState(false);
  const expandable = hiddenContent !== undefined;
  return (
    <div className="side-card">
      <h6>{title}</h6>
      {children}
      {expand && hiddenContent}
      {expandable && (
        <div className="expand-btn" onClick={() => setExpand(!expand)}>
          {expand ? "Thu gọn" : "Xem thêm"}
        </div>
      )}
    </div>
  );
};
export const ExpandableList = ({ data, initiallyExpanded }) => {
  const numDisplay = Math.min(initiallyExpanded, data.length);
  const initialList = data.slice(0, numDisplay);
  const expandedList = data.slice(numDisplay);
  const [expand, setExpand] = React.useState(false);
  return (
    <div>
      {initialList.map((item) => {
        return item;
      })}
      {expand &&
        expandedList.map((item) => {
          return item;
        })}
      <div className="expand-btn" onClick={() => setExpand(!expand)}>
        {expand ? "Thu gọn" : "Xem thêm"}
      </div>
    </div>
  );
};

export const CheckboxList = (items, handleCheckboxChange) => {
  return items.map((item, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "1rem",
        padding: "5px 10px",
      }}
    >
      <input
        id={item.id}
        type="checkbox"
        value={item.id}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={item.id} style={{ margin: "0", marginLeft: "7px" }}>
        {item.name}
      </label>
    </div>
  ));
};
export const SortList = ({ onClick }) => {
  const items = [
    "Phổ biến",
    "Bán chạy",
    "Hàng mới",
    "Giá thấp đến cao",
    "Giá cao đến thấp",
  ];
  const [selected, setSelected] = React.useState(0);
  const handelClick = (index) => {
    setSelected(index);
    onClick(items[index]);
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
export const buildUrl = (path, params = [], query = {}) => {
  let url = path;

  if (params.length > 0) {
    params.forEach((param) => {
      url += `/${param}`;
    });
  }
  if (Object.keys(query).length > 0) {
    const queryParams = new URLSearchParams(query);
    const queryString = queryParams.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
  }

  return url;
};

export const CustomLink = ({ to, children, style }) => (
  <Link
    to={to}
    style={{
      textDecoration: "none",
      color: "inherit",
      ...style,
    }}
  >
    {children}
  </Link>
);
