import PropTypes from 'prop-types';
const { Component } = require('react');

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
