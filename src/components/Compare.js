import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite-jss';

const sheet = StyleSheet.create({
  primary: {
    maxHeight: '500px',
    backgroundColor: 'white',
    opacity: '.8',
    margin: 'auto',
    padding: '20px',
    '&:hover': { opacity: '.95' }
  },
  content: {
    opacity: '1'
  }
})

export default class Compare extends Component {
  render() {
    return (
      <div className={css(sheet.primary)}>
        <div className={css(sheet.content)}>
          <h2>Welcome to Luminance!</h2> Everybody is different in their own way, and this statement does not exclude our skin's reactions to skincare ingredients.<br />
          This tool compares the ingredients between skincare products for similarities.
        </div>
      </div>
    )}
}