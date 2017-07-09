import productApi from '../api/productApi.js';
import * as types from './actionTypes';  

export function loadProducts() {  
  return function(dispatch) {
    return productApi.getAllProducts().then(products => {
      dispatch(loadProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadProductsSuccess(products) {  
  return {type: types.LOAD_PRODUCTS_SUCCESS, products};
}