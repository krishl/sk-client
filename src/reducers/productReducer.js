import initialState from './initialState';

export default function productReducer(state = initialState.products, action) {  
  switch(action.type) {
    case 'LOAD_PRODUCTS_SUCCESS':
      return action.products
    default: 
      return state;
  }
}