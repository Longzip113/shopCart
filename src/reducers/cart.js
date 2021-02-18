import * as types from '../constans/index'
import { findIndex } from 'lodash';

var data = JSON.parse(localStorage.getItem('CART'));

 var initialState = data ? data : [];
//[
//   {
//     product: {
//       id: 1,
//       name: "Iphone 11",
//       description: "Sản phẩm VN/A",
//       image:
//         "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/2132584444.jpeg",
//       price: 650,
//       number: 10,
//       star: 3,
//     },
//     quantity: 5,
//   },
//   {
//     product: {
//       id: 2,
//       name: "Iphone 11 Pro",
//       description: "Sản phẩm VN/A",
//       image: "https://shopdunk.com/wp-content/uploads/2019/09/iP11Pro-2.jpg",
//       price: 1050,
//       number: 15,
//       star: 2,
//     },
//     quantity: 5,
//   },
// ];

var myReducer = (state = initialState, action) => {
  var {product, quantity, typeUpdate} = action;
  switch (action.type) {
    case types.ADD_TO_CART:
      var index = findIndex(state, (item) => {
          return item.product.id === product.id;
      })
      if(index < 0) {
        state.push({
          product,
          quantity
        })
      } else {
        state[index].quantity = state[index].quantity + 1
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    case types.DELETE_TO_CART:
      var index = findIndex(state, (item) => {
        return item.product.id === product.id;
      })
      state.splice(index,1);
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    case types.UPDATE_TO_CART:
      var index = findIndex(state, (item) => {
        return item.product.id === typeUpdate.id;
      })
      state[index].quantity = state[index].quantity +   parseInt(typeUpdate.number,10);
      if(state[index].quantity == 0) {
        state.splice(index,1);
      }
      return [...state];
    default:
      return [...state];
  }
};


export default myReducer;
