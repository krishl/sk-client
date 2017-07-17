import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Checkbox from './Checkbox';
import {StyleSheet, css} from 'aphrodite-jss';

const sheet = StyleSheet.create({
  div: {
    width: '30%',
    height: '490px',
    float: 'left',
    overflowY: 'auto'
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    opacity: '1',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  row: {
    borderBottom: '1px solid #ddd',
    width: '100%',
    padding: '8px',
    '&:hover': { backgroundColor: '#ddd' },
  },
  cell: {
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'center',
    color: 'black'
  }
})

class ProductsList extends Component {
  createCheckbox = product => (
    <tr key={product.id} className={css(sheet.row)}>
      <td>
        <Checkbox
          product={product}
          handleCheckboxChange={this.props.handleClick}
        />
      </td>
      <td className={css(sheet.cell)}>
       {product.name}
      </td>
    </tr>
  )

  createCheckboxes = () => (
    this.props.products.map(this.createCheckbox)
  )

  renderProducts = () => (
    this.props.products.map(product => 
      <tr key={product.id} className={css(sheet.row)}><td className={css(sheet.cell)}><Link to={`/products/${product.id}`}>{product.name}</Link></td></tr>
    )
  )

  render() {
    return (
      <div className={css(sheet.div)}>
        <p><button id="myButton"><Link to={`/products/new`}>Add New Product</Link></button></p>
          <form>
            <table className={css(sheet.table)}>
              <tbody>
               {this.props.match.url === "/compare" ? this.createCheckboxes() : this.renderProducts()} 
              </tbody>
            </table>
          </form>
      </div>
    );
  }
};


ProductsList.propTypes = {  
  products: PropTypes.array.isRequired
};

export default ProductsList;