import React, { Component } from "react";
import Message from "../component/Message";
import PropTypes from 'prop-types';

import { connect } from "react-redux";

class messageContainer extends Component {

  render() {
    var { message } = this.props;
    return <Message>
            {message}
        </Message>;
  }
}

messageContainer.propTypes = {
    message : PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};


export default connect(mapStateToProps, null)(messageContainer);
