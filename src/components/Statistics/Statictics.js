import React from 'react'
import PropTypes from 'prop-types'
import styles from './Statictics.module.css'
import Notification from '../Notification/Notification'

export default function Statictics({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) {
    return (
        <div className={styles.Container}>
            {total > 0 ? (
                <div className={styles.Container}>
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
                    <div className={styles.ContainerTotal}>
                        <h2 class={styles.TotalData}>Total:{total}</h2>
                        <h2 class={styles.TotalData}>
                            positive Feedback: {positivePercentage}%
                        </h2>
                    </div>
                </div>
            ) : (
                <Notification message="No feedback given"></Notification>
            )}
        </div>
    )
}

Statictics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}
