import React, { useEffect, useState } from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import AppWidgetSummary from "../../sections/AppWidget";
import InformationStyle from "./sellerinformation.style";
import axios from "axios";

const SellerInformation = () => {
  const [sellerData, setSellerData] = useState(null);
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);

  useEffect(() => {
    // Set background color of html and body to white
    document.documentElement.style.backgroundColor = "white";
    document.body.style.backgroundColor = "white";
    return () => {
      // Reset background color when component is unmounted
      document.documentElement.style.backgroundColor = null;
      document.body.style.backgroundColor = null;
    };
  }, []);

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        const response = await axios.get(
          `${window.env.REACT_APP_SERVER_URL}/seller/get-seller-by-id/${userData.id}`
        );
        setSellerData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSellerData();
  }, [userData.id]);

  if (!sellerData) {
    return <div>Loading...</div>;
  }

  return (
    <InformationStyle>
      <div className="container-seller">
        <div className="seller-details">
          <img
            src={sellerData.img_url}
            alt="Profile"
            style={{ width: "10rem", height: "auto" }}
          />
          <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
            <Grid item>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                {sellerData.name}
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="https://salt.tikicdn.com/cache/w100/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png.webp"
                alt="test"
                style={{ marginLeft: "10px" }} // Adjust the margin as needed
              />
            </Grid>
          </Grid>
          <Card
            className="shop-info-card"
            sx={{
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              overflowY: "scroll", // Add scrollable overflow
              maxHeight: "calc(100vh - 30rem)",
              mt: 2,
              mb: 2,
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                color="textPrimary"
                sx={{ marginBottom: "1rem", fontWeight: "bold" }}
              >
                {sellerData.description}
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ marginBottom: "0.5rem", fontWeight: "300" }}
              >
                Address: {sellerData.address}
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ fontWeight: "300" }}
              >
                Phone Number: {sellerData.phone_number}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <Typography
          variant="h2"
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
                total={sellerData.followers}
                icon={"mdi:account-heart"}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary
                title="Products"
                total={sellerData.number_of_products}
                color="success"
                icon={"mdi:store"}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary
                title="Rate"
                total={sellerData.rate ? sellerData.rate : 0}
                color="warning"
                icon={"mdi:creation"}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary
                title="Review count"
                total={sellerData.review_count ? sellerData.review_count : 0}
                icon={"mdi:creation"}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </InformationStyle>
  );
};

export default SellerInformation;
