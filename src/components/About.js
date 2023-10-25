import React from 'react'
import styles from './About.module.css'
import './About.css'
//rfce
function About() {
  return (
    <div>
        <h1 className={styles.primary}>About Page</h1>
        <h2 className={styles.fontxl}>About Us</h2>
        <h3 className={`${styles.primary} ${styles.fontxl}`}>Hello!</h3>
        <h4 className={`${styles.primary} ${fontxl}`}>I am Aalok!</h4>
    </div>
  )
}

export default About