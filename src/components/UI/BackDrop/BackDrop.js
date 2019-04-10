import React, { Component } from 'react';
import classes from './BackDrop.css';

class BackDrop extends Component {
  render() {
    return (
      this.props.show ? <div className={classes.BackDrop} onClick={this.props.clicked}></div> : null
    );
  }
}

export default BackDrop;