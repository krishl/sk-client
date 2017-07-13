import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar.js';
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';
import {loadProducts} from './actions/productActions';
import {loadIngredients} from './actions/ingredientActions';
import Compare from './components/Compare.js';
import ProductsPage from './components/containers/ProductsPage.js';

const store = configureStore();
store.dispatch(loadProducts());
store.dispatch(loadIngredients());

const ReactRouter = () => (
  <Provider store={store}>
    <Router>
      <div className="navbar">
        < NavBar />
        <hr/>

        <Route exact path="/" component={Compare}/>
        <Route path="/products" component={ProductsPage}/>
      </div>
    </Router>
  </Provider>
)

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text">Luminance</h1>
        <div className="App-header">
          < ReactRouter />
        </div>
      </div>
    );
  }
}