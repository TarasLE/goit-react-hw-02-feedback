import React from 'react'
import PropTypes, { object } from 'prop-types'
import styles from './FeedbackOption.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    const option = [...Object.keys(options)]
    return (
        <div className={styles.Container}>
            <ul className={styles.OptList}>
                {option.map((opt) => (
                    <li className={styles.OptItem} key={opt}>
                        <button
                            type="button"
                            onClick={() => onLeaveFeedback(opt)}
                            className={styles.FeedbackBtn}
                        >
                            {opt}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
