import React, { useEffect, useState } from "react";
import {
  Avatar,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./shopinfo.style.css";

const ShopInfo = () => {
  const [sellerData, setSellerData] = useState(null);
  const [itemData, setItemData] = useState([]);
  const [search, setSearch] = useState("");
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/seller/get-seller-by-id/${id}`
        );
        setSellerData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSellerData();
  }, [id]);

  useEffect(() => {
    const fetchItemsBySellerId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/item/get-item-by-seller-id/${sellerData?.id}`
        );
        setItemData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (sellerData?.id) {
      fetchItemsBySellerId();
    }
  }, [sellerData]);

  console.log(sellerData);
  console.log(itemData);

  const filteredItems = itemData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={2}>
      {sellerData ? (
        <Grid container spacing={2}>
          {/* Store Header */}
          <Grid item xs={12}>
            <Card className="header-card-shop" sx={{ borderRadius: "0%" }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar
                      src={sellerData.img_url}
                      alt={sellerData.name}
                      sx={{ width: 80, height: 80 }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">{sellerData.name}</Typography>
                    <Typography variant="body1" color="textSecondary">
                      {sellerData.description}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* Search Bar */}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "100px",
            }}
          >
            <TextField
              label="Search"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
              margin="dense"
              sx={{ width: 200 }}
            />
          </Grid>
          {/* Item List */}
          <Grid
            item
            xs={12}
            style={{
              paddingRight: "10%",
              paddingLeft: "10%",
            }}
          >
            <Grid container spacing={2}>
              {filteredItems.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ borderRadius: 3 }}>
                    {/* Rounded border */}
                    <CardContent>
                      <Box
                        textAlign="center"
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            paddingTop: "100%", // Maintain 1:1 aspect ratio
                            position: "relative",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        >
                          <img
                            src={
                              item.img
                                ? item.img
                                : "https://cdn-icons-png.flaticon.com/512/4555/4555971.png"
                            }
                            alt={item.name}
                            style={{
                              display: "block",
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </Box>
                        <Box mt={1} sx={{ justifyContent: "center" }}>
                          <Typography variant="h6">{item.name}</Typography>
                          <Typography variant="body1" color="textSecondary">
                            Price: {item.price}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="body1">Loading...</Typography>
      )}
    </Box>
  );
};

export default ShopInfo;
