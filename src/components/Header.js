import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink> -
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={ startLogout }>LogOut</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = ( { auth }) => {
  console.log('Auth:' , auth);
  return auth;
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);