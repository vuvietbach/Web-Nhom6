import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rating.css';

const Rating = () => {
  const [ratings, setRatings] = useState([]);
  const [user_id, setUser_id] = useState('');
  const [item_id, setItem_id] = useState('');
  const [rate, setRate] = useState('');
  const [comment, setComment] = useState('');
  const [title, setTitle] = useState('');

  const SERVER_URL = window.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/rate/get-rate/{item_id}`);
      setRatings(response.data);
    } catch (error) {
      console.error('Error retrieving ratings:', error);
    }
  };

  const createRating = async () => {
    const payload = {
      user_id,
      item_id,
      rate,
      comment,
      title,
    };

    try {
      const response = await axios.post(`${SERVER_URL}/rate/create-rating`, payload);
      console.log('Rating created successfully:', response.data);
      fetchRatings();
    } catch (error) {
      console.error('Error creating rating:', error);
    }
  };

  return (
    <div className="rating-page">
      <h1>Đánh giá sản phẩm</h1>

      <div className="rating-form">
        <label htmlFor="user_id">User ID:</label>
        <input type="text" id="user_id" value={user_id} onChange={(e) => setUser_id(e.target.value)} />

        <label htmlFor="item_id">Item ID:</label>
        <input type="text" id="item_id" value={item_id} onChange={(e) => setItem_id(e.target.value)} />

        <label htmlFor="rate">Rate:</label>
        <input type="number" id="rate" min="1" max="5" value={rate} onChange={(e) => setRate(e.target.value)} />

        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />

        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <button onClick={createRating}>Submit</button>
      </div>

      <div className="rating-list">
        <h2>Danh sách đánh giá</h2>
        {ratings.length === 0 ? (
          <p>Không có đánh giá nào.</p>
        ) : (
          <ul>
            {ratings.map((rating) => (
              <li key={rating.id}>
                <p>User ID: {rating.user_id}</p>
                <p>Item ID: {rating.item_id}</p>
                <p>Rate: {rating.rate}</p>
                <p>Comment: {rating.comment}</p>
                <p>Title: {rating.title}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Rating;
