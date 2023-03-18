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

export default FeedbackOptions;
