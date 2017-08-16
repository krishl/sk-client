import React, { Component } from 'react';

export default class ProductBrand extends Component {  
  render() {
    return (
      <div>
        <h2>{this.props.brand}</h2>
        <h3>Products</h3>
        <ul>
          {this.props.products.map(product => 
          <li key={product.id}>{product.name}</li>
          )}
        </ul>
      </div>
    );
  }
};