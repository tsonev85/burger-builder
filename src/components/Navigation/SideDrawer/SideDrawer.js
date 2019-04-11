import React, {Component} from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Auxilary/Auxilary';


class SideDrawer extends Component {
  render() {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (this.props.open) {
      attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
      <Aux>
        <BackDrop
          clicked={this.props.closed}
          show={this.props.open}
        />
        <div className={attachedClasses.join(' ')}>
          <div className={classes.Logo}>
            <Logo/>
          </div>
          <nav>
            <NavItems/>
          </nav>
        </div>
      </Aux>
    );
  }
}

export default SideDrawer;