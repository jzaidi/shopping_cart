import React, { Component } from "react";
//Takes in props.products and props.onAdd function
class AddItem extends Component {
  state = {
    product: null,
    quantity: "0"
  };
  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}> 
        <div className="form-group">
          <label htmlFor="quan">Quantity</label>
          <input
            type="text"
            className="form-control"
            id="quan"
            aria-describedby="emailHelp"
            value={this.state.quantity}
            onChange={this.handleQuantity}
          />
        </div>
        <div className="form-group">
          <label htmlFor="products">Products</label>
          <select className="form-control" id="products" onChange={this.handleProduct} value={this.productId}>
            <option selected value ="none">N/A</option>
            {this.props.products.map(product => (
                <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">
          Add Item
        </button>
      </form>
    );
  }
  get productId() {
      return this.state.product && this.state.productId;
  }

  handleQuantity = e => {
      const {value: quantity} = e.target;

      this.setState({quantity});
  };

  handleProduct = e => {
      const { value } = e.target;
      const selectedID = parseInt(value, 10);

      const product = this.props.products.filter(({ id }) => id === selectedID)[0];
      console.log("product", product);

      this.setState({product})
  }

  handleSubmit = e => {
      e.preventDefault();
      if(this.state.product === null) {
          return alert('Must select a product');
      }

      this.props.onAdd({
          id: Date.now(),
          ...this.state
      });
  };
}
export default AddItem;
