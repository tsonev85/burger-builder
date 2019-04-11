import React, { Component } from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavItems from '../NavigationItems/NavItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


class Toolbar extends Component {
  render() {
    return (
      <div>
        <header className={classes.Toolbar}>
          <DrawerToggle clicked={this.props.clicked}/>
          <div className={classes.Logo}>
            <Logo/>
          </div>
          <nav className={classes.DesktopOnly}>
            <NavItems/>
          </nav>
        </header>
      </div>
    );
  }
}

export default Toolbar;