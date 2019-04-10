import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';


class OrderSumamry extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey=>{
                return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                    : {this.props.ingredients[igKey]}
                </li>
            });
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to checkout?</p>
              <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
              <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
            </Aux>
        );
    };
}

export default OrderSumamry;