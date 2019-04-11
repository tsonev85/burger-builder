import React, { Component } from 'react';
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem'

class NavItems extends Component {
  render() {
    return (
      <div>
        <ul className={classes.NavItems}>
          <NavItem link='/' active={true}>
            Burger Builder
          </NavItem>
          <NavItem link='/' active={false}>
            Checkout
          </NavItem>
        </ul>
      </div>
    );
  }
}

export default NavItems;