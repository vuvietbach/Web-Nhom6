import {sortItems, filterItems} from 'utils.js'
import {combineReducers} from 'redux'
const itemDefaultState = {
    items: [],
    filteredItems: [],
    displayRange: [0, 20],
}
export const itemReducer = (state = itemDefaultState, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return {
                ...state,
                items: action.items,
                filteredItems: action.items
            }
        case 'SORT_ITEM':
            return {
                ...state,
                filteredItems: sortItems(state.filteredItems, action.sortType)
            }
        case 'FILTER_ITEM':
            return {
                ...state,
                filteredItems: filterItems(state.items, action.filterArgs)
            }
        case 'SET_DISPLAY_RANGE':
            return {
                ...state,
                displayRange: action.displayRange
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    item: itemReducer
});
export default rootReducer;