import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite-jss';

const sheet = StyleSheet.create({
  div: {
    width: '30%',
    height: '100%',
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
    color: 'white'
  }
})

const ProductsList = ({ products }) => {  
  const renderProducts = products.map(product => 
    <tr className={css(sheet.row)}><td className={css(sheet.cell)}><Link key={product.id} to={`/products/${product.id}`}>{product.attributes.name}</Link></td></tr>
  );
  return (
    <div className={css(sheet.div)}>
      <h2>Products</h2>
      <table className={css(sheet.table)}>
        {renderProducts}
      </table>
    </div>
  );
};


ProductsList.propTypes = {  
  products: PropTypes.array.isRequired
};

export default ProductsList;