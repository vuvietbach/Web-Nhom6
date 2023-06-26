import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Account.css";
import images from "../../assets/assets";
import { MainLayout } from "components/layoutTemplate/layoutTemplate";
function Account() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const SERVER_URL = window.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    axios.get(`${SERVER_URL}/user/get-user-by-id/${id}`).then((res) => {
      console.log(res.data)
      setUser(res.data);
    });
  }, [id]);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    axios.post(`${SERVER_URL}/user/update-user`, {
        username: user.username,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
      })
      .then((res) => {
        setUser(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    axios.post(`${SERVER_URL}/user/update-password`, {
        username: user.username,
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      })
      .then(() => {
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setError(null);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const handleUploadAvatar = (e) => {
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    axios.post(`${SERVER_URL}/user/change-avatar/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setUser(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <MainLayout>
    <>
    <div className="account-page">
      {user ? (
        <div className="user-info">
          <div className="user">
          <h1>{user.username} Account</h1>
          <p>
            Name: {user.first_name} {user.last_name}
          </p>
          <p>Phone Number: {user.phone_number}</p>
          <img src={user.avatar_url} alt="avatar" />
          <form onSubmit={handleUpdateUser}>
            <h2>Update Your Information</h2>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Update</button>
          </form>
          </div>
          <div className="password">
          <form onSubmit={handleUpdatePassword}>
            <h2>Change Password</h2>
            <div>
              <label htmlFor="oldPassword">Old Password:</label>
              <input
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Change Password</button>
          </form>
          </div>
          <div className="avatar">
          <form>
            <h2>Change Avatar</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleUploadAvatar}
            />
            {error && <p className="error-message">{error}</p>}
          </form>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
    </MainLayout>
  );
}

export default Account;