import React from 'react'
import PropTypes from 'prop-types'
import styles from './Section.module.css'

export default function Section({ title, children }) {
    return (
        <div className={styles.Container}>
            <h1 className={styles.FeedbackTitle}>{title}</h1>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
}
