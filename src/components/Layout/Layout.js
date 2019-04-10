import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary'
import classes from './LayOut.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  };
}

export default Layout;
