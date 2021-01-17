import React from 'react'
import PropTypes, { object } from 'prop-types'
// import shortid from 'shortid'
import styles from './FeedbackOption.module.css'
// import FeedbackOptions from './FeedbackOptions'
// import Options from '../../feedbackOptions.json'
// import Statictics from '../Statistics/Statictics'

export default function TestFeedbackOptions({ options, onLeaveFeedback }) {
    const option = [...Object.keys(options)]
    return (
        <div className={styles.Container}>
            {/* <h1>Please leave feedback</h1> */}
            <ul className={styles.OptList}>
                {option.map((opt) => (
                    <li className={styles.OptItem} key={opt}>
                        <button
                            type="button"
                            // onClick={() => `${onLeaveFeedback}(${opt})`}
                            onClick={() => onLeaveFeedback(opt)}
                            // onClick={onLeaveFeedback}
                        >
                            {opt}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
