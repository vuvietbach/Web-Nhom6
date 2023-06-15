import AppWidgetSummary from "../../sections/AppWidget";
import { Grid, Typography } from "@mui/material";
import "./sellermenu.css";

const SellerInformation = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);
  return (
    <div className="container2">
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Your stats
      </Typography>
      <div className="statistic-box2">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Followers"
              total={714000}
              icon={"mdi:account-heart"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Products"
              total={1352831}
              color="success"
              icon={"mdi:store"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Sell this month"
              total={32}
              color="secondary"
              icon={"mdi:border-color"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Rate"
              total={32}
              color="warning"
              icon={"mdi:creation"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary
              title="Revenue"
              total={32}
              color="success"
              icon={"mdi:cash-100"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary
              title="Performance"
              total={32}
              color="success"
              icon={"mdi:currency-usd"}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SellerInformation;
