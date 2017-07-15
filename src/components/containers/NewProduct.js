import React, {Component} from 'react'; 
import PropTypes from 'prop-types' 
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import update from 'immutability-helper' 
import * as productActions from '../../actions/productActions';  
import ProductForm from '../ProductForm';
import { Redirect } from 'react-router-dom';

class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: '', 
        brand: '',
        ingredients: []
      },
      show: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.products.length > this.props.products.length) {
      this.setState({show: true})
    }
  }

  updateProductState = (event) => {
    this.setState({
      product: update(this.state.product, {
      [event.target.name]: {$set: event.target.value},
      })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createProduct(this.state.product)
  }

  render() {
    if (this.state.show) {
      const {products} = this.props
      const newProduct = products[products.length - 1]
      return (
        <Redirect to={`/products/${newProduct.id}`}/>
      )
    }
    return (
      <div>
        <ProductForm 
          product={this.state.product} 
          onChange={this.updateProductState}
          onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

NewProduct.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {  
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);  