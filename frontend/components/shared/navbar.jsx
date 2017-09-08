import React, { PropTypes } from 'react'
import { Link, withRouter, Route } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar-container">
      <Link to='/' className="navbar-title">
        <i className="fa fa-chain-broken" aria-hidden="true"></i>
      </Link>
      <div className="btn-group">
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);
