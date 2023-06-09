import React from "react";
import { Typography, TextField, Button } from "@mui/material";

const UpdateInfo = () => {
  const handleSubmit = () => {};

  const handleInput = () => {};

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
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Update information
        </Typography>
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
              style={{ marginRight: "2%" }}
            />
            <TextField
              onChange={handleInput}
              variant="outlined"
              margin="normal"
              required
              id="phone-number"
              label="Phone number"
              name="phone-number"
              fullWidth
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
            style={{ marginBottom: "2%" }}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateInfo;
