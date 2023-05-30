import React, { useState, useRef } from 'react';
import { Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GradeIcon from '@mui/icons-material/Grade';
import Rating from '@mui/material/Rating';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DoneIcon from '@mui/icons-material/Done';
import StarIcon from '@mui/icons-material/Star';
import ChatIcon from '@mui/icons-material/Chat';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "./OrderDetail.css"


function OrderDetail() {
  const [quantity, setQuantity] = useState(1);
  const [isChange,setIsChange] = useState(false);
  const [isChange1,setIsChange1] = useState(false);
  const [isChange2,setIsChange2] = useState(false);
  const [isChange3,setIsChange3] = useState(false);
  const [isChange4,setIsChange4] = useState(false);
  const [isChange5,setIsChange5] = useState(false);

  const Click = () => { setIsChange(!isChange)}
  const Click1 = () => { setIsChange1(!isChange1)}
  const Click2 = () => { setIsChange2(!isChange2)}
  const Click3 = () => { setIsChange3(!isChange3)}
  const Click4 = () => { setIsChange4(!isChange4)}
  const Click5 = () => { setIsChange5(!isChange5)}

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleInputChange = (event) => {
    let value = event.target.value;    
    var intValue = parseInt(value);
    if (value.charAt(0) === '0' && value > 0) {
      value = value.slice(1);
      intValue = parseInt(value);
      event.target.value = intValue;
    }   
    setQuantity(intValue);
  }
  
  const handleDecrement = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity >= 1) {
        return prevQuantity - 1;
      } else {
        return prevQuantity;
      }
    });
  };

  //funtion for SLideContainer
  const slideContainerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleSlideLeft = () => {
    if (slideContainerRef.current) {
      const newScrollLeft = scrollLeft - 860; // Điều chỉnh giá trị 210 tùy thuộc vào kích thước của mỗi phần tử sản phẩm
      setScrollLeft(newScrollLeft);
      slideContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleSlideRight = () => {
    if (slideContainerRef.current) {
      const newScrollLeft = scrollLeft + 860; // Điều chỉnh giá trị 210 tùy thuộc vào kích thước của mỗi phần tử sản phẩm
      setScrollLeft(newScrollLeft);
      slideContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };
  

  //funtion for SelectedOption
  const toggleOption = (event) => {
    // Xóa lớp "selected_Option" từ tất cả các "option" trong cùng container
    const container = event.target.parentNode;
    const options = container.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('selected_Option');
    }

    // Thêm lớp "selected_Option" cho "option" được nhấp vào
    event.target.classList.add('selected_Option');
}

  return (
    <div className='Container'>

      { /* Product Wrapper */}
      <div className="product-wrapper">
        <div className="image-box">
            <img src="https://salt.tikicdn.com/cache/750x750/ts/product/5c/fe/ce/9fd1c4c8a19669a1d53349509e91233a.jpg.webp" className='product-image' alt="Ảnh sản phẩm" />
        </div>

        <div className="seperate"></div>

        <div className="product-detail">
            <div className="title">
            <Typography style={{         
            }} variant="h4" gutterBottom>
            Củ sạc siêu nhanh 65W Remax RP-U55 - 2 typeC 1 USB - Hàng chính hãng
            </Typography>
            <div className="rate">
              <div className="rate-amout">(Xem 28 đánh giá)</div>
              <span style={{color:'rgba(120,120,120,0.5)'}}>|</span>
              <div className="purchase-amount">87 đã bán</div>
            </div>

           <div style={{display:'flex'}}>

            {/* Left */}
           <div className="left">
              <div className="price">
                <div className="current-price">250.000 ₫</div>
              </div>

              <div className="optionList_Wrapper">
                 {/* <p className="color">Màu : <span style={{color:'#242424', display:'inline'}}>Black</span></p> */}
                 <div className="option" onClick={toggleOption}>
                  Hồng
                  <img className='done-img' src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg" alt="" />
                 </div>
                 <div  className="option " onClick={toggleOption}>
                  Đen
                  <img className='done-img' src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg" alt="" />
                 </div>
              </div>
              <div className="delivery-zone" style={{display:'flex', gap:'5px', alignItems:'center'}}>
                Giao đến <span className='address'>Q.Hoàng Mai, P.Mai Động, Hà Nội</span> <span className="address-change">Đổi địa chỉ</span>
              </div>

              <div className="shipping-info">
                <div className="shipping-info_header">
                  <img src='https://salt.tikicdn.com/ts/upload/67/e4/c2/02b5400b39bb3371e06d33c1e9f4d854.png' alt='Fast' style={{height:'12px'}}/>
                  <div className="shipping-info_time" style={{color:'#00AB56'}}>Thứ 7, ngày 13/5</div>
                </div>
                <div className="shipping-info_fee">Vận chuyển: 18.000đ</div>
              </div>

              <div className="add-to-card">
                <div className="quantity-box">
                  <label htmlFor="" className="quantity-label" style={{color:'#000000'}}>Số Lượng:</label>
                  <div className="group-input">
                    <RemoveIcon className='remove-btn' onClick={handleDecrement}></RemoveIcon>
                    <input type="number" value={quantity} min={0}  onChange={e => handleInputChange(e)} className="amount-btn" />
                    <AddIcon className='add-btn' onClick={handleIncrement}></AddIcon>
                  </div>
                  <div className="group-btn">
                  <Button style={{
                     backgroundColor: '#ff3945',
                     height:'48px',
                     width: '232px'
                     }} variant="contained">Chọn mua</Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right */}
            <div className="right">
              <div className="seller-info">
                <img src="https://vcdn.tikicdn.com/cache/w100/ts/seller/78/84/17/cc0779598acc61ec6e81c73f1c90d49d.jpg.webp" alt="" className="brand-img" />
                <div className="brand-box" style={{marginLeft:'10px'}}>
                  <span style={{color:'#000000'}} className="brand-name">ICybernet Official Store</span>
                  {/* <br style={{
                    width:'100%',
                    border:'none'
                    }} /> */}
                  <img src="https://salt.tikicdn.com/cache/w100/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png.webp" alt="Official" className="official-img" />
                </div>
              </div>
              <div className="rating-and-follower">
                <div className="rating">
                  <div className='rating-title'>4.7 / 5<GradeIcon style={{
                      color:'rgb(255,193,32)',
                      width: '16px',
                      height: '16px'
                    }}></GradeIcon>
                  </div>
                  <div className='subtitle'>5.3tr+</div>
                </div>
                <div className="follower">
                  <div className="follower-title">
                    472.8k
                  </div>
                  <div className="subtitle">Theo dõi</div>
                </div>
              </div>
              <Stack style={{margin:'10px 0'}} spacing={2} direction="row">
                <Button className='button-icon' variant="outlined">
                  <StorefrontOutlinedIcon style={{
                    marginRight:'8px',
                    }}></StorefrontOutlinedIcon> Xem Shop
                </Button>
                <Button className='button-icon' variant="outlined">
                  <AddIcon style={{marginRight:'8px'}}></AddIcon>Theo Dõi
                </Button>
              </Stack>
              <hr style={{
                margin:'10px -10px'
              }} />
              <div className="warranty-detail">
                <span className='warranty-label'>Thời gian bảo hành:</span><span className='warranty-detail'>1 năm</span>
                <span className='warranty-label'>Hình thức bảo hành</span> <span className='warranty-detail'>Phiếu bảo hành</span>
                <span className='warranty-label'>Nơi bảo hành</span> <span className='warranty-detail'>Bảo hành bởi nhà bán hàng thông qua Tiki</span>
              </div>
              <hr style={{
                  margin:'10px -10px',
                  backgroundColor:'rgba(120,120,120,0.3)'
                }} />
              <div className="grid-box">
                <div className="benefit">
                  <img src="https://salt.tikicdn.com/ts/upload/2c/48/44/720434869e103b03aaaf1a104d91ad25.png" className='benefit-img' alt="" />
                  <div className='benefit-label'>Hoàn tiền 111% nếu hàng giả</div>
                </div>
                <div className="benefit">
                  <img src="https://salt.tikicdn.com/ts/upload/4b/a1/23/1606089d5423e5cba05e3820ad39708e.png" className='benefit-img' alt="" />
                  <div className='benefit-label'>Mở hộp kiểm tra nhận hàng</div>
                </div>
                <div className="benefit">
                  <img src="https://salt.tikicdn.com/ts/upload/63/75/6a/144ada409519d72e2978ad2c61bc02a7.png" className='benefit-img' alt="" />
                  <div className='benefit-label'>Đổi trả hàng trong <strong>7 ngày</strong> nếu sp lỗi</div>
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
        <div id="scrollableDiv" class="scrollable-container">
          <div class="slideContainer" ref={slideContainerRef}>
                <div className="product">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/ff/56/67/179201822da2de5592fe3675192c9c63.png.webp" alt="" style={{width:"176px", height:"176px"}} />
                  <div className="info">
                    <span style={{color:"#ff424e"}}>13.860.000 ₫</span>
                    <h7>Apple Ipad Air (5th Gen)</h7>
                    <div className="item_review">
                      <span style={{color:"#808089"}}>4.95 <StarIcon style={{color:'rgb(255,213,46)'}} /></span> 
                      <div style={{margin:"0 5px 4px 5px",}}>|</div>
                      <div style={{fontSize:"12px",marginTop:"2px"}}>Đã bán 887</div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/78/0b/74/d39dc3770433c28e4e0d858daac0319f.jpg.webp" alt="" style={{width:"176px", height:"176px"}} />
                  <div className="info">
                    <span style={{color:"#ff424e"}}>13.860.000 ₫</span>
                    <h7>Apple Ipad Air (5th Gen)</h7>
                    <div className="item_review">
                      <span style={{color:"#808089"}}>4.95 <StarIcon style={{color:'rgb(255,213,46)'}} /></span> 
                      <div style={{margin:"0 5px 4px 5px",}}>|</div>
                      <div style={{fontSize:"12px",marginTop:"2px"}}>Đã bán 887</div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/c8/b6/c3/0000d6c170846892608d67af10f33db5.png.webp" alt="" style={{width:"176px", height:"176px"}} />
                  <div className="info">
                    <span style={{color:"#ff424e"}}>13.860.000 ₫</span>
                    <h7>Apple Ipad Air (5th Gen)</h7>
                    <div className="item_review">
                      <span style={{color:"#808089"}}>4.95 <StarIcon style={{color:'rgb(255,213,46)'}} /></span> 
                      <div style={{margin:"0 5px 4px 5px",}}>|</div>
                      <div style={{fontSize:"12px",marginTop:"2px"}}>Đã bán 887</div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3e/0c/19/4aa5e638285d5481bd2d287ab24586b9.jpg.webp" alt="" style={{width:"176px", height:"176px"}} />
                  <div className="info">
                    <span style={{color:"#ff424e"}}>13.860.000 ₫</span>
                    <h7>Apple Ipad Air (5th Gen)</h7>
                    <div className="item_review">
                      <span style={{color:"#808089"}}>4.95 <StarIcon style={{color:'rgb(255,213,46)'}} /></span> 
                      <div style={{margin:"0 5px 4px 5px",}}>|</div>
                      <div style={{fontSize:"12px",marginTop:"2px"}}>Đã bán 887</div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/6f/be/81/b91b333aca551218ab926ab7215e7d9b.jpg.webp" alt="" style={{width:"176px", height:"176px"}} />
                  <div className="info">
                    <span style={{color:"#ff424e"}}>13.860.000 ₫</span>
                    <h7>Apple Ipad Air (5th Gen)</h7>
                    <div className="item_review">
                      <span style={{color:"#808089"}}>4.95 <StarIcon style={{color:'rgb(255,213,46)'}} /></span> 
                      <div style={{margin:"0 5px 4px 5px",}}>|</div>
                      <div style={{fontSize:"12px",marginTop:"2px"}}>Đã bán 887</div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/93/da/1f/434172e0da3ba8a9c5c1b76a7d44c0f7.jpg.webp" alt="" style={{width:"176px", height:"176px"}} />
                  <div className="info">
                    <span style={{color:"#ff424e"}}>13.860.000 ₫</span>
                    <h7>Apple Ipad Air (5th Gen)</h7>
                    <div className="item_review">
                      <span style={{color:"#808089"}}>4.95 <StarIcon style={{color:'rgb(255,213,46)'}} /></span> 
                      <div style={{margin:"0 5px 4px 5px",}}>|</div>
                      <div style={{fontSize:"12px",marginTop:"2px"}}>Đã bán 887</div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/ee/6c/16/14ed3ed183d642ac66a949e519f2eaf2.jpg.webp" alt="" style={{width:"176px", height:"176px"}} />
                  <div className="info">
                    <span style={{color:"#ff424e"}}>13.860.000 ₫</span>
                    <h7>Apple Ipad Air (5th Gen)</h7>
                    <div className="item_review">
                      <span style={{color:"#808089"}}>4.95 <StarIcon style={{color:'rgb(255,213,46)'}} /></span> 
                      <div style={{margin:"0 5px 4px 5px",}}>|</div>
                      <div style={{fontSize:"12px",marginTop:"2px"}}>Đã bán 887</div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/ff/56/67/179201822da2de5592fe3675192c9c63.png.webp" alt="" style={{width:"176px", height:"176px"}} />
                  <div className="info">
                    <span style={{color:"#ff424e"}}>13.860.000 ₫</span>
                    <h7>Apple Ipad Air (5th Gen)</h7>
                    <div className="item_review">
                      <span style={{color:"#808089"}}>4.95 <StarIcon style={{color:'rgb(255,213,46)'}} /></span> 
                      <div style={{margin:"0 5px 4px 5px",}}>|</div>
                      <div style={{fontSize:"12px",marginTop:"2px"}}>Đã bán 887</div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/c8/b6/c3/0000d6c170846892608d67af10f33db5.png.webp" alt="" style={{width:"176px", height:"176px"}} />
                  <div className="info">
                    <span style={{color:"#ff424e"}}>13.860.000 ₫</span>
                    <h7>Apple Ipad Air (5th Gen)</h7>
                    <div className="item_review">
                      <span style={{color:"#808089"}}>4.95 <StarIcon style={{color:'rgb(255,213,46)'}} /></span> 
                      <div style={{margin:"0 5px 4px 5px",}}>|</div>
                      <div style={{fontSize:"12px",marginTop:"2px"}}>Đã bán 887</div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/3e/0c/19/4aa5e638285d5481bd2d287ab24586b9.jpg.webp" alt="" style={{width:"176px", height:"176px"}} />
                  <div className="info">
                    <span style={{color:"#ff424e"}}>13.860.000 ₫</span>
                    <h7>Apple Ipad Air (5th Gen)</h7>
                    <div className="item_review">
                      <span style={{color:"#808089"}}>4.95 <StarIcon style={{color:'rgb(255,213,46)'}} /></span> 
                      <div style={{margin:"0 5px 4px 5px",}}>|</div>
                      <div style={{fontSize:"12px",marginTop:"2px"}}>Đã bán 887</div>
                    </div>
                  </div>
                </div>               
          </div>
          <button id='slide_left_btn' onClick={handleSlideLeft}><NavigateBeforeIcon style={{marginLeft:"-4px"}}/></button>
          <button id="slide_right_btn" onClick={handleSlideRight}><NavigateNextIcon style={{marginLeft:"-4px"}}/></button>
          
      </div>

      </div>

      {/* Info Detail */}
      <div className="container-info">
        <div className="info-detail">
          <h2>Thông Tin Chi Tiết</h2>
          <div className="content-table">
            <table className='content-table'>
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
          <img src="https://salt.tikicdn.com/cache/w1080/ts/tka/12/38/43/e03d71a9ded46b8027026c0e48720603.png.webp" style={{
            width:"290px",
            height:'490px'
          }} alt="" />
        </div>
      </div>    

      {/* Product Description */}
      <div className="product-description">
          <h2>Mô Tả Sản Phẩm</h2>
          <p className="description">
          Như bạn có thể thấy, OPPO A16K là một chiếc điện thoại giá rẻ. 
          Nó dường như có thân máy được hoàn thiện từ chất liệu nhựa polycarbonate với các cạnh tròn.
           Đây cũng là nơi chứa cụm camera hình vuông nằm ở góc trên cùng bên trái để chứa 1 ống kính và đèn flash LED. Ở mặt trước, OPPO A16K sẽ sử dụng thiết kế notch hình giọt nước để chứa camera selfie và phần “cằm” tương đối dày.
          </p>
      </div>   
      
      {/* Customer Review */}
      <div className="customer-review">
        <div className="header">
          Đánh Giá - Nhận Xét Từ Khách Hàng
        </div>
        <div className="customer-review_top">
          <div className="rating-overview">
            <div className="review-rating_summary">
              <div className="review-rating_point">
                4.9
              </div>
              <div className="review-rating_star">
                <div className="starts">
                  <Rating name="size-medium" defaultValue={5} readOnly sx={{
                    "& .MuiRating-iconFilled": {
                      color: "rgb(255,213,46)"
                    }}} />
                </div>
                <div className="review-rating_total">
                  241 nhận xét
                </div>
              </div>
            </div>
            <div className="review-rating_level">
              <Rating name="size-small" defaultValue={5} readOnly size='small'  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "rgb(255,213,46)"
                    }}} />
              <div className="rating-bar">
                <div className='rating-bar_filled' style={{width:'94%'}}></div>
              </div>
              <div className="review-rating_number">227</div>
            </div>
            <div className="review-rating_level">
            <Rating name="size-small" defaultValue={4} readOnly size='small'  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "rgb(255,213,46)"
                    }}} />
              <div className="rating-bar">
                <div className='rating-bar_filled' style={{width:'4%'}}></div>
              </div>
              <div className="review-rating_number">12</div>
            </div>
            <div className="review-rating_level">
              <Rating name="size-small" defaultValue={3} readOnly size='small'  sx={{
                      "& .MuiRating-iconFilled": {
                        color: "rgb(255,213,46)"
                      }}} />
              <div className="rating-bar">
                <div className='rating-bar_filled' style={{width:'1%'}}></div>
              </div>
              <div className="review-rating_number">1</div>
            </div>
            <div className="review-rating_level">
              <Rating name="size-small" defaultValue={2} readOnly size='small'  sx={{
                      "& .MuiRating-iconFilled": {
                        color: "rgb(255,213,46)"
                      }}} />
              <div className="rating-bar">
                <div className='rating-bar_filled' style={{width:'1%'}}></div>
              </div>
              <div className="review-rating_number">1</div>
            </div>
            <div className="review-rating_level">
              <Rating name="size-small" defaultValue={1} readOnly size='small'  sx={{
                        "& .MuiRating-iconFilled": {
                          color: "rgb(255,213,46)"
                        }}} />
              <div className="rating-bar">
                <div className='rating-bar_filled' style={{width:'0%'}}></div>
              </div>
              <div className="review-rating_number">0</div>
            </div>
          </div>
          <div className="review-filter">
            <div>Lọc xem theo:</div>
            <div className="review-star five clickable" onClick ={Click}>
              {isChange? <div className='review-clicked'><DoneIcon></DoneIcon>Mới nhất</div> :
              <div>Mới nhất</div>}
            </div>
            <div className="review-star five clickable" onClick={Click5}>
              {isChange5? <div className='review-clicked'><DoneIcon></DoneIcon>5<StarIcon style={{color:'rgb(255,213,46)'}}></StarIcon></div> :
              <div>5<StarOutlineIcon></StarOutlineIcon></div>}
            </div>

            <div className="review-star five clickable" onClick={Click4}>
              {isChange4? <div className='review-clicked'><DoneIcon></DoneIcon>4<StarIcon style={{color:'rgb(255,213,46)'}}></StarIcon></div> :
              <div>4<StarOutlineIcon></StarOutlineIcon></div>}
            </div>

            <div className="review-star five clickable" onClick={Click3}>
              {isChange3? <div className='review-clicked'><DoneIcon></DoneIcon>3<StarIcon style={{color:'rgb(255,213,46)'}}></StarIcon></div> :
              <div>3<StarOutlineIcon></StarOutlineIcon></div>}
            </div>

            <div className="review-star five clickable" onClick={Click2}>
              {isChange2? <div className='review-clicked'><DoneIcon></DoneIcon>2<StarIcon style={{color:'rgb(255,213,46)'}}></StarIcon></div> :
              <div>2<StarOutlineIcon></StarOutlineIcon></div>}
            </div>

            <div className="review-star five clickable" onClick={Click1}>
              {isChange1? <div className='review-clicked'><DoneIcon></DoneIcon>1<StarIcon style={{color:'rgb(255,213,46)'}}></StarIcon></div> :
              <div>1<StarOutlineIcon></StarOutlineIcon></div>}
            </div>
          </div>
        </div>
        
        <hr style={{margin:'15px -15px 0 -30px'}}/>
        
        <div className="review-comment">
          <div className="review-comment_user">
            <div className="review-comment_user-inner">
              <div >
                <span className='user-img'>QC</span>
              </div>
              <div className="user-name-and-date">
                <div className="user-name">Quốc Cường</div>
                <div className="user-date">Đã tham gia 2 năm trước</div>
              </div>
              
            </div>
            <div className="review-comment_info"><ChatIcon style={{width:'20px',height:'20px',marginRight:"8px",color:'rgb(128,128,137)'}}></ChatIcon><span style={{paddingBottom:'2px',color:'rgb(56,56,61)'}}>Đã viết 6 đánh giá</span></div>
            <div className="review-comment_info"><ThumbUpAltOutlinedIcon style={{width:'20px',height:'20px',marginRight:"8px",color:'rgb(128,128,137)'}}></ThumbUpAltOutlinedIcon ><span style={{paddingBottom:'2px',color:'rgb(56,56,61)'}}>Đã nhận 1 lời cảm ơn</span></div>
          </div>
          <div className="review-comment_detail">
            <div className="review-comment_title">
              <Rating name="size-medium" defaultValue={5} readOnly sx={{
                      "& .MuiRating-iconFilled": {
                        color: "rgb(255,213,46)"
                      }}} />
              <p style={{margin:'3px 0 0 0' }}>Cực kì hài lòng</p>
            </div>
            <div className="bought">
              <CheckCircleIcon style={{
                width:'14px',
                height:'14px',
                paddingTop:3
              }}/><p style={{margin:0}}> Đã mua hàng</p>
            </div>
            <div className="review-comment_content" style={{fontSize:'13px'}}>
              <p>
              Viên thuốc nhỏ, dễ uống, vị ngọt ngọt, thích lắm.
              Tiki giao hàng sớm hơn dự kiến, đóng gói cẩn thận. 
              Tôi mới uống đuợc 1 tuẩn nên chưa đánh giá hiệu quả được. Hi vọng nó là hàng chính hãng vì tôi không biết cách kiểm tra mã vạch.
              </p>
            </div>
            <div className="created-date">
              Đánh giá vào 1 năm trước . Đã dùng 1 tháng trước
            </div>
            <div className="button-list">
              <Stack spacing={2} direction="row">
                <Button variant="outlined"><ThumbUpAltOutlinedIcon style={{
                  marginRight:6
                }}/> Hữu ích</Button>
                <Button variant="text">Bình luận</Button>
                <Button variant="text">Đánh giá</Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default OrderDetail

