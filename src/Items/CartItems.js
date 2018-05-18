import React from 'react';
import CartItemComponent from '../CartItem/CartItem';


// const People = ({ people }) => {
//     let peopleList = people.map(person => <Person key={person.id} person={person} />)
//         < ul >
//         { peopleList }
//   </ul >
// }

const CartItems = (props) => {
    const cartListItems = props.items;
    let cartList = cartListItems.map(item => <CartItemComponent key={item.id} name={item.product.name} price={item.product.priceInCents} quantity={item.quantity} />);

    return <div className="container">
        <h3>Cart Items</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          {cartList}
        </table>
      </div>;
}
export default CartItems;