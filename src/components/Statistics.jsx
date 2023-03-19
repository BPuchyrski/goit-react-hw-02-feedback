import PropTypes from 'prop-types';
const { Component } = require('react');

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <h3>Statistics</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        {(good > 0 || neutral > 0 || bad > 0) && <p>Total: {total}</p>}
        {(good > 0 || neutral > 0 || bad > 0) && (
          <p>Positive feedback: {positivePercentage}%</p>
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
