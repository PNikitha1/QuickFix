'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Login.module.css'; // Import the CSS module for the login page

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement login logic here (e.g., call an API)
    console.log('Login successful!');
    // Redirect logic can be implemented here if necessary
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.loginForm} onSubmit={handleLogin}>
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
        <Link href="/dashboard">
        <button type="submit" className={styles.button}>Login</button>
        </Link>
      </form>
      
      <p className={styles.signupText}>
        Dont have an account? <Link href="/signup" className={styles.signupLink}>Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
