import React, { Component } from 'react';
import './App.css';
import CartHeader from './Header/CartHeader';
import CartFooter from './Footer/CartFooter';
import CartItems from './Items/CartItems'


class App extends Component {
  render() {
    return <div className="App">
        <CartHeader />
        <CartItems />
        <CartFooter />
      </div>;
  }
}

export default App;
