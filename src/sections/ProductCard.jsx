import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// @mui
import {
  Box,
  Card,
  Link,
  Typography,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled } from "@mui/material/styles";
import axios from "axios";

// ----------------------------------------------------------------------

const StyledProductImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, img, price, id } = product;
  const [open, setOpen] = useState(false);
  const [itemData, setItemData] = useState(null);
  const [specificItem, setSpecificItem] = useState([]);
  const [editedName, setEditedName] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedImg, setEditedImg] = useState("");

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/item/get-item-by-id/${id}`
        );
        const specificItemResponse = await axios.get(
          `http://localhost:8080/item/get-item-specific-by-origin-id/${id}`
        );
        setSpecificItem(specificItemResponse.data.data);
        setItemData(response.data.data[0]);
        setEditedName(response.data.data[0].name);
        setEditedPrice(response.data.data[0].price);
        setEditedImg(response.data.data[0].img);
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };

    if (open) {
      fetchItemData();
    }
  }, [id, open]);
  console.log(specificItem);
  const handleEdit = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setItemData(null);
    setEditedName("");
    setEditedPrice("");
    setEditedImg("");
    setSpecificItem([]);
  };

  const handleUpdateSpecificItem = (itemId, updatedName, updatedPrice) => {
    // Create a payload object with the updated data
    const payload = {
      id: itemId,
      name: updatedName,
      price: updatedPrice,
    };

    console.log(payload);

    // Send the update request to the API
    axios
      .post(`http://localhost:8080/item/update-specific-item`, payload)
      .then(() => {
        toast.success("Update successful");
      })
      .catch((error) => {
        console.error("Error updating item:", error);
        toast.error("Error");
      });
  };

  const handleSpecificItemChange = (event, index, field) => {
    const updatedSpecificItem = [...specificItem];
    updatedSpecificItem[index][field] = event.target.value;
    setSpecificItem(updatedSpecificItem);
  };

  const handleSave = () => {
    // Create a payload object with the updated data
    const payload = {
      id: itemData.id,
      name: editedName,
    };

    // Send the update request to the API
    axios
      .post("http://localhost:8080/item/update-item", payload)
      .then(() => {
        toast.success("Item saved successfully");
      })
      .catch((error) => {
        console.error("Error saving item:", error);
        toast.error("Error");
      });
  };

  const handleDelete = () => {
    setOpen(false); // Close the edit dialog

    // Show confirmation dialog
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      // Send delete request to API
      axios
        .delete(`http://localhost:8080/item/delete-item/${id}`)
        .then(() => {
          toast.success("Delete successfully");
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
          // Show error notification
          toast.error("Error");
        });
    }
  };
  return (
    <Card>
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
      <Box sx={{ pt: "100%", position: "relative" }}>
        <StyledProductImg
          alt={name}
          src={img || "https://cdn-icons-png.flaticon.com/512/4555/4555971.png"}
        />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
          <Typography variant="subtitle1">{price}</Typography>
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" onClick={handleEdit}>
              Edit
            </Button>
            <Button variant="outlined" onClick={handleDelete} color="error">
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          {itemData ? (
            <div>
              <img
                src={editedImg}
                alt="Item"
                style={{ width: "30%", height: "auto" }}
              />
              <TextField
                label="Name"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                fullWidth
                sx={{ mt: 3 }}
              />
              {specificItem.map((item, index) => (
                <div key={item.id}>
                  <TextField
                    label="Name"
                    value={item.name}
                    fullWidth
                    sx={{ mt: 3 }}
                    onChange={(e) => handleSpecificItemChange(e, index, "name")}
                  />
                  <TextField
                    label="Price"
                    value={item.price}
                    fullWidth
                    sx={{ mt: 3 }}
                    onChange={(e) =>
                      handleSpecificItemChange(e, index, "price")
                    }
                  />
                  <Button
                    variant="outlined"
                    onClick={() =>
                      handleUpdateSpecificItem(item.id, item.name, item.price)
                    }
                  >
                    Update specific item
                  </Button>
                  {index < specificItem.length - 1 && (
                    <Divider sx={{ my: 2 }} />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <Typography>Loading item data...</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save item</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
