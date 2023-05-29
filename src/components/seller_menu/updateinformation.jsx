import React from "react";
import TextField from "@mui/material/TextField";

const UpdateInfo = () => {
  const handleSubmit = () => {};

  const handleInput = () => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleInput}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoFocus
        />
        <TextField
          onChange={handleInput}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="phone-number"
          label="Phone number"
          name="phone-number"
        />
      </form>
    </>
  );
};

export default UpdateInfo;
