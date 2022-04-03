import React, { Component } from 'react';

//components
import Statistics from './components/statistics';
import FeedbackOptions from './components/feedback-options';
import Section from './components/section';
import Notification from './components/notification';

//styles
import './App.css';

interface Props { }

interface State {
  good: number,
  neutral: number,
  bad: number
}
 
const options: string[] = ['Good', 'Neutral', 'Bad'];


class App extends Component<Props, State> {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (e:React.MouseEvent) => {
    if (e.currentTarget.textContent === 'Good') this.incGood();
    if (e.currentTarget.textContent === 'Neutral') this.incNeutral();
    if( e.currentTarget.textContent === 'Bad') this.incBad()
  }
  
  incGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1
      };
    });
  };

  incNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1
      };
    });
  };

  incBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedback = Math.round(this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad));
    return isNaN(positiveFeedback)? 0 : positiveFeedback
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div className="App">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options }
            onLeaveFeedback={this.onLeaveFeedback }
        />
        </Section>

        <Section title={'Statistics'}>
          {
            (good === 0 && neutral === 0 && bad === 0) ?
              <Notification message={'No feedback given' }/>
              :
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
          }
        </Section>

    </div>
  );
  };
};

export default App;
