import React, {Component} from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

class BuildControls extends Component {

  controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
  ];

  render() {
    return (
      <div className={classes.BuildControls}>
        <p>Current Price: <strong>{this.props.price.toFixed(2)}</strong></p>
        {this.controls.map((ctrl) => (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            ingredientAdded={() => this.props.ingredientAdded(ctrl.type)}
            ingredientRemoved={() => this.props.ingredientRemoved(ctrl.type)}
            disabled={this.props.disabled[ctrl.type]}
          />
        ))}
        <button
          className={classes.OrderButton}
          disabled={!this.props.purchaseable}
          onClick={this.props.ordered}>
          ORDER NOW
        </button>
      </div>
    );
  }
}

export default BuildControls;