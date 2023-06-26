export const sortTypeMap = {
    "Giá thấp đến cao": "price-asc",
    "Giá cao đến thấp": "price-desc",
    "Bán chạy": "popular",
    "Hàng mới": "popular",
    "Phổ biến": "popular",
  };
export function sortItems(items, type) {
    let itemsCopy = [...items];
    if (type === "price-asc") {
        itemsCopy.sort((a, b) => a.price - b.price);
    } else if(type === "price-desc") {
        itemsCopy.sort((a, b) => b.price - a.price);
    } else if(type === "popular") {
        itemsCopy.sort((a, b) => b.number_sold - a.number_sold);
    }
    return itemsCopy;
}
export function filterItems(items, filterArgs) {
    if (items === undefined) return [];
    let itemsCopy = [...items];
    if (filterArgs === undefined) {
        return itemsCopy;
    }
    if (filterArgs.brands !== undefined && filterArgs.brands.length !== 0) {
        itemsCopy = itemsCopy.filter((item) => filterArgs.brands.includes(item.brand_id));
    }
    if (filterArgs.rating !== undefined) {
        itemsCopy = itemsCopy.filter((item) => item.rating >= filterArgs.rating);
    }
    if (filterArgs.categories !== undefined && filterArgs.categories.length !== 0) {
        itemsCopy = itemsCopy.filter((item) => filterArgs.categories.includes(item.category_id));
    }
    return itemsCopy;
}
export const getFullPath = (location) => {
    const path = location.pathname;
    const search = location.search;
    return `${path}${search}`;
}
