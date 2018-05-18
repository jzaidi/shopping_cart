import React, { Component } from "react";
import "./App.css";
import CartHeader from "./Header/CartHeader";
import CartFooter from "./Footer/CartFooter";
import CartItems from "./Items/CartItems";

class App extends Component {
  render() {
    const cartItemsList = [
      {
        id: 1,
        product: { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
        quantity: 1
      },
      {
        id: 2,
        product: {
          id: 41,
          name: "Heavy Duty Concrete Plate",
          priceInCents: 499
        },
        quantity: 2
      },
      {
        id: 3,
        product: {
          id: 42,
          name: "Intelligent Paper Knife",
          priceInCents: 1999
        },
        quantity: 1
      }
    ];

    return (
      <div className="App">
        <CartHeader />
        <CartItems items={cartItemsList}/>
        <CartFooter copyright="&copy;" year="2018" />
      </div>
    );
  }
}

export default App;
