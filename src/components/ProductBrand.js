import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductBrand extends Component {  
  render() {
    return (
      <div>
        <h2>{this.props.brand}</h2>
        <h3>Products</h3>
        <ul>
          {this.props.products.map(product => 
          <li key={product.id}><Link to={`/products/${product.id}`}>{product.name}</Link></li>
          )}
        </ul>
      </div>
    );
  }
};