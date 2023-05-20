import './misc.css';
import React from 'react';
export const RatingStar = ({rating}) => {
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
}
export const SideBar = ({children}) => {
    return (
        <div className="side-bar">
            {children}
        </div>
    );
}
export const SideCard = ({title, children, hiddenContent}) => {
    const [expand, setExpand] = React.useState(false);
    const expandable = hiddenContent !== undefined;
    return (
        <div className="side-card">
            <h6>{title}</h6>
            {children}
            {expand && hiddenContent}
            {expandable && 
            <div className="expand-btn" onClick={() => setExpand(!expand)}>
                {expand ? 'Thu gọn' : 'Xem thêm'}
            </div>}
        </div>
    )
}

export const CheckList = ({items}) => {
    return (
        <ul class="list-group check-list">
            {items.map((item, index) => {
                return (
                    <li key={index} >
                            <input type="checkbox" id={item}/>
                            <label for={item}>{item}</label>
                    </li>
                )
            })}
        </ul>
    )
}
export const ListFilter = () => {
    const items = ["Phổ biến", "Bán chạy", "Hàng mới", "Giá thấp đến cao", "Giá cao đến thấp"];
    const [selected, setSelected] = React.useState(items[0]);
    const handelClick = (item) => {
        setSelected(item);
    }
    return (
        <ul class="list-group list-filter">
            {items.map((item, index) => {
                return (
                    <li key={index} class={item===selected ? "active" : ""} onClick={() => handelClick(item)}>
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}
