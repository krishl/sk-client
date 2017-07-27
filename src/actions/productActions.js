import productApi from '../api/productApi.js';
import * as types from './actionTypes'; 

export function loadProducts() {  
  return function(dispatch) {
    return productApi.getAllProducts().then(products => {
      dispatch(loadProductsSuccess(products.products));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadProductsSuccess(products) {  
  return {type: types.LOAD_PRODUCTS_SUCCESS, products};
}

export function createProduct(product, history) {  
  return function(dispatch) {
    return productApi.createProduct(product).then(response => {
      dispatch(createProductSuccess(response.product));
      history.push(`/products/${response.product.id}`)
    }).catch(error => {
      throw(error);
    });
  };
}

export function createProductSuccess(product) {  
  return {type: types.CREATE_PRODUCT_SUCCESS, product}
}

export function upvoteProduct(id) {
  return function(dispatch) {
    return productApi.upvoteProduct(id).then(response => {
      dispatch(upvoteProductSuccess(response.product));
    }).catch(error => {
      throw(error);
    })
  }
}

export function upvoteProductSuccess(product) {  
  return {type: types.UPVOTE_PRODUCT_SUCCESS, product: product}
}