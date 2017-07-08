import productApi from '../api/productApi.js';

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
  return {type: 'LOAD_PRODUCTS_SUCCESS', products};
}