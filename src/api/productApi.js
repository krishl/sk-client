export default class ProductApi {  
  static getAllProducts() {
    return fetch('https://ancient-garden-45302.herokuapp.com/api/v1/products.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createProduct(product) {
    const request = new Request('https://ancient-garden-45302.herokuapp.com/api/v1/products.json', {
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

  static upvoteProduct(id) {
    const request = new Request('https://ancient-garden-45302.herokuapp.com/api/v1/upvote.json', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({product: {id: id}})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}