import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdatePassword = () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }

    try {
      await axios.post(
        `${window.env.REACT_APP_SERVER_URL}/seller/update-password`,
        {
          username: userData.username,
          old_password: oldPassword,
          new_password: newPassword,
          confirm_password: confirmPassword,
        },
        { withCredentials: true }
      );

      // Handle success scenario
      toast.success("Change password successfully");
    } catch (error) {
      // Handle error scenario
      toast.error(error.response.data.message);
    }
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
      <div style={{ width: "50%" }}>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Update Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              type="password"
              label="Old Password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={oldPassword}
              onChange={handleOldPasswordChange}
            />
            <TextField
              type="password"
              label="New Password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            <TextField
              type="password"
              label="Confirm Password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </div>
        </form>
      </div>
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
    </div>
  );
};

export default UpdatePassword;
