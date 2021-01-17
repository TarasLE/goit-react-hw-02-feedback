import React from 'react'
import PropTypes from 'prop-types'
import styles from './Statictics.module.css'

function Statictics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div>
            <h1>Statistics</h1>
            {total > 0 ? (
                <div>
                    <ul className={styles.StatList}>
                        <li>
                            <h2>Good: {good}</h2>
                        </li>
                        <li>
                            <h2>Neutral: {neutral}</h2>
                        </li>
                        <li>
                            <h2>Bad: {bad}</h2>
                        </li>
                    </ul>
                    <h2>Total:{total}</h2>
                    <h2>positive Feedback: {positivePercentage}%</h2>
                </div>
            ) : (
                <h2>No feedback given</h2>
            )}
        </div>
    )
}

Statictics.propTypes = {}

export default Statictics
