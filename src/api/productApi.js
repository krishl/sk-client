export default class ProductApi {  
  static getAllProducts() {
    return fetch('http://localhost:3001/api/v1/products').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}