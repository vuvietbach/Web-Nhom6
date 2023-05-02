import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Grid } from "@mui/material";
import Carousel from "components/carousel";
const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit">
    Trang chủ
  </Link>,
  <Link key="2" color="text.primary">
    Thời trang nam
  </Link>,
];
const cardStyle = {
  backgroundColor: "#fff",
  padding: "10px",
  marginBottom: "2px",
};
const items = [
    'https://salt.tikicdn.com/cache/w1080/ts/tikimsp/75/e6/eb/ac3c8bc53fcca5bfa1a7e2c6bb8aea77.png.webp',
    'https://salt.tikicdn.com/cache/280x280/ts/product/a3/f3/c6/4955f365a9d35f7273f6c2cba8b47197.jpg.webp',  
]
export default function ProductPage() {
  return (
    <div className={`content-area`}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Grid container spacing={1}>
        <Grid item xs={2.5}>
          <div className="d-flex flex-column">
            <div style={cardStyle}>
              <h6>Danh mục sản phẩm</h6>
              <ul class="list-unstyled">
                <li>Ao thun nam</li>
                <li>Ao so mi nam</li>
                <li>Ao vest - Ao khoac nam</li>
              </ul>
            </div>
            <div style={cardStyle}>
              <h6>Danh mục sản phẩm</h6>
              <ul class="list-unstyled">
                <li>Ao thun nam</li>
                <li>Ao so mi nam</li>
                <li>Ao vest - Ao khoac nam</li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={9.5}>
          <div className="card">
            <h5>Thoi trang nam</h5>
            <Carousel>
                {items}
            </Carousel>
        </div>
        </Grid>
      </Grid>
    </div>
  );
}
