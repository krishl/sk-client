import React, { Component } from 'react';  
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import {StyleSheet, css} from 'aphrodite-jss';

const sheet = StyleSheet.create({
  content: {
    width: '59%',
    height: '100%',
    float: 'right',
    position: 'relative',
    top: '-94px'
  },
})

class ProductPage extends Component {  
  render() {
    return (
      <div className={css(sheet.content)}>
        <h3>{this.props.product.attributes.name}</h3>
        Brand: {this.props.product.attributes.brand}
      </div>
    );
  }
};

ProductPage.propTypes = {  
  product: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {  
  let product = {attributes: {}};
  if (state.products.length > 0) {
    product = Object.assign({}, state.products.find(product => product.id === 
      ownProps.match.params.id)
    )}
  return { product }
};


export default connect(mapStateToProps)(ProductPage);  