import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicious Salad with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <button style={{color: "#944317"}} clicked={props.purchaseCancelled}>CANCEL</button>
      <button style={{color: "#5C9210"}} clicked={props.purchaseContinued}>CONTINUE</button>
    </Aux>
  );
};

export default orderSummary;
