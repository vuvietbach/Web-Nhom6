import Header from "components/header/header";
import danhmuc from "data/landingPageCategories.json";
import data from "./data/data.json";
import "./landingPage.css";
import { Carousel } from "react-bootstrap";
import { CustomLink } from "components/misc/misc";
import { useEffect } from "react";
import { getItemRecommendation } from "axiosAPI/API";
import ItemsContainer from "components/itemContainer/itemContainer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayRange, setItems } from "redux_code/dispatch";
import { selectDisplayItems } from "redux_code/selector";
export const CategoryList = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        const url = `/danh-muc/${item.id}`;
        return (
          <CustomLink to={url}>
            <a class="sidecard-button">
              { item.image_url && (
                <img src={item.image_url} alt={item.name} />
              )}
              <div>{item.name}</div>
            </a>
          </CustomLink>
        );
      })}
    </div>
  );
};
const  MoreButton = () => {
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    if (expand) {
      dispatch(setDisplayRange([0, 20]));
    } else {
      dispatch(setDisplayRange([0, 1000]));
    }
    setExpand(!expand);
  }
  return (
    <button type="button" class="btn btn-outline-primary" onClick={handleOnClick} style={{width:"100px"}}>
      {expand ? "Thu gọn" : "Xem thêm"}
    </button>
  )
}
const LandingPage = () => {
  const bst_noibat = data.bst_noibat;
  const thuong_hieu = data.thuong_hieu;
  const recom_button = data.recommendation;
  const displayItems = useSelector(selectDisplayItems);
  const dispatch = useDispatch();
  useEffect(() => {
    getItemRecommendation().then((data) => {
      dispatch(setItems(data));
      dispatch(setDisplayRange([0, 20]));

    })
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="body-container" style={{marginTop:"15px"}}>
        <div className="side-container">
          <div className="card">
            <h6 className="card-title">Danh mục</h6>
            <CategoryList data={danhmuc}></CategoryList>
          </div>
        </div>
        <div className="main-container">
          <div className="card ">
            <h5 className="card-title">Bộ sưu tập nổi bật</h5>
            <Carousel>
              <Carousel.Item>
                <div className="carousel-item-container">
                  {bst_noibat.map((item) => {
                    return <img src={item} />;
                  })}
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-item-container">
                  {thuong_hieu.map((item) => {
                    return <img src={item} />;
                  })}
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="card ">
            <h5 className="card-title">Thương hiệu chính hãng</h5>
            <Carousel>
              <Carousel.Item>
                <div className="carousel-item-container">
                  {bst_noibat.map((item) => {
                    return <img src={item} />;
                  })}
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-item-container">
                  {thuong_hieu.map((item) => {
                    return <img src={item} />;
                  })}
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="recommendation-container">
            <div className="card">
              <h5 className="card-title">Gợi ý hôm nay</h5>
            </div>
            <div class="recommendation-section">
              {recom_button.map((item) => {
                return (
                  <div class="recommendation-button">
                    <img src={item.image_url}></img>
                    <div>{item.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <ItemsContainer items={displayItems}></ItemsContainer>
          <div style={{display:"flex",justifyContent:"center",margin:"20px 0"}}>
              <MoreButton></MoreButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
