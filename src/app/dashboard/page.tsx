'use client'; // This component needs to be a client component

import React, { useState } from 'react';
import styles from './UserDashboard.module.css'; // Import your CSS styles
import Link from 'next/link';

const UserDashboard = () => {
  // Sample state data for demonstration purposes
  const [upcomingBookings, setUpcomingBookings] = useState([
    { id: 1, provider: 'John Carpenter', date: '2024-09-30', time: '10:00 AM' },
    { id: 2, provider: 'Alice Wood', date: '2024-10-05', time: '2:00 PM' },
  ]);

  const [bookingHistory, setBookingHistory] = useState([
    { id: 1, provider: 'Bob Mason', date: '2024-08-20', review: '' },
    { id: 2, provider: 'Charlie Plumber', date: '2024-09-15', review: '' },
  ]);

  const [savedProviders, setSavedProviders] = useState([
    { id: 1, name: 'John Carpenter' },
    { id: 2, name: 'Alice Wood' },
  ]);

  const handleReviewSubmit = (id: number, review: string) => {
    setBookingHistory((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, review } : booking
      )
    );
  };

  return (
    <div className={styles.dashboardContainer}>
      <h1>User Dashboard</h1>
      
      <section className={styles.section}>
        <h2>Upcoming Bookings</h2>
        <ul>
          {upcomingBookings.map((booking) => (
            <li key={booking.id}>
              {booking.provider} - {booking.date} at {booking.time}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Booking History</h2>
        <ul className={styles.ul}>
          {bookingHistory.map((booking) => (
            <li className={styles.li} key={booking.id}>
              {booking.provider} - {booking.date}
              <form className={styles.form} onSubmit={(e) => {
                e.preventDefault();
                const review = (e.target as any).review.value;
                handleReviewSubmit(booking.id, review);
              }}>
                <input className={styles.input} type="text" name="review" placeholder="Leave a review" required />
                <button className={styles.button} type="submit">Submit Review</button>
              </form>
              {booking.review && <p>Review: {booking.review}</p>}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Edit Profile</h2>
        <form className={styles.form}>
          <label className={styles.label}>
            Name:
            <input className={styles.input} type="text" placeholder="Enter your name" required />
          </label>
          <label className={styles.label}>
            Email:
            <input className={styles.input} type="email" placeholder="Enter your email" required />
          </label>
          <label className={styles.label}>
            Phone:
            <input className={styles.input} type="tel" placeholder="Enter your phone number" required />
          </label>
          <button className={styles.button} type="submit">Save Changes</button>
        </form>
      </section>

      <section className={styles.section}>
        <h2>Saved Providers</h2>
        <ul className={styles.ul}>
          {savedProviders.map((provider) => (
            <li className={styles.li} key={provider.id}>
              {provider.name}
              <Link href="/service-providers">
              <button className={styles.button}>Re-book</button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default UserDashboard;
