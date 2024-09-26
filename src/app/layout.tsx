// src/app/layout.tsx
import React from 'react';
import Link from 'next/link';
import './globals.css'; // Ensure to import the global styles (you can create this if you don't have it)

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>QuickFix: Local Service Provider Platform</title>
        <meta name="description" content="Find and book local service providers." />
      </head>
      <body>
        <nav className="navbar">
          <div className="logo">
            <h1>QuickFix</h1>
          </div>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/service-providers">Service Providers</Link></li>
            <li><Link href="/contactus">About Us</Link></li>
            <li><Link href="/signup">Sign Up</Link></li>
            <li><Link href="/login">Sign In</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
