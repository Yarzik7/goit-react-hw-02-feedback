import { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedback => this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));

  countTotalFeedback = () => Object.values(this.state).reduce((acc, val) => acc + val);

  countPositiveFeedbackPercentage = (good, total) => Math.floor((good / total) * 100);

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(good, total);

    const options = Object.keys(this.state);

    return (
      <section className={css.section}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </section>
    );
  }
}

export default App;
