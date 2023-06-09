import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  CssBaseline,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ShopProductCard from "../../sections/ProductCard";

const products = [
  {
    name: "test",
    cover:
      "https://upload.wikimedia.org/wikipedia/vi/0/0a/Genshin_Impact_cover.jpg",
    price: 20000,
  },
  {
    name: "untest",
    cover:
      "https://upload.wikimedia.org/wikipedia/vi/0/0a/Genshin_Impact_cover.jpg",
    price: 20000,
  },
];

function ItemList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [additionalItems, setAdditionalItems] = useState([]);
  const [selectedFileNames, setSelectedFileNames] = useState([]);

  const productsPerPage = 12;

  // Filter the products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIdx = (currentPage - 1) * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const currentProducts = filteredProducts.slice(startIdx, endIdx);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset current page when performing a new search
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setAdditionalItems([]);
    setNewItemName("");
  };

  const handleNewItemNameChange = (event) => {
    setNewItemName(event.target.value);
  };

  const handleAddAdditionalItem = () => {
    setAdditionalItems((prevItems) => [...prevItems, {}]);
  };

  const handleAdditionalItemChange = (event, index, field) => {
    const updatedItems = [...additionalItems];
    updatedItems[index][field] = event.target.value;
    setAdditionalItems(updatedItems);
  };

  const handleUploadPicture = (event, index) => {
    const file = event.target.files[0];
    const updatedSelectedFileNames = [...selectedFileNames];
    updatedSelectedFileNames[index] = file.name;
    setSelectedFileNames(updatedSelectedFileNames);
    console.log("Uploading picture:", file);
  };

  const handleAddItem = () => {
    // Add logic to handle the submission of the new item
    console.log("Adding item:", newItemName, additionalItems);
    // Reset fields and close the dialog
    setAdditionalItems([]);
    setNewItemName("");
    setOpenDialog(false);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 3, minHeight: "100vh" }}>
      <Typography variant="h4">Products</Typography>
      <CssBaseline />
      <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
          Add item
        </Button>
      </Grid>
      <Grid container sx={{ mt: 4 }}>
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
        />
      </Grid>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {currentProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <ShopProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 3 }}>
        <Button
          variant="outlined"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Prev Page
        </Button>
        <Button
          variant="outlined"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          sx={{ ml: 2 }}
        >
          Next Page
        </Button>
      </Grid>

      {/* Add New Item Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>Add New Item</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={newItemName}
            onChange={handleNewItemNameChange}
            sx={{ mt: 3 }}
          />

          {/* Additional Item Fields */}
          {additionalItems.map((item, index) => (
            <div key={index} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Specific Item"
                variant="outlined"
                value={item.specificItem || ""}
                sx={{ mt: 3 }}
                onChange={(e) =>
                  handleAdditionalItemChange(e, index, "specificItem")
                }
              />
              <TextField
                fullWidth
                label="Price"
                variant="outlined"
                value={item.price || ""}
                onChange={(e) => handleAdditionalItemChange(e, index, "price")}
                type="number"
                sx={{ mt: 2 }}
              />
              {/* Upload Picture Button */}
              <Button variant="contained" component="label" sx={{ mt: 2 }}>
                Upload Picture
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => handleUploadPicture(e, index)}
                />
              </Button>
              {selectedFileNames[index] && (
                <Typography variant="body2">
                  {selectedFileNames[index]}
                </Typography>
              )}
            </div>
          ))}

          {/* Add Additional Item Button */}
          <Button
            variant="outlined"
            onClick={handleAddAdditionalItem}
            sx={{ mt: 2 }}
          >
            +
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleAddItem} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default ItemList;
