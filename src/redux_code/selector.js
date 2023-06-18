export const selectDisplayItems = (state) => {
    if (state.item.filteredItems.length === 0) {
        return [];
    }
    if(state.item.displayRange === undefined) {
        return state.item.filteredItems;
    }
    if (state.item.displayRange[1] > state.item.filteredItems.length) {
        return state.item.filteredItems.slice(state.item.displayRange[0]);
    }
    return state.item.filteredItems.slice(state.item.displayRange[0], state.item.displayRange[1]);
}