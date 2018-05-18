import React from 'react';

const titleStyle = {
    color: 'white'
};
const CartHeader = () => {
    return(
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#" style={titleStyle}>Shopping Cart</a>
        </nav>
    );
}

export default CartHeader;