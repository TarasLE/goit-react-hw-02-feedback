import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FeedbackOptions from './components/Feedback/FeedbackOptions'
import Statistics from './components/Statistics/Statictics'
import TestFeedbackOptions from './components/Feedback/TestFeedback'

export default class App extends Component {
    static defaultProps = {}

    static propTypes = {}

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    // handleFeedback = (e) => {
    //     this.setState({ [e]: this.state[e] + 1 })
    //     console.log(this.state)
    // }

    handleFeedback(e) {
        // this.setState({ [e]: this.state[e] + 1 })
        console.log('working')
        // const { teststate } = this.state
        // console.log(teststate)
    }

    countTotalFeedback = () => {
        return Object.values(this.state).reduce(
            (accum, value) => accum + value,
            0
        )
    }

    countPositiveFeedbackPercentage = () => {
        return this.countTotalFeedback() > 0
            ? Math.round(
                  Number((this.state.good / this.countTotalFeedback()) * 100)
              )
            : 0
    }

    render() {
        const positiceFeedbacks = this.countPositiveFeedbackPercentage()
        const total = this.countTotalFeedback()
        return (
            <div className="App">
                {/* <FeedbackOptions /> */}
                <TestFeedbackOptions
                    options={this.state}
                    onLeaveFeedback={this.handleFeedback}
                />

                {/* <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={total}
                    positivePercentage={positiceFeedbacks}
                /> */}
            </div>
        )
    }
}
