import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GradeIcon from "@mui/icons-material/Grade";
import Rating from "@mui/material/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DoneIcon from "@mui/icons-material/Done";
import StarIcon from "@mui/icons-material/Star";
import ChatIcon from "@mui/icons-material/Chat";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./ProductDetail.css";
import axios from "axios";
import { RepeatOneSharp } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";
import Header from "components/header/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [isChange, setIsChange] = useState(false);
  const [isChange1, setIsChange1] = useState(false);
  const [isChange2, setIsChange2] = useState(false);
  const [isChange3, setIsChange3] = useState(false);
  const [isChange4, setIsChange4] = useState(false);
  const [isChange5, setIsChange5] = useState(false);

  const [currentItem, setCurrentItem] = useState({});
  const [item, setItem] = useState({});
  const [specific_item, setSpecificItem] = useState([]);
  const [seller, setSeller] = useState({});
  const [similarProduct, setSimilarProduct] = useState([]);
  const slideContainerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  const Click = () => {
    setIsChange(!isChange);
  };
  const Click1 = () => {
    setIsChange1(!isChange1);
  };
  const Click2 = () => {
    setIsChange2(!isChange2);
  };
  const Click3 = () => {
    setIsChange3(!isChange3);
  };
  const Click4 = () => {
    setIsChange4(!isChange4);
  };
  const Click5 = () => {
    setIsChange5(!isChange5);
  };
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleInputChange = (event) => {
    let value = event.target.value;
    var intValue = parseInt(value);
    if (value.charAt(0) === "0" && value > 0) {
      value = value.slice(1);
      intValue = parseInt(value);
      event.target.value = intValue;
    }
    setQuantity(intValue);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity >= 2) {
        return prevQuantity - 1;
      } else {
        return prevQuantity;
      }
    });
  };

  const convertValue = (value) => {
    if (value > 1000000) {
      return (value / 1000000).toFixed(1) + "tr";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "k";
    } else {
      return value;
    }
  };

  const addToCart = (e) => {
    e.preventDefault();
    if(localStorage.getItem('user') == null) {
      setTimeout(navigate("/SignIn"),500);
    } 
    else {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      const data = {
        item_id: currentItem.id,
        user_id: user.id,
        quantity: quantity,
      };
      axios
        .post(`http://localhost:8080/cart/add-cart`, data)
        .then((response) => {
          console.log(response.data);
          toast.success("Thêm vào giỏ hàng thành công");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    }

  const handleSlideLeft = () => {
    if (slideContainerRef.current) {
      const newScrollLeft = scrollLeft - 860; // Điều chỉnh giá trị 210 tùy thuộc vào kích thước của mỗi phần tử sản phẩm
      setScrollLeft(newScrollLeft);
      slideContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleSlideRight = () => {
    if (slideContainerRef.current) {
      const newScrollLeft = scrollLeft + 860; // Điều chỉnh giá trị 210 tùy thuộc vào kích thước của mỗi phần tử sản phẩm
      setScrollLeft(newScrollLeft);
      slideContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  //funtion for SelectedOption
  const toggleOption = (item) => {
    setCurrentItem(item);
  };

  const FetchSpecificItem = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/item/get-item-specific-by-origin-id/${id}`
      );
      setSpecificItem(response.data.data);
      setCurrentItem(response.data.data[0]);
      // console.log(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const FetchItem = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/item/get-item-by-id/${id}`
      );
      setItem(response.data.data[0]);
      console.log(response.data.data[0]);
      localStorage.setItem("item", JSON.stringify(response.data.data[0]));
    } catch (error) {
      console.log(error);
    }
  };

  const getSeller = async () => {
    try {
      const _item = JSON.parse(localStorage.getItem("item"));
      const response = await axios.get(
        `http://localhost:8080/seller/get-seller-by-id/${_item.seller_id}`
      );
      setSeller(response.data.data);
      // const item=localStorage.getItem("item");
      // console.log(item);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProduct = async () => {
    try {
      const _item = JSON.parse(localStorage.getItem("item"));
      const response = await axios.get(
        `http://localhost:8080/item/get-item-by-category/${_item.category_id}`
      );
      setSimilarProduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      const _item = JSON.parse(localStorage.getItem("item"));
      const response = await axios.get(
        `http://localhost:8080/rate/get-rate/${_item.id}`
      );
      setComments(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      await FetchItem();
      await FetchSpecificItem();
      await getSeller();
      await getSimilarProduct();
      await getComments();
    };

    fetchData();
  }, []);

  function createMarkup(description) {
    return { __html: description };
  }

  function MyComponent({ description }) {
    return <div dangerouslySetInnerHTML={createMarkup(description)} />;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [currentPageData, setCurrentPageData] = useState([]);

  useEffect(() => {
    const offset = (currentPage - 1) * itemsPerPage;
    const newData = comments.slice(offset, offset + itemsPerPage);
    setCurrentPageData(newData);
    console.log(comments);
    console.log(newData);
    console.log(currentPage);
  }, [currentPage, comments]);

  const handleChangePage = (event, page) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <div className="Container">
        {/* Product Wrapper */}
        <div className="product-wrapper">
          <div className="image-box">
            <img
              src={currentItem.img}
              className="product-image"
              alt="Ảnh sản phẩm"
            />
          </div>

          <div className="seperate"></div>

          <div className="product-detail">
            <div className="title">
              <Typography style={{}} variant="h4" gutterBottom>
                {item.name}
              </Typography>
              <div className="rate">
                <div className="rate-amout">( {item.rate})</div>
                <span
                  className="span"
                  style={{ color: "rgba(120,120,120,0.5)" }}
                >
                  |
                </span>
                <div className="purchase-amount">{item.number_sold} đã bán</div>
              </div>

              <div style={{ display: "flex" }}>
                {/* Left */}
                <div className="left">
                  <div className="price">
                    <div className="current-price">{currentItem.price}₫</div>
                  </div>

                  <div className="optionList_Wrapper">
                    {specific_item.map(
                      (item, index) =>
                        item.name !== "" && (
                          <div
                            className={`option ${
                              item === currentItem ? "selected_Option" : ""
                            }`}
                            key={index}
                            onClick={() => toggleOption(item)}
                          >
                            {item.name}
                            {item === currentItem && (
                              <img
                                className="done-img"
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
                                alt=""
                              />
                            )}
                          </div>
                        )
                    )}
                  </div>

                  <div
                    className="delivery-zone"
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    Giao đến{" "}
                    <span className="address span">
                      Q.Hoàng Mai, P.Mai Động, Hà Nội
                    </span>{" "}
                    <span className="address-change span">Đổi địa chỉ</span>
                  </div>

                  <div className="shipping-info">
                    <div className="shipping-info_header">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/67/e4/c2/02b5400b39bb3371e06d33c1e9f4d854.png"
                        alt="Fast"
                        style={{ height: "12px" }}
                      />
                      <div
                        className="shipping-info_time"
                        style={{ color: "#00AB56" }}
                      >
                        Thứ 7, ngày 13/5
                      </div>
                    </div>
                    <div className="shipping-info_fee">Vận chuyển: 18.000đ</div>
                  </div>

                  <div className="add-to-card">
                    <div className="quantity-box">
                      <label
                        htmlFor=""
                        className="quantity-label"
                        style={{ color: "#000000" }}
                      >
                        Số Lượng:
                      </label>
                      <div className="group-input">
                        <RemoveIcon
                          className="remove-btn"
                          onClick={handleDecrement}
                        ></RemoveIcon>
                        <input
                          type="number"
                          value={quantity}
                          min={0}
                          onChange={(e) => handleInputChange(e)}
                          className="amount-btn"
                        />
                        <AddIcon
                          className="add-btn"
                          onClick={handleIncrement}
                        ></AddIcon>
                      </div>
                      <div className="group-btn">
                        <Button
                          onClick={addToCart}
                          style={{
                            backgroundColor: "#ff3945",
                            height: "48px",
                            width: "232px",
                          }}
                          variant="contained"
                        >
                          Chọn mua
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="right">
                  <div className="seller-info">
                    <img src={seller.img_url} alt="" className="brand-img" />
                    <div className="brand-box" style={{ marginLeft: "10px" }}>
                      <span
                        style={{ color: "#000000" }}
                        className="brand-name span"
                      >
                        {seller.name}
                      </span>
                      <img
                        src="https://salt.tikicdn.com/cache/w100/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png.webp"
                        alt="Official"
                        className="official-img"
                      />
                    </div>
                  </div>
                  <div className="rating-and-follower">
                    <div className="rating">
                      <div className="rating-title">
                        {convertValue(seller.rating)} / 5
                        <GradeIcon
                          style={{
                            color: "rgb(255,193,32)",
                            width: "16px",
                            height: "16px",
                          }}
                        ></GradeIcon>
                      </div>
                      <div className="subtitle">
                        {convertValue(seller.review_count)}+
                      </div>
                    </div>
                    <div className="follower">
                      <div className="follower-title">
                        {convertValue(seller.followers)}
                      </div>
                      <div className="subtitle">Theo dõi</div>
                    </div>
                  </div>
                  <Stack
                    style={{ margin: "10px 0" }}
                    spacing={2}
                    direction="row"
                  >
                    <Button className="button-icon" variant="outlined" onClick={() => navigate(`/shop/${item.seller_id}`)}>
                      <StorefrontOutlinedIcon
                        style={{
                          marginRight: "8px",
                        }}
                      ></StorefrontOutlinedIcon>{" "}
                      Xem Shop
                    </Button>
                    <Button className="button-icon" variant="outlined">
                      <AddIcon style={{ marginRight: "8px" }}></AddIcon>Theo Dõi
                    </Button>
                  </Stack>
                  <hr
                    style={{
                      margin: "10px -10px",
                    }}
                  />
                  <div className="warranty-detail">
                    <span className="warranty-label span">
                      Thời gian bảo hành:
                    </span>
                    <span className="warranty-detail span">1 năm</span>
                    <span className="warranty-label span">
                      Hình thức bảo hành
                    </span>{" "}
                    <span className="warranty-detail span">Phiếu bảo hành</span>
                    <span className="warranty-label span">
                      Nơi bảo hành
                    </span>{" "}
                    <span className="warranty-detail span">
                      Bảo hành bởi nhà bán hàng thông qua Tiki
                    </span>
                  </div>
                  <hr
                    style={{
                      margin: "10px -10px",
                      backgroundColor: "rgba(120,120,120,0.3)",
                    }}
                  />
                  <div className="grid-box">
                    <div className="benefit">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/2c/48/44/720434869e103b03aaaf1a104d91ad25.png"
                        className="benefit-img"
                        alt=""
                      />
                      <div className="benefit-label">
                        Hoàn tiền 111% nếu hàng giả
                      </div>
                    </div>
                    <div className="benefit">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/4b/a1/23/1606089d5423e5cba05e3820ad39708e.png"
                        className="benefit-img"
                        alt=""
                      />
                      <div className="benefit-label">
                        Mở hộp kiểm tra nhận hàng
                      </div>
                    </div>
                    <div className="benefit">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/63/75/6a/144ada409519d72e2978ad2c61bc02a7.png"
                        className="benefit-img"
                        alt=""
                      />
                      <div className="benefit-label">
                        Đổi trả hàng trong <strong>7 ngày</strong> nếu sp lỗi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sản phầm tương tự */}
        <div className="product-slide">
          <div className="block-title">
            <h2>Sản Phẩm Tương Tự</h2>
          </div>
          <div id="scrollableDiv" className="scrollable-container">
            <div className="slideContainer" ref={slideContainerRef}>
              {similarProduct.slice(0, 18).map((item, index) => (
                <div
                  className="product"
                  onClick={() => {
                    navigate(`/chi-tiet-san-pham/${item.id}`);
                    window.location.reload();
                  }}
                  key={index}
                >
                  <img
                    src={item.img}
                    alt=""
                    style={{ width: "176px", height: "176px" }}
                  />
                  <div className="info">
                    <span className="span" style={{ color: "#ff424e" }}>
                      {item.price} ₫
                    </span>
                    <h4 className="productName">{item.name}</h4>
                    <div className="item_review">
                      <span className="span" style={{ color: "#808089" }}>
                        {item.rate}{" "}
                        <StarIcon style={{ color: "rgb(255,213,46)" }} />
                      </span>
                      <div style={{ margin: "0 5px 4px 5px" }}>|</div>
                      <div style={{ fontSize: "12px", marginTop: "2px" }}>
                        Đã bán {item.number_sold}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button id="slide_left_btn" onClick={handleSlideLeft}>
              <NavigateBeforeIcon style={{ marginLeft: "-4px" }} />
            </button>
            <button id="slide_right_btn" onClick={handleSlideRight}>
              <NavigateNextIcon style={{ marginLeft: "-4px" }} />
            </button>
          </div>
        </div>

        {/* Info Detail */}
        <div className="container-info">
          <div className="info-detail">
            <h2>Thông Tin Chi Tiết</h2>
            <div className="content-table">
              <table className="content-table">
                <tbody>
                  <tr>
                    <td>Thương hiệu</td>
                    <td>Renax</td>
                  </tr>
                  <tr>
                    <td>Xuất sứ thương hiệu</td>
                    <td>Hong Kong</td>
                  </tr>
                  <tr>
                    <td>Kích thước</td>
                    <td>31.6*32.6*42mm</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>RP-U25</td>
                  </tr>
                  <tr>
                    <td>Xuất sứ</td>
                    <td>Trung Quốc</td>
                  </tr>
                  <tr>
                    <td>Thương hiệu</td>
                    <td>Renax</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="container-info_img">
            <img
              src="https://salt.tikicdn.com/cache/w1080/ts/tka/12/38/43/e03d71a9ded46b8027026c0e48720603.png.webp"
              style={{
                width: "290px",
                height: "490px",
              }}
              alt=""
            />
          </div>
        </div>

        {/* Product Description */}
        <div className="product-description">
          <h2>Mô Tả Sản Phẩm</h2>
          <div className="description">
            <MyComponent description={item.description} />
          </div>
        </div>

        {/* Customer Review */}
        <div className="customer-review">
          <div className="header">Đánh Giá - Nhận Xét Từ Khách Hàng</div>
          <div className="customer-review_top">
            <div className="rating-overview">
              <div className="review-rating_summary">
                <div className="review-rating_point">{item.rate}</div>
                <div className="review-rating_star">
                  <div className="starts">
                    <Rating
                      name="size-medium"
                      defaultValue={5}
                      readOnly
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "rgb(255,213,46)",
                        },
                      }}
                    />
                  </div>
                  <div className="review-rating_total">
                    {item.number_of_rating} nhận xét
                  </div>
                </div>
              </div>
              <div className="review-rating_level">
                <Rating
                  name="size-small"
                  defaultValue={5}
                  readOnly
                  size="small"
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "rgb(255,213,46)",
                    },
                  }}
                />
                <div className="rating-bar">
                  <div
                    className="rating-bar_filled"
                    style={{ width: "94%" }}
                  ></div>
                </div>
                <div className="review-rating_number">227</div>
              </div>
              <div className="review-rating_level">
                <Rating
                  name="size-small"
                  defaultValue={4}
                  readOnly
                  size="small"
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "rgb(255,213,46)",
                    },
                  }}
                />
                <div className="rating-bar">
                  <div
                    className="rating-bar_filled"
                    style={{ width: "4%" }}
                  ></div>
                </div>
                <div className="review-rating_number">12</div>
              </div>
              <div className="review-rating_level">
                <Rating
                  name="size-small"
                  defaultValue={3}
                  readOnly
                  size="small"
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "rgb(255,213,46)",
                    },
                  }}
                />
                <div className="rating-bar">
                  <div
                    className="rating-bar_filled"
                    style={{ width: "1%" }}
                  ></div>
                </div>
                <div className="review-rating_number">1</div>
              </div>
              <div className="review-rating_level">
                <Rating
                  name="size-small"
                  defaultValue={2}
                  readOnly
                  size="small"
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "rgb(255,213,46)",
                    },
                  }}
                />
                <div className="rating-bar">
                  <div
                    className="rating-bar_filled"
                    style={{ width: "1%" }}
                  ></div>
                </div>
                <div className="review-rating_number">1</div>
              </div>
              <div className="review-rating_level">
                <Rating
                  name="size-small"
                  defaultValue={1}
                  readOnly
                  size="small"
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "rgb(255,213,46)",
                    },
                  }}
                />
                <div className="rating-bar">
                  <div
                    className="rating-bar_filled"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <div className="review-rating_number">0</div>
              </div>
            </div>
            <div className="review-filter">
              <div>Lọc xem theo:</div>
              <div className="review-star five clickable" onClick={Click}>
                {isChange ? (
                  <div className="review-clicked">
                    <DoneIcon
                      size="large"
                      fontSize="large"
                      className="medium-icon"
                    ></DoneIcon>
                    Mới nhất
                  </div>
                ) : (
                  <div>Mới nhất</div>
                )}
              </div>
              <div className="review-star five clickable" onClick={Click5}>
                {isChange5 ? (
                  <div className="review-clicked">
                    <DoneIcon fontSize="large"></DoneIcon>5
                    <StarIcon
                      fontSize="large"
                      style={{ color: "rgb(255,213,46)" }}
                    ></StarIcon>
                  </div>
                ) : (
                  <div>
                    5
                    <StarOutlineIcon
                      fontSize="large"
                      size="large"
                    ></StarOutlineIcon>
                  </div>
                )}
              </div>

              <div className="review-star five clickable" onClick={Click4}>
                {isChange4 ? (
                  <div className="review-clicked">
                    <DoneIcon fontSize="large"></DoneIcon>4
                    <StarIcon
                      fontSize="large"
                      style={{ color: "rgb(255,213,46)" }}
                    ></StarIcon>
                  </div>
                ) : (
                  <div>
                    4
                    <StarOutlineIcon
                      fontSize="large"
                      size="large"
                    ></StarOutlineIcon>
                  </div>
                )}
              </div>

              <div className="review-star five clickable" onClick={Click3}>
                {isChange3 ? (
                  <div className="review-clicked">
                    <DoneIcon fontSize="large"></DoneIcon>3
                    <StarIcon
                      fontSize="large"
                      style={{ color: "rgb(255,213,46)" }}
                    ></StarIcon>
                  </div>
                ) : (
                  <div>
                    3
                    <StarOutlineIcon
                      fontSize="large"
                      size="large"
                    ></StarOutlineIcon>
                  </div>
                )}
              </div>

              <div className="review-star five clickable" onClick={Click2}>
                {isChange2 ? (
                  <div className="review-clicked">
                    <DoneIcon fontSize="large"></DoneIcon>2
                    <StarIcon
                      fontSize="large"
                      style={{ color: "rgb(255,213,46)" }}
                    ></StarIcon>
                  </div>
                ) : (
                  <div>
                    2
                    <StarOutlineIcon
                      fontSize="large"
                      size="large"
                    ></StarOutlineIcon>
                  </div>
                )}
              </div>

              <div className="review-star five clickable" onClick={Click1}>
                {isChange1 ? (
                  <div className="review-clicked">
                    <DoneIcon fontSize="large"></DoneIcon>1
                    <StarIcon
                      fontSize="large"
                      style={{ color: "rgb(255,213,46)" }}
                    ></StarIcon>
                  </div>
                ) : (
                  <div>
                    1
                    <StarOutlineIcon
                      fontSize="large"
                      size="large"
                    ></StarOutlineIcon>
                  </div>
                )}
              </div>
            </div>
          </div>

          {currentPageData.map((comment, index) => (
            <div key={index}>
              <hr style={{ margin: "15px -15px 0 -30px" }} />
              <div className="review-comment">
                <div className="review-comment_user">
                  <div className="review-comment_user-inner">
                    <div>
                      <img src={comment.user.avatar} className="user-img" />
                    </div>
                    <div className="user-name-and-date">
                      <div className="user-name">{comment.user.name}</div>
                      {/* <div className="user-date">Đã tham gia 2 năm trước</div> */}
                    </div>
                  </div>
                  {/* <div className="review-comment_info"><ChatIcon style={{width:'20px',height:'20px',marginRight:"8px",color:'rgb(128,128,137)'}}></ChatIcon><span style={{paddingBottom:'2px',color:'rgb(56,56,61)'}}>Đã viết 6 đánh giá</span></div>
              <div className="review-comment_info"><ThumbUpAltOutlinedIcon style={{width:'20px',height:'20px',marginRight:"8px",color:'rgb(128,128,137)'}}></ThumbUpAltOutlinedIcon ><span style={{paddingBottom:'2px',color:'rgb(56,56,61)'}}>Đã nhận 1 lời cảm ơn</span></div> */}
                </div>
                <div className="review-comment_detail">
                  <div className="review-comment_title">
                    <Rating
                      name="size-medium"
                      defaultValue={5}
                      readOnly
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "rgb(255,213,46)",
                        },
                      }}
                    />
                    <p style={{ margin: "3px 0 0 0" }}>{comment.title}</p>
                  </div>
                  <div className="bought">
                    <CheckCircleIcon
                      style={{
                        width: "14px",
                        height: "14px",
                        paddingTop: 3,
                      }}
                    />
                    <p style={{ margin: 0 }}> Đã mua hàng</p>
                  </div>
                  <div
                    className="review-comment_content"
                    style={{ fontSize: "13px" }}
                  >
                    <p>{comment.comment}</p>
                  </div>
                  {/* <div className="created-date">
                Đánh giá vào 1 năm trước . Đã dùng 1 tháng trước
              </div> */}
                  <div className="button-list">
                    <Stack spacing={2} direction="row">
                      <Button variant="outlined">
                        <ThumbUpAltOutlinedIcon
                          style={{
                            marginRight: 6,
                          }}
                        />{" "}
                        Hữu ích
                      </Button>
                      <Button variant="text">Bình luận</Button>
                      <Button variant="text">Đánh giá</Button>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Pagination
            count={Math.ceil(comments.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
            color="primary"
            style={{ float: "right" }}
          />
          <div style={{ clear: "right" }}></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDetail;
