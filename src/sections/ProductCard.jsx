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
} from "@mui/material";
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
  const [editedName, setEditedName] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedImg, setEditedImg] = useState("");

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/item/get-item-by-id/${id}`
        );
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

  const handleEdit = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setItemData(null);
    setEditedName("");
    setEditedPrice("");
    setEditedImg("");
  };

  const handleSave = () => {
    // Perform the save operation here
    console.log("Save button clicked");
  };

  return (
    <Card>
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
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1">{price}</Typography>
          <Button variant="outlined" onClick={handleEdit}>
            Edit
          </Button>
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
              <TextField
                label="Price"
                value={editedPrice}
                onChange={(e) => setEditedPrice(e.target.value)}
                fullWidth
                sx={{ mt: 3 }}
              />
            </div>
          ) : (
            <Typography>Loading item data...</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
