import axios from "axios";
const API_URL = "http://localhost:8080";
export async function getSubCategories(category_id) {
    try {
        const response = await axios.get(`${API_URL}/category/get-subcategories/${category_id}`);
        return response.data.data;
    } catch(error) {
        throw error;
    }
}
export async function getBrandsByCategory(category_id) {
    try {
        const response = await axios.get(`${API_URL}/brand/get-brands-by-category/${category_id}`);
        return response.data.data;
    } catch(error) {
        throw error;
    }
}
export function sortProducts(products, type) {
    let productsCopy = [...products];
    if (type === "price-asc") {
        productsCopy.sort((a, b) => a.price - b.price);
    } else if(type === "price-desc") {
        productsCopy.sort((a, b) => b.price - a.price);
    }
    return productsCopy;
}
export async function getItemsByCategory(category_id) {
    try {
        const response = await axios.get(`${API_URL}/item/get-item-by-category/${category_id}`);
        return response.data.data;
    } catch(error) {
        throw error;
    }
}