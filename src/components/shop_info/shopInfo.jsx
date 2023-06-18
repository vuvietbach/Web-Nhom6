import React, { useEffect, useState } from "react";
import {
  Avatar,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Link,
  Button,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./shopinfo.style.css";
import Header from "components/header/header";

const ShopInfo = () => {
  const [sellerData, setSellerData] = useState(null);
  const [itemData, setItemData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("item");
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

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Header />
      <Box p={2} sx={{overFlow: "hidden"}}>
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
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
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
                      <Typography variant="body4">
                        Follower:{" "}
                        {sellerData.follower ? sellerData.follower : 0}
                      </Typography>
                      <br></br>
                      <Typography variant="body4">
                        Rating: {sellerData.rating ? sellerData.rating : 0}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            {/* Option Bar */}
            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="center"
                mt={2}
                mb={2}
                className="option-bar"
              >
                <Button
                  variant={selectedOption === "item" ? "contained" : "outlined"}
                  onClick={() => handleOptionChange("item")}
                >
                  Item
                </Button>
                <Box width={16} /> {/* Add space between the buttons */}
                <Button
                  variant={
                    selectedOption === "description" ? "contained" : "outlined"
                  }
                  onClick={() => handleOptionChange("description")}
                >
                  Information
                </Button>
              </Box>
            </Grid>
            {/* Content */}
            <Grid
              item
              xs={12}
              style={{
                paddingRight: "10%",
                paddingLeft: "10%",
              }}
            >
              {selectedOption === "description" ? (
                <Card
                  className="shop-info-card"
                  sx={{
                    borderRadius: "10px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    overflowY: "scroll", // Add scrollable overflow
                    maxHeight: "calc(100vh - 450px)",
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
              ) : (
                <>
                  <Box
                    display="flex"
                    justifyContent="flex-end" // Align search bar to the right
                    pr={2} // Add right padding for spacing
                  >
                    <TextField
                      label="Search"
                      variant="outlined"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      margin="dense"
                      sx={{
                        width: 400,
                        marginBottom: "3%",
                        backgroundColor: "white",
                      }}
                    />
                  </Box>
                  <Grid
                    container
                    spacing={2}
                    style={{
                      overflowY: "scroll", // Add scrollable overflow
                      maxHeight: "calc(100vh - 450px)",
                    }}
                  >
                    {filteredItems.map((item) => (
                      <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Card
                          sx={{
                            borderRadius: 3,
                            padding: "10px",
                            borderRight: "solid",
                            borderBottom: "solid",
                            borderColor: "#a1a09d",
                          }}
                        >
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
                                borderRadius: 3,
                              }}
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  paddingTop: "100%", // Maintain 1:1 aspect ratio
                                  position: "relative",
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                  borderRadius: 3,
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
                                <Typography variant="h6">
                                  {/* <Link
                                    underline="none"
                                    href={`/chi-tiet-san-pham/${item.id}`}
                                  >
                                    {item.name}
                                  </Link> */}
                                  <Button
                                    color="primary"
                                    href={`/chi-tiet-san-pham/${item.id}`}
                                    component={Link}
                                  >
                                    {item.name}
                                  </Button>
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                >
                                  Price: {item.price}
                                </Typography>
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        ) : (
          <Typography variant="body1">Loading...</Typography>
        )}
      </Box>
    </>
  );
};

export default ShopInfo;
