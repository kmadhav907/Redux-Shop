import { ActionTypes } from '../Constants/productActionConstant';

const initialState = {
  products: [{ id: 1, title: 'Dipesh', category: 'programmer' }]
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    case ActionTypes.SELECTED_PRODUCT:
      return state;
    default:
      return state;
  }
};
