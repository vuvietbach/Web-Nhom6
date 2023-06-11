import React, { useEffect, useState } from "react";
import {
  Avatar,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const storeInfo = {
  name: "My Store",
  description: "Welcome to our store",
  avatar: "https://example.com/store-avatar.png", // Replace with your store avatar image URL
};

const items = [
  {
    id: 1,
    name: "Item 1",
    price: 10.99,
    image: "https://example.com/item1.png", // Replace with your item image URL
  },
  {
    id: 2,
    name: "Item 2",
    price: 19.99,
    image: "https://example.com/item2.png", // Replace with your item image URL
  },
  // Add more items as needed
];

const ShopInfo = () => {
  const [sellerData, setSellerData] = useState(null);
  const { name } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/seller/get-seller-by-name/${name}`
        );
        setSellerData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [name]);
  console.log(sellerData);
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {/* Store Header */}
        <Grid item xs={12}>
          <Card>
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
        {/* Item List */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                <Card>
                  <CardContent>
                    <Box textAlign="center">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Box>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body1">
                      ${item.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShopInfo;
