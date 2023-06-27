import axios from "axios";
const SERVER_URL = window.env.REACT_APP_SERVER_URL
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
        const response = await axios.get(`${SERVER_URL}/category/get-subcategories/${category_id}`);
        return response.data.data;
    } catch(error) {
        throw error;
    }
}
export async function getBrandsByCategory(category_id) {
    try {

        const response = await axios.get(`${SERVER_URL}/brand/get-brands-by-category/${category_id}`);
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
        const response = await axios.get(`${SERVER_URL}/item/get-item-by-category/${category_id}`);
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
        const response = await axios.get(`${SERVER_URL}/item/search-item?${queryString}`);
        return adjustItemKey(response.data.data);
    } catch(error) {
        throw error;
    }
} 
export async function getItemRecommendation() {

    try {
        const response = await axios.get(`${SERVER_URL}/item/get-item-recommendation`);
        return adjustItemKey(response.data.data);
    } catch(error) {
        console.log(error);
        throw error;
    }
}
export async function getCategoryById(id) {
    try {
        const response = await axios.get(`${SERVER_URL}/category/get-category-by-id/${id}`);
        return response.data.data[0];
    } catch(error) {
        throw error;
    }
}
export async function getAllBrands() {
    try {
        const response = await axios.get(`${SERVER_URL}/brand/get-all-brand`);
        return response.data.data;
    } catch(error) {
        throw error;
    }
}
export async function getAllCategories() {
    try {
        const response = await axios.get(`${SERVER_URL}/category/get-all-category`);
        return response.data.data;
    } catch(error) {
        throw error;
    }
}
export async function getCartByUserId(user_id) {
    try {
        const response = await axios.get(`${SERVER_URL}/cart/get-cart/${user_id}`);
        return adjustItemKey(response.data.data);
    } catch(error) {
        throw error;
    }
}
export async function deleteCartItem(user_id, itemspecific_id) {
    try {
        console.log(user_id, itemspecific_id)
        const data = {user_id: user_id, item_id: itemspecific_id}
        console.log(`${SERVER_URL}/cart/delete-cart`)
        const response = await axios.delete(`${SERVER_URL}/cart/delete-cart`, {data:data});
        return response.data;
    } catch(error) {
        throw error;
    }
}
export async function updateCartItem(user_id, itemspecific_id, quantity) {
    try {
        const data = {user_id: user_id, item_id: itemspecific_id, quantity: quantity}
        const response = await axios.post(`${SERVER_URL}/cart/add-cart`, data);
        return response.data;
    } catch(error) {
        throw error;
    }
}
export async function createOrder(order) {
    try {
        const response = await axios.post(`${SERVER_URL}/order/create-order`, order);
        return response.data;
    } catch(error) {
        throw error;
    }

}
export async function deleteCart(user_id) {
    try {
        const response = await axios.delete(`${SERVER_URL}/cart/delete-all-cart/${user_id}`);
        return response.data;
    } catch(error) {
        throw error;
    }
}