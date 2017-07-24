import * as types from '../actions/actionTypes'; 

const initialState = {  
  products: []
}

export default function productReducer(state = initialState.products, action) {  
  switch(action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products
    case types.CREATE_PRODUCT_SUCCESS:
      return [
        ...state,
        action.product
      ]
    case types.UPVOTE_PRODUCT_SUCCESS:
      return action.product
    default: 
      return state;
  }
}