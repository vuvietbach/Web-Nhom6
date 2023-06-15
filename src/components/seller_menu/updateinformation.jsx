import React, { useState, useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateInfo = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [sellerData, setSellerData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    description: "",
  });

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/seller/get-seller-by-id/${userData.id}`
        );
        setSellerData(response.data.data);
      } catch (error) {
        console.error(error);
        // Add your error handling logic here
      }
    };

    fetchSellerData();
  }, [userData.id]);

  useEffect(() => {
    if (sellerData) {
      setFormData({
        name: sellerData.name || "",
        phoneNumber: sellerData.phone_number || "",
        address: sellerData.address || "",
        description: sellerData.description || "",
      });
    }
  }, [sellerData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedData = {
      username: userData.username,
      ...formData,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/seller/update-seller",
        updatedData
      );
      if (response.data.message === "OK") {
        toast.success("Success");
        setTimeout(() => {
          window.location.reload(); // Refresh the page after 1 second
        }, 1000);
      }
      // Add your logic to handle the successful submission here
    } catch (error) {
      console.error(error);
      // Add your error handling logic here
    }
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div style={{ width: "50%" }}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Update information
        </Typography>
        {sellerData ? (
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", marginBottom: "2%" }}>
              <TextField
                onChange={handleInput}
                variant="outlined"
                margin="normal"
                required
                id="name"
                label="Name"
                name="name"
                autoFocus
                fullWidth
                value={formData.name}
                style={{ marginRight: "2%" }}
              />
              <TextField
                onChange={handleInput}
                variant="outlined"
                margin="normal"
                required
                id="phone-number"
                label="Phone number"
                name="phoneNumber"
                fullWidth
                value={formData.phoneNumber}
                style={{ marginRight: "2%" }}
              />
              <TextField
                onChange={handleInput}
                variant="outlined"
                margin="normal"
                required
                id="address"
                label="Address"
                name="address"
                fullWidth
                value={formData.address}
              />
            </div>
            <TextField
              onChange={handleInput}
              variant="outlined"
              margin="normal"
              fullWidth
              id="description"
              label="Description"
              name="description"
              multiline
              rows={6}
              value={formData.description}
              style={{ marginBottom: "2%" }}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        ) : (
          <Typography>Loading seller data...</Typography>
        )}
      </div>
    </div>
  );
};

export default UpdateInfo;
