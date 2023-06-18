const itemReducer = (state = [], action) => {
    switch (action.type) {
        case 'SORT_ITEM':
            
        case 'FILTER_ITEM':
            return state.filter((item) => item.id !== action.id)
        default:
            return state
    }
}