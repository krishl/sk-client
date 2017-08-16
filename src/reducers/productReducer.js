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
      const newState = state.map(product => {
        if (product.id === action.product.id) {
          return {
            ...product, 
            upvote: product.upvote + 1
          }
        } else {
          return product
        }
      })
      return newState
    default: 
      return state;
  }
}