import axios from "axios";
import { func } from "prop-types";
const API_URL = "http://localhost:8080";
function adjustItemKey(items) {
    if(items.length > 0) {
        let mapNewKey = {"img":"image_url", "rate":"rating"}
        for (const [key, value] of Object.entries(mapNewKey)) {
            if(items[0][key] !== undefined) {
                items = items.map((item) => {
                    item[value] = item[key];
                    delete item[key];
                    return item;
                });
            }
        }
    }
    return items;
}
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
        let result = await response.data.data;
        result = result.map((brand) => {
            return {...brand, id : parseInt(brand.id)}
        });
        return result;
    } catch(error) {
        throw error;
    }
}

export async function getItemsByCategory(category_id) {
    try {
        const response = await axios.get(`${API_URL}/item/get-item-by-category/${category_id}`);
        return adjustItemKey(response.data.data);
    } catch(error) {
        throw error;
    }
}
export function filterItem(items, type, args) {
    let filteredItems = [...items];
    if (type === "brand") {
        filteredItems = filteredItems.filter((item) => args.includes(item.brand));
    } else if(type === "rating") {
        filteredItems = filteredItems.filter((item) => item.rating >= args);
    }
    return filteredItems;
}
export async function searchItems(searchTerm) {
    try {
        const queryParams = new URLSearchParams();
        queryParams.append("searchTerm", searchTerm);
        const queryString = queryParams.toString();
        const url = `${API_URL}/item/search-item/${queryString}`;
        const response = await axios.get(`${API_URL}/item/search-item?${queryString}`);
        return adjustItemKey(response.data.data);
    } catch(error) {
        throw error;
    }
} 
export async function getItemRecommendation() {
    try {
        const response = await axios.get(`${API_URL}/item/get-item-recommendation`);
        return adjustItemKey(response.data.data);
    } catch(error) {
        throw error;
    }
}
export async function getCategoryById(id) {
    try {
        const response = await axios.get(`${API_URL}/category/get-category-by-id/${id}`);
        return response.data.data[0];
    } catch(error) {
        throw error;
    }
}
export async function getAllBrands() {
    try {
        const response = await axios.get(`${API_URL}/brand/get-all-brand`);
        return response.data.data;
    } catch(error) {
        throw error;
    }
}
export async function getAllCategories() {
    try {
        const response = await axios.get(`${API_URL}/category/get-all-category`);
        return response.data.data;
    } catch(error) {
        throw error;
    }
}