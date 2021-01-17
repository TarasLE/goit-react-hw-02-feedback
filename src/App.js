import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import FeedbackOptions from './components/Feedback/TestFeedbackOptions'
import Statistics from './components/Statistics/Statictics'
import FeedbackOptions from './components/Feedback/FeedbackOptions'
import Section from './components/Section/Section'

export default class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         good: 0,
    //         neutral: 0,
    //         bad: 0,
    //     }
    // }

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    static defaultProps = {}

    static propTypes = {}

    // handleFeedback = (e) => {
    //     this.setState({ [e]: this.state[e] + 1 })
    //     console.log(this.state)
    // }

    handleFeedback = (e) => {
        this.setState({ [e]: this.state[e] + 1 })
        // console.log(this)
        // const { teststate } = this.state
        // console.log(teststate)
        // console.log('working')
        // console.log(this.state)
        // console.log(e)
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
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={this.handleFeedback}
                    />
                </Section>

                <Section title="Statistics">
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={total}
                        positivePercentage={positiceFeedbacks}
                    />
                </Section>
            </div>
        )
    }
}
