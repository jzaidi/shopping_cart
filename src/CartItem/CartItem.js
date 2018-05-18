import React from "react";

const CartItemComponent = (props) => {
  return (
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.price}</td>
          <td>{props.quantity}</td>
        </tr>
      </tbody>
  );
};

export default CartItemComponent;
