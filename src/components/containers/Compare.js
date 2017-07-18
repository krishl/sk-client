import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux';
import {StyleSheet, css} from 'aphrodite-jss';
import ProductsList from '../ProductsList';
import IndividualProduct from '../IndividualProduct';
import Similarities from '../Similarities';

const sheet = StyleSheet.create({
  primary: {
    height: 'auto',
    backgroundColor: 'white',
    opacity: '.8',
    margin: 'auto',
    padding: '20px',
    '&:hover': { opacity: '.95' },
    display: 'flex',
    flexWrap: 'wrap'
  },
  content: {
    opacity: '1'
  }
})

class Compare extends Component { 
  state = {
    products: []
  }

  handleClick = (product) => {
    var products = this.state.products 
    if (products.includes(product)) {
      var index = products.indexOf(product)
      if (index > -1) {
        products.splice(index, 1)
      }
      this.setState({products: products})            
    } else {
      products.push(product)
      this.setState({products: products})      
    }
  }

  render() {
    const {products} = this.state
    return (
      <div className={css(sheet.primary)}>
        <Similarities products={products} />
        <ProductsList products={this.props.products} match={this.props.match} handleClick={this.handleClick} />
        {products.map((product, i) => <IndividualProduct product={product} key={i} match={this.props.match} />)}
      </div>
    );
  }
};

Compare.propTypes = {
  products: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    products: state.products
  }
} 

export default connect(mapStateToProps)(Compare);  