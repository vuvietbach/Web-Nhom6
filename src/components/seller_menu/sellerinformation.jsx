import AppWidgetSummary from "../../sections/AppWidget";
import "./sellermenu.css";
import { Grid } from "@mui/material";
const shopInfo = {
  name: "Shop ABC",
  address: "Ha Noi",
  phone: "0123456789",
  website: "facebook.com",
  follower: 100,
};

const SellerInformation = () => {
  return (
    <div className="container">
      <img
        className="avatar"
        src="https://img.freepik.com/free-icon/user_318-159711.jpg"
        alt="avatar"
      />
      <h1 className="text-center">{shopInfo.name}</h1>
      <div className="information-box">
        <div className="information">
          <div>
            <label>Tên cửa hàng: </label>
            {shopInfo.name}
          </div>
          <div>
            <label>Địa chỉ: </label>
            {shopInfo.address}
          </div>
          <div>
            <label>Số điện thoại: </label>
            {shopInfo.phone}
          </div>
          <div>
            <label>Website: </label>
            {shopInfo.website}
          </div>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            icon={"ant-design:android-filled"}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <AppWidgetSummary
            title="New Users"
            total={1352831}
            color="success"
            icon={"ant-design:apple-filled"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SellerInformation;
