import React, { Component } from "react";
import * as Message from '../../constans/message';

class ProductItem extends Component {
  showStar = (product) => {
    var result = [];
    for(var i = 0; i < product.star; i++ )
    {
      result.push(<li key= {i}>
                  <i className="fa fa-star"></i>
                </li>)
    }
    for(var i = 0; i < 5 - product.star; i++ )
    {
      result.push(<li key= {i+"c"}>
                  <i className="fa fa-star-o"></i>
                </li>)
    }
    return result;
  }

  render() {
    var {product} = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img
              src={product.image}
              className="img-fluid"
              alt=""
            />
            <a>
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              {this.showStar(product)}
            </ul>
            <p className="card-text">{product.desc}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => this.addToCard(product)}
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  addToCard = (product) => {
    this.props.onAddToCard(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
  }
}


export default ProductItem;
