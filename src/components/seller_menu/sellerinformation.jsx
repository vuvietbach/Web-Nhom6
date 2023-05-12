import AppWidgetSummary from "../../sections/AppWidget";
import "./sellermenu.css";
import { Divider, Grid, Typography } from "@mui/material";
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
          <Typography
            style={{ color: "#103996", fontWeight: "bold" }}
            variant="h6"
          >
            Tên cửa hàng: {shopInfo.name}
          </Typography>
          <Typography
            style={{ color: "#103996", fontWeight: "bold" }}
            variant="h6"
          >
            Địa chỉ: {shopInfo.address}
          </Typography>
          <Typography
            style={{ color: "#103996", fontWeight: "bold" }}
            variant="h6"
          >
            Liên hệ: {shopInfo.phone}
          </Typography>
          <Typography
            style={{ color: "#103996", fontWeight: "bold" }}
            variant="h6"
          >
            Mô tả: {shopInfo.website}
          </Typography>
        </div>
      </div>
      <Divider />
      <div className="statistic-box">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary
              title="Followers"
              total={714000}
              icon={"mdi:account-heart"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary
              title="Products"
              total={1352831}
              color="primary"
              icon={"mdi:store"}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SellerInformation;
