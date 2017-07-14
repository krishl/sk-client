import initialState from './initialState';
import * as types from '../actions/actionTypes'; 

export default function productReducer(state = initialState.products, action) {  
  switch(action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products
    case types.CREATE_PRODUCT_SUCCESS:
      return [
        ...state,
        action.product
      ]
    default: 
      return state;
  }
}