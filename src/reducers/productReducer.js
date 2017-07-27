import * as types from '../actions/actionTypes'; 

export default function productReducer(state = [], action) {  
  switch(action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products
    case types.CREATE_PRODUCT_SUCCESS:
      return [
        ...state,
        action.product
      ]
    case types.UPVOTE_PRODUCT_SUCCESS:
      state.forEach(product => {
        if (product.id === action.product.id) {
          product.upvote += 1     
        }
      })
      return [...state]
    default: 
      return state;
  }
}