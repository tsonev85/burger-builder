import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';


class BurgerBuilder extends Component {

  state = {
    purchasing: false
  };

  updatePurchaseState = () => {
    const sum = Object.keys(this.props.ings)
      .map(igKey => {
        return this.props.ings[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    alert('Checkout not yet implemented.')
  };

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.props.ings}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.props.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.props.ings}/>
        <BuildControls
          ingredientAdded={this.props.onIngredientAdded}
          ingredientRemoved={this.props.onIngredientRemoved}
          price={this.props.totalPrice}
          purchaseable={this.updatePurchaseState()}
          ordered={this.purchaseHandler}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
  };
};

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    totalPrice: state.totalPrice
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);