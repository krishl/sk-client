import React, {Component} from 'react'; 
import PropTypes from 'prop-types'; 
import {connect} from 'react-redux';
import {StyleSheet, css} from 'aphrodite-jss';
import ProductsList from '../ProductsList';
import {
  Switch,
  Route
} from 'react-router-dom'
import ProductShow from './ProductShow.js';
import NewProduct from '../NewProduct.js';
import BrandContainer from './BrandContainer.js';
import { upvoteProduct } from '../../actions/productActions.js'


const sheet = StyleSheet.create({
  primary: {
    height: '562px',
    backgroundColor: 'white',
    opacity: '.8',
    margin: 'auto',
    padding: '20px',
    overflow: 'auto',
    '&:hover': { opacity: '.95' }
  },
  content: {
    opacity: '1'
  }
})

class ProductsPage extends Component {  
  render() {
    return(
      <div className={css(sheet.primary)}>
        <div className={css(sheet.content)}>
          <ProductsList upvoteProduct={this.props.upvoteProduct} products={this.props.products} match={this.props.match} />
          <Switch>
            <Route path="/products/new" component={NewProduct}/> 
            <Route path="/products/brand/:brand" component={BrandContainer} products={this.props.products} />
            <Route path="/products/:id" component={ProductShow}/>
          </Switch>
        </div>
      </div>
    )
  }
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    products: state.products
  }
} 

export default connect(mapStateToProps,{ upvoteProduct } )(ProductsPage);  