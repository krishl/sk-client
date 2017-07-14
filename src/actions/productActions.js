import productApi from '../api/productApi.js';
import * as types from './actionTypes'; 

export function loadProducts() {  
  return function(dispatch) {
    return productApi.getAllProducts().then(products => {
      dispatch(loadProductsSuccess(products.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadProductsSuccess(products) {  
  return {type: types.LOAD_PRODUCTS_SUCCESS, products};
}

export function createProduct(product) {  
  return function(dispatch) {
    return productApi.createProduct(product).then(response => {
      dispatch(createProductSuccess(response.data));
      //return response;
    }).catch(error => {
      throw(error);
    });
  };
}

export function createProductSuccess(product) {  
  return {type: types.CREATE_PRODUCT_SUCCESS, product}
}
