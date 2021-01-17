import React from 'react'
import PropTypes, { object } from 'prop-types'
// import shortid from 'shortid'
import styles from './FeedbackOption.module.css'
// import FeedbackOptions from './FeedbackOptions'
import Options from '../../feedbackOptions.json'
import Statictics from '../Statistics/Statictics'

// function FeedbackOptions(options, onLeaveFeedback) {
//     return (
//         <div className={styles.Container}>
//             <h1>{titleFeedback}</h1>
//             <ul className={styles.OptList}>
//                 {Options.map((item) => (
//                     <li className={styles.OptItem} key={item.opt}>
//                         <button
//                             label={item.opt}
//                             type="button"
//                             onClick={() => this.handleFeedback(item.opt)}
//                         >
//                             {item.opt}
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//             <Statictics
//                 good={this.state.good}
//                 neutral={this.state.neutral}
//                 bad={this.state.bad}
//                 total={total}
//                 positivePercentage={positiceFeedbacks}
//             />
//         </div>
//     )
// }

class Feedback extends React.Component {
    static defaultProps = {
        titleFeedback: 'Please leave feedback',
        titleStatistics: 'Statistics',
    }

    loadState() {
        Options.map((item) => {
            this.state[item.opt] = 0
        })
    }

    loadStatsData() {
        Object.entries(this.state).forEach(([key, value]) => {})
    }

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleFeedback = (e) => {
        this.setState({ [e]: this.state[e] + 1 })
        console.log(this.state)
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
        const { titleFeedback, titleStatistics } = this.props
        return (
            <div className={styles.Container}>
                <h1>{titleFeedback}</h1>
                <ul className={styles.OptList}>
                    {Options.map((item) => (
                        <li className={styles.OptItem} key={item.opt}>
                            <button
                                label={item.opt}
                                type="button"
                                onClick={() => this.handleFeedback(item.opt)}
                            >
                                {item.opt}
                            </button>
                        </li>
                    ))}
                </ul>
                <Statictics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={total}
                    positivePercentage={positiceFeedbacks}
                />
            </div>
        )
    }
}

export default Feedback
