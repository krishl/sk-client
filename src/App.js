import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar.js';
import PropTypes from 'prop-types';

const Compare = () => (
  <div>
    <h2>Compare</h2>
  </div>
)

const ProductsPage = () => (
  <div>
    <h2>ProductsPage</h2>
  </div>
)

const IngredientsPage = () => (
  <div>
    <h2>IngredientsPage</h2>
  </div>
)

const Product = ({ match }) => (
  <div>
    <h3>{match.params.productId}</h3>
  </div>
)

const ReactRouter = () => (
  <Router>
    <div className="navbar">
      < NavBar />
      <hr/>

      <Route exact path="/" component={Compare}/>
      <Route path="/products" component={ProductsPage}/>
      <Route path="/ingredients" component={IngredientsPage}/>
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text">Luminance</h1>
        <div className="App-header">
          < ReactRouter />
        </div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {  
  children: PropTypes.object.isRequired
};

export default App;
