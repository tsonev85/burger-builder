import React, {Component} from 'react';
import classes from './NavItem.css';

class NavItem extends Component {
  render() {
    return (
      <div>
        <li className={classes.NavItem}>
          <a
            href={this.props.link}
            className={this.props.active ? classes.active : null}
          >{this.props.children}</a>
        </li>
      </div>
    );
  }
}

export default NavItem;