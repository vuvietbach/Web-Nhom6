export const setItems = (items) => {
    return {
        type: 'SET_ITEMS',
        items
    }
}
export const sortItems = (sortType) => {
    return {
        type: 'SORT_ITEM',
        sortType
    }
}
export const filterItems = (filterArgs) => {
    return {
        type: 'FILTER_ITEM',
        filterArgs
    }

}
export const setDisplayRange = (displayRange) => {
    return {
        type: 'SET_DISPLAY_RANGE',
        displayRange
    }
}