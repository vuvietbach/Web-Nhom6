import AppWidgetSummary from "../../sections/AppWidget";
import "./sellermenu.css";
import { Grid } from "@mui/material";

const SellerInformation = () => {
  return (
    <div className="container">
      <div className="picture">
        <img
          className="avatar"
          src="https://img.ws.mms.shopee.vn/1301e27a24db00dd03edf9096b701875"
          alt="avatar"
        />
      </div>
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
              color="success"
              icon={"mdi:store"}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SellerInformation;
