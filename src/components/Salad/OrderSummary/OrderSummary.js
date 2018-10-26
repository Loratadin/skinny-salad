import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey, index) => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }} value={igKey} key={index}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicious Salad with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
	  <p>Total Price: {props.price.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
