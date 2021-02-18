import * as types from '../constans/index'
import * as Message from '../constans/message';

var initialState = Message.MSG_WELLCOME;

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
        state = action.message;
        return state;
    default:
      return state;
  }
};


export default myReducer;
