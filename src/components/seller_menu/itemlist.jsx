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
  MenuItem,
} from "@mui/material";
import ShopProductCard from "../../sections/ProductCard";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const userData = JSON.parse(localStorage.getItem("user"));

function ItemList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [additionalItems, setAdditionalItems] = useState([]);
  const [selectedFileNames, setSelectedFileNames] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const productsPerPage = 12;

  // Filter the products based on the search query
  const filteredProducts = itemData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    const fetchItemsBySellerId = async () => {
      try {
        const response = await axios.get(
          `${window.env.REACT_APP_SERVER_URL}/item/get-item-by-seller-id/${userData?.id}`
        );
        console.log(1);
        setItemData(response.data.data);
        console.log(itemData);
      } catch (error) {
        console.error(error);
      }
    };

    if (userData?.id) {
      fetchItemsBySellerId();
    }
  }, []);

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const response = await axios.get(
          `${window.env.REACT_APP_SERVER_URL}/category/get-all-category`
        );
        setCategoryList(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategoryList();
  }, []);

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
    setNewBrand("");
    setSelectedCategory("");
  };

  const handleNewItemNameChange = (event) => {
    setNewItemName(event.target.value);
  };

  const handleNewBrand = (event) => {
    setNewBrand(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
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

    // Store the selected file in selectedFiles state
    setSelectedFiles((prevSelectedFiles) => {
      const updatedSelectedFiles = [...prevSelectedFiles];
      updatedSelectedFiles[index] = file;
      return updatedSelectedFiles;
    });
  };

  const handleAddItem = async () => {
    try {
      if (additionalItems.length === 0) {
        toast.error("Please add at least one item specific");
        return;
      }

      const missingPicture = additionalItems.some(
        (item, index) => !selectedFiles[index]
      );

      if (missingPicture) {
        toast.error("Please add a picture for each specific item");
        return;
      }

      // Create the item object to send to the API
      const item = {
        name: newItemName,
        description: "", // Add the description if available
        seller_id: userData?.id,
        brand: newBrand,
        category_id: selectedCategory,
        item_specific: additionalItems.map((item) => ({
          name: item.specificItem,
          price: item.price,
        })),
      };

      // Send the item data to the API
      const response = await axios.post(
        `${window.env.REACT_APP_SERVER_URL}/item/create-item-v2`,
        item
      );

      // Log the response from the API
      console.log("Item added:", response.data);

      // Get the ID of the newly created item
      const newItemId = response.data.data.newItem.id;
      // Upload the selected files
      const uploadPromises = selectedFiles.map((file) => {
        const formData = new FormData();
        formData.append("image", file);
        return axios.post(
          `${window.env.REACT_APP_SERVER_URL}/item/item-picture/${newItemId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      });

      // Wait for all file uploads to complete
      await Promise.all(uploadPromises);

      // Reset fields and close the dialog
      setAdditionalItems([]);
      setNewItemName("");
      setNewBrand("");
      setSelectedCategory("");
      setSelectedFiles([]);
      setOpenDialog(false);
    } catch (error) {
      toast.error("Error adding item:", error);
      // Handle error scenarios
    }
  };
  // comment
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 3, minHeight: "100vh" }}>
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
          <TextField
            fullWidth
            label="Brand"
            variant="outlined"
            value={newBrand}
            onChange={handleNewBrand}
            sx={{ mt: 3 }}
          />

          {/* Category Select Field */}
          <TextField
            select
            fullWidth
            label="Category"
            variant="outlined"
            value={selectedCategory}
            onChange={handleCategoryChange}
            sx={{ mt: 3 }}
          >
            {categoryList.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>

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
