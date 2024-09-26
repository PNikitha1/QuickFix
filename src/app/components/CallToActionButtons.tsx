import React from 'react';
import Link from 'next/link';
import styles from './CallToActionButtons.module.css'; // Import the CSS module

const CallToActionButtons: React.FC = () => {
  return (
    <div className={styles['cta-buttons']}>
      <Link href="/signup">
      <button className={styles['signup-btn']}>Sign Up</button>
      </Link>
      <Link href="/login">
      <button className={styles['login-btn']}>Login</button>
      </Link>
      <button className={styles['browse-btn']}>Browse Services</button>
    </div>
  );
};

export default CallToActionButtons;
