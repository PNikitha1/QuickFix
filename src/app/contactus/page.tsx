// src/app/about.tsx
'use client';
import React, { useState } from 'react';
import styles from './AboutUs.module.css';

const AboutUsContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <div className={styles.aboutuscontact}>
      <section className={styles.platform}>
        <h1>About QuickFix</h1>
        <p>
          QuickFix is a platform dedicated to connecting users with local service providers for a variety of
          needs. Whether you need a plumber, electrician, cleaner, or other professionals, we aim to provide a seamless experience for both users and service providers.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify the process of finding reliable service providers and empower professionals to offer their services to a wider audience.
        </p>
        <h2>Our Team</h2>
        <p>
          QuickFix was built by a passionate team of developers, designers, and customer service professionals dedicated to improving the user experience in the local service marketplace.
        </p>
      </section>

      <section className={styles.contactformsection}>
        <h2>Contact Us</h2>
        <form className={styles.contactform} onSubmit={handleSubmit}>
          <div className={styles.formgroup}>
            <label className={styles.label} htmlFor="name">Name:</label>
            <input className={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label className={styles.label} htmlFor="email">Email:</label>
            <input className={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label className={styles.label} htmlFor="message">Message:</label>
            <textarea className={styles.textarea}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>
          <button className={styles.button} type="submit">Submit</button>
        </form>
      </section>

      <section className="support-info">
        <h2>Support Information</h2>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Email: support@quickfix.com</p>
        <p>Address: 123 Service St., City, Country</p>
      </section>
    </div>
  );
};

export default AboutUsContact;
