import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = {
  products: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: state.products.concat(action.payload.productData),
      };
    case REMOVE_PRODUCT: {
      const newProducts = state.products.filter(product => product.id !== action.payload.id);
      return {
        products: newProducts,
      };
    }

    default:
      return state;
  }
};
export default cartReducer;
