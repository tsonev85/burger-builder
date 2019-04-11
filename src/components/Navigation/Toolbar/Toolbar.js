import React, { Component } from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavItems from '../NavigationItems/NavItems'

class Toolbar extends Component {
  render() {
    return (
      <div>
        <header className={classes.Toolbar}>
          <div>MENU</div>
          <div className={classes.Logo}>
            <Logo/>
          </div>
          <nav>
            <NavItems/>
          </nav>
        </header>
      </div>
    );
  }
}

export default Toolbar;