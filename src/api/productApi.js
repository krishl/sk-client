export default class ProductApi {  
  static getAllProducts() {
    return fetch('http://localhost:3001/api/v1/products').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createProduct(product) {
    const request = new Request('http://localhost:3001/api/v1/products/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({product: product})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}