import React, { Component } from "react";
import Cart from "../component/Cart/Cart";
import CartItem from "../component/Cart/CartItem";
import CartResult from "../component/Cart/CartResult";
import * as MSG from '../constans/message';
import * as actions from '../actions/index'


import PropTypes from 'prop-types';
import { connect } from "react-redux";

class cartContainer extends Component {

  showCartItem = (cart) => {
    var result = <tr>
      <td>
        {MSG.MSG_CART_EMPTY}
      </td>
    </tr>;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem product={item}
                         key={index}
                         onDelete = {this.onDelete}
                         onChangQuantity = {this.onChangQuantity}
                         />;
      });
    }
    return result;
  };

  onChangQuantity = (number, id)  =>  {
    this.props.onChangQuantity({number, id});
    this.props.onChangeMessage(MSG.MSG_UPDATE_TO_CART_SUCCESS);
  }

  onDelete = (product) => {
      this.props.onDeleteCart(product);
      this.props.onChangeMessage(MSG.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }

  showCartResult = (cart) => {
    var total = 0;
    if (cart.length > 0) {
      for(var i = 0; i< cart.length; i++){
        total += cart[i].product.price * cart[i].quantity;
      }
    }
    return <CartResult total={total} />;
  }

  render() {
    var { cart } = this.props;
    return <Cart>
            {this.showCartItem(cart)}
            {cart.length > 0 ? this.showCartResult(cart) : ''}
        </Cart>;
  }
}

cartContainer.propTypes = {
  cart : PropTypes.arrayOf(
    PropTypes.shape({
      product : PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        star: PropTypes.number.isRequired,
      }),
      quantity : PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
      onDeleteCart : (product) => {
          dispatch(actions.deleteToCart(product))
      },
      onChangeMessage : (message) => {
        dispatch(actions.onChangeMessage(message));
      },
      onChangQuantity : (typeUpdate)  => {
        dispatch(actions.updateToCart(typeUpdate));
      }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(cartContainer);
