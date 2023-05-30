import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Header from "components/header/header";
import {
  ListFilter,
  RatingStar,
  SideCard,
  CheckList,
} from "components/misc/misc";
import "./productPage.css";
import { Pagination } from "@mui/material";
const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit">
    Trang chủ
  </Link>,
  <Link key="2" color="text.primary">
    Thời trang nam
  </Link>,
];

// const items = [
//     'https://salt.tikicdn.com/cache/w1080/ts/tikimsp/75/e6/eb/ac3c8bc53fcca5bfa1a7e2c6bb8aea77.png.webp',
//     'https://salt.tikicdn.com/cache/280x280/ts/product/a3/f3/c6/4955f365a9d35f7273f6c2cba8b47197.jpg.webp',
// ]
const dv_items = ["Now Giao Siêu Tốc 2H", "ASTRA+ Thưởng thêm Astra"];
const brands = ["Gia dụng Việt", "Tiki Trading", "Shop máy đọc sách Hà Nội"];
const hcl = <CheckList items={brands} />;

export default function ProductPage() {
    const danhmuc = ["Tã, Bỉm", "Dinh dưỡng cho bé", "Thức ăn dặm"];
  return (
    <div>
      <Header></Header>
      <div class="content-container">
        <Breadcrumbs aria-label="breadcrumb">{breadcrumbs}</Breadcrumbs>
      </div>
      <div class="body-container" style={{ marginTop: "0" }}>
        <div class="side-container">
        <div className="card">
            <h6 className="card-title">Danh mục</h6>
            <div>
            {
                danhmuc.map((item) => {
                    return (
                        <a class="category">
                            <div>{item}</div>
                        </a>
                    )
                })
            }
            </div>
          </div>
          <div className="card">
            <h6 className="card-title" >Địa chỉ nhận hàng</h6>
            <div style={{fontSize:"0.9rem"}}>Q. Hoàn Kiếm, P.Hàng Trống, Hà Nội</div>
            <div style={{fontWeight:"500", fontSize:"0.8rem"}}>Đổi địa chỉ</div>
          </div>
          <SideCard title="Dịch vụ">
            <CheckList items={dv_items} />
          </SideCard>
          <SideCard title={"Thương hiệu"} hiddenContent={hcl}>
            <CheckList items={brands} />
          </SideCard>
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
              <ListFilter />
            </div>
          </div>
          <div class="product-display">
            {/* <ProductCard product={product} />
            <ProductCard product={product1} /> */}
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
