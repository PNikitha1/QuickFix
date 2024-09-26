'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Signup.module.css'; // Import the CSS module

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Signup successful!');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.title}>Sign Up</h2>
      <form className={styles.signupForm} onSubmit={handleSignup}>
        <label className={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <label className={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <label className={styles.label}>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className={styles.input}
        />
        <Link href="/dashboard">
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
        </Link>

      </form>
      <p className={styles.signupText}>
        Already have an account? <Link href="/login" className={styles.signinLink}>Sign In</Link>
      </p>
    </div>
  );
};

export default Signup;
