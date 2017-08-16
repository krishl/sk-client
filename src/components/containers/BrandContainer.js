import React, { Component } from 'react';  
import {connect} from 'react-redux';
import ProductBrand from '../ProductBrand';

class BrandContainer extends Component {  
  render() {
    return (
      <div>
        <ProductBrand products={this.props.products} brand={this.props.match.params.brand.replace('_', ' ')} />
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  let productsArray = [];
  state.products.forEach(function(product) {
    if (product.brand === ownProps.match.params.brand.replace('_', ' ')) {
      productsArray.push(product)
    }
  })
  return {products: productsArray}
};

export default connect(mapStateToProps)(BrandContainer);  