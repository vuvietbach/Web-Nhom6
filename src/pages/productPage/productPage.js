import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { ListFilter, RatingStar, SideCard, CheckList} from "components/misc/misc";
import { ProductCard } from "components/productCard/productCard";
import './productPage.css'
import { Pagination } from "@mui/material";
const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit">
    Trang chủ
  </Link>,
  <Link key="2" color="text.primary">
    Thời trang nam
  </Link>,
];
const cardStyle = {
  padding: "10px",
  marginBottom: "2px",
};
// const items = [
//     'https://salt.tikicdn.com/cache/w1080/ts/tikimsp/75/e6/eb/ac3c8bc53fcca5bfa1a7e2c6bb8aea77.png.webp',
//     'https://salt.tikicdn.com/cache/280x280/ts/product/a3/f3/c6/4955f365a9d35f7273f6c2cba8b47197.jpg.webp',  
// ]
const items = ["Tã, Bỉm", "Dinh dưỡng cho bé", "Thức ăn dặm"];
const dv_items = ["Now Giao Siêu Tốc 2H", "ASTRA+ Thưởng thêm Astra"]
const brands = ["Gia dụng Việt", "Tiki Trading", "Shop máy đọc sách Hà Nội"]
const Ul_items = () => {
    return (
        <ul class="list-group">
            {items.map((item, index) => {
                return (
                    <li key={index}>
                        <Link href="#" underline="none" color="text.primary">
                            {item}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
const hcl = <CheckList items={brands}/>
const product = {
    name: "Bộ 2 Lon Sữa Bột Friso Gold 4 1400g Dành Cho Trẻ Từ 2 - 6 Tuổi + Tặng Lon Sữa Friso Gold 4 380g",
    image_url: "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/6c/89/d4/caffed40dfb23975fcfef0334c8e9d31.png",
    price: "1.200.000đ",
    rating: 4.8,
}
const product1 = {
    name: "Bộ 2 Lon Sữa Bột Friso Gold 4 1400g Dành Cho Trẻ Từ 2 - 6 Tuổi + Tặng Lon Sữa Friso Gold 4 380g",
    image_url: "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/6c/89/d4/caffed40dfb23975fcfef0334c8e9d31.png",
    price: "1.200.000đ",
    rating: 4.8, 
    numberSold: 100,
}
export default function ProductPage() {
  return (
    <div class="center-ctn">
      <Breadcrumbs
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <div class="d-flex" style={{gap:'20px'}}>
        <div class="side-bar">
            <SideCard title="Danh mục sản phẩm" children={<Ul_items/>}/>
            <SideCard title="Địa chỉ nhận hàng">
                <div class="truncate side_diachi">Q. Hoàn Kiếm, P.Hàng Trống</div>
                <div class="doidiachi">Đổi địa chỉ</div>
            </SideCard>
            <SideCard title="Dịch vụ">
                <CheckList items={dv_items}/>
            </SideCard>
            <SideCard title={"Thương hiệu"} hiddenContent={hcl}>
                <CheckList items={brands}/>
            </SideCard>
            <SideCard title={"Đánh giá"}>
                <ul class="list-group">
                    <li><RatingStar rating={5}/>từ 5 sao</li>
                    <li><RatingStar rating={4}/>từ 4 sao</li>
                    <li><RatingStar rating={3}/>từ 3 sao</li>
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
        <div class="main-ctn">
            <div class="card">
                <h4>Điện gia dụng</h4>
                <div>
                    <ListFilter />
                </div>
            </div>
            <div class="product-display">
                <ProductCard product={product}/>
                <ProductCard product={product1}/>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <Pagination count={20} siblingCount={2} size="large" variant="text"/>
            </div> 
      </div>
      </div>
    </div>
  );
}
