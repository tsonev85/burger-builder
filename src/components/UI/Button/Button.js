import React, { Component } from 'react';
import classes from './Button.css'

class Button extends Component{
  render() {
    return (
      <div>
        <button
          onClick={this.props.clicked}
          className={[
            classes.Button, classes[this.props.btnType]
          ].join(' ')}
        >{this.props.children}</button>
      </div>
    );
  }
}

export default Button;