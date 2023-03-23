export const reducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
        let cartItems = [...state.cart, action.payload];
        return {
            ...state,
            value: state.value + 1,
            cart:cartItems,
        }
    }
    return state;
}