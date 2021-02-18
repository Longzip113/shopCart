import React, { Component } from "react";

class CartItem extends Component {
  render() {
    var {product} = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={product.product.image}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{product.product.name}</strong>
          </h5>
        </td>
        <td>{product.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{product.quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a onClick = {() => this.onChangQuantity(-1, product.product.id)}>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a onClick = {() => this.onChangQuantity(1, product.product.id)}>+</a>
            </label>
          </div>
        </td>
        <td>{product.product.price * product.quantity}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick = {() => this.onDelete(product.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  onDelete = (product) => {
    this.props.onDelete(product);
  }
  onChangQuantity = (number, id)  => {
    this.props.onChangQuantity(number, id);
  }
}
export default CartItem;
