import React, { Component } from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo'
import NavItems from '../NavigationItems/NavItems'


class SideDrawer extends Component {
  render() {
    return (
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    );
  }
}

export default SideDrawer;