import PropTypes from 'prop-types';
const { Component } = require('react');

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    return (
      <>
        <h2>Please leave feedback</h2>
        {options.map(option => {
          return (
            <button key={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          );
        })}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};

export default FeedbackOptions;
