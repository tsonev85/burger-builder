import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary'
import classes from './LayOut.css'

class Layout extends Component {
  render() {
    return (
      <Aux>
        <div>
          Toolbar, SideDrawer, Backdrop
        </div>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  };
}

export default Layout;
