import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import axios from "axios";

const userData = JSON.parse(localStorage.getItem("user"));

const OrderBar = ({ itemspecific_name, quantity, status, id, item_id }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogAction, setDialogAction] = useState("");

  const handleApprove = async () => {
    setDialogAction("approve");
    setOpenDialog(true);
  };

  const handleDecline = async () => {
    setDialogAction("decline");
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDialogAction = async () => {
    setOpenDialog(false);

    try {
      const requestBody = {
        order_id: id,
        item_id: item_id,
        status: dialogAction === "approve" ? "shipping" : "decline",
      };

      const response = await axios.post(
        "http://localhost:8080/order/change-status",
        requestBody
      );

      console.log(
        `Order ${
          dialogAction.charAt(0).toUpperCase() + dialogAction.slice(1)
        }:`,
        response.data
      );
      // Handle the response as needed
    } catch (error) {
      console.error(`Error ${dialogAction}ing order:`, error);
      // Handle error scenarios
    }
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

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{`Are you sure you want to ${dialogAction}?`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleDialogAction} color="primary">
            {dialogAction.charAt(0).toUpperCase() + dialogAction.slice(1)}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

const OrderList = () => {
  const [filter, setFilter] = useState("all");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersBySellerId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/order/get-order-by-seller-id/${userData?.id}`
        );
        setOrders(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (userData?.id) {
      fetchOrdersBySellerId();
    }
  }, []);

  console.log(orders);

  const handleFilter = (status) => {
    setFilter(status);
  };

  const updateOrders = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/order/get-order-by-seller-id/${userData?.id}`
      );
      setOrders(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredData =
    filter === "all"
      ? orders
      : orders.filter((order) => order.status === filter);

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
      {filteredData.map((order, index) => (
        <OrderBar
          key={index}
          itemspecific_name={order.itemspecific_name}
          quantity={order.quantity}
          status={order.status}
          id={order.order_id}
          item_id={order.item_id}
        />
      ))}
    </div>
  );
};

export default OrderList;
