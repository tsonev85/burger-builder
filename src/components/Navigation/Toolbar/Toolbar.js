import React, { Component } from 'react';
import classes from './Toolbar.css';


class Toolbar extends Component {
  render() {
    return (
      <div>
        <header className={classes.Toolbar}>
          <div>MENU</div>
          <div>LOGO</div>
          <nav>
            ...
          </nav>
        </header>
      </div>
    );
  }
}

export default Toolbar;