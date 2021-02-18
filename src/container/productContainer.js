import React, { Component } from "react";
import Products from "../component/Products/Products";
import ProductItem from "../component/Products/ProductItem";
import PropTypes from 'prop-types';
import * as actions from '../actions/index'

import { connect } from "react-redux";

class productsContainer extends Component {

  onAddCard = (product) => {
    this.props.onAddToCard(product);
  }

  showProduct = (products) => {
    var result = null;
    
    if (products.length > 0) {
      result = products.map((item, index) => {
        return <ProductItem product={item} key={index} onAddToCard = {this.onAddCard} onChangeMessage = {this.props.onChangeMessage}/>;
      });
    }
    return result;
  };

  render() {
    var { products } = this.props;
    return <Products>
            {this.showProduct(products)}
        </Products>;
  }
}

productsContainer.propTypes = {
  products : PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
      star: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChangeMessage : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) =>{
  return{
    onAddToCard : (product) =>{
        dispatch(actions.addToCart(product, 1))
    },
    onChangeMessage : (message) => {
      dispatch(actions.onChangeMessage(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(productsContainer);
