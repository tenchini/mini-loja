import React from 'react'
import styles from './Skeleton.module.css'

export const Skeleton = () => (
    <div className={styles.skeleton}>
        <div className={styles.image}></div>
        <div className={styles.content}>
            <div className={styles.line}></div>
            <div className={`${styles.line} ${styles.md}`}></div>
            <div className={`${styles.line} ${styles.sm}`}></div>
        </div>
    </div>
)
