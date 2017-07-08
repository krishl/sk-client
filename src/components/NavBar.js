import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="links">
      <NavLink exact to="/" activeClassName="active">Home</NavLink> 
      <NavLink to="/products" activeClassName="active">Products</NavLink>
      <NavLink to="/ingredients" activeClassName="active">Ingredients</NavLink>
    </div>
  );
}

export default NavBar;