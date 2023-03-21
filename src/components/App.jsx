import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';
import css from './App.module.css';
const { Component } = require('react');

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    let percentage = (good / total) * 100;
    return Math.round(percentage);
  };

  onLeaveFeedback = e => {
    if (e.target.textContent === 'Good') {
      this.setState(prev => {
        return { good: prev.good + 1 };
      });
    }

    if (e.target.textContent === 'Neutral') {
      this.setState(prev => {
        return { neutral: prev.neutral + 1 };
      });
    }

    if (e.target.textContent === 'Bad') {
      this.setState(prev => {
        return { bad: prev.bad + 1 };
      });
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.main}>
        <div>
          <Section title="Kawiarnia Expresso">
            <FeedbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
              options={['Good', 'Neutral', 'Bad']}
            ></FeedbackOptions>
            {good > 0 || neutral > 0 || bad > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              ></Statistics>
            ) : (
              <Notification message={'There is no feedback'}></Notification>
            )}
          </Section>
        </div>
      </div>
    );
  }
}
