import React, { useState } from "react";
import { Paper, Typography, Button } from "@mui/material";

const data = [
  {
    item_id: 1,
    order_id: 1,
    quantity: 1,
    status: "pending",
    itemspecific_name: "Fan A",
  },
  {
    item_id: 1,
    order_id: 2,
    quantity: 1,
    status: "pending",
    itemspecific_name: "Fan A",
  },
  {
    item_id: 1,
    order_id: 3,
    quantity: 1,
    status: "pending",
    itemspecific_name: "Fan A",
  },
  {
    item_id: 2,
    order_id: 1,
    quantity: 1,
    status: "shipping",
    itemspecific_name: "Fan B",
  },
  {
    item_id: 2,
    order_id: 2,
    quantity: 1,
    status: "done",
    itemspecific_name: "Fan B",
  },
  {
    item_id: 2,
    order_id: 3,
    quantity: 1,
    status: "pending",
    itemspecific_name: "Fan B",
  },
];

const OrderBar = ({ itemspecific_name, quantity, status }) => {
  const handleApprove = () => {
    // Logic for approving the order
    console.log("Order Approved");
  };

  const handleDecline = () => {
    // Logic for declining the order
    console.log("Order Declined");
  };

  let statusColor = "";
  switch (status) {
    case "pending":
      statusColor = "yellow";
      break;
    case "done":
      statusColor = "green";
      break;
    case "shipping":
      statusColor = "blue";
      break;
    default:
      statusColor = "black";
  }

  return (
    <Paper
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        marginBottom: "15px",
        backgroundColor: "whitesmoke",
      }}
    >
      <Typography variant="body1">{itemspecific_name}</Typography>
      <Typography variant="body1">Quantity: {quantity}</Typography>
      <div
        style={{
          backgroundColor: statusColor,
          color: "white",
          fontWeight: "bold",
          padding: "4px 8px",
          borderRadius: "4px",
        }}
      >
        {status}
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleApprove}
          style={{
            marginRight: "8px",
            backgroundColor: "#3f51b5",
            color: "#fff",
          }}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDecline}
          style={{ backgroundColor: "#f50057", color: "#fff" }}
        >
          Decline
        </Button>
      </div>
    </Paper>
  );
};

const OrderList = () => {
  const [filter, setFilter] = useState("all");

  const handleFilter = (status) => {
    setFilter(status);
  };

  const filteredData =
    filter === "all" ? data : data.filter((order) => order.status === filter);

  return (
    <div style={{ width: "100vw", padding: "20px" }}>
      <div style={{ marginBottom: "15px" }}>
        <Button
          variant="contained"
          onClick={() => handleFilter("all")}
          style={{ marginRight: "8px" }}
        >
          All
        </Button>
        <Button
          variant="contained"
          onClick={() => handleFilter("pending")}
          style={{ marginRight: "8px" }}
        >
          Pending
        </Button>
        <Button
          variant="contained"
          onClick={() => handleFilter("shipping")}
          style={{ marginRight: "8px" }}
        >
          Shipping
        </Button>
        <Button variant="contained" onClick={() => handleFilter("done")}>
          Done
        </Button>
      </div>
      {filteredData.map((order) => (
        <OrderBar
          key={order.order_id}
          itemspecific_name={order.itemspecific_name}
          quantity={order.quantity}
          status={order.status}
        />
      ))}
    </div>
  );
};

export default OrderList;
