import React from 'react';
import styles from './FeaturedProviders.module.css'; // Import the CSS module

const featuredProviders = [
  { name: 'John Doe Plumbing', rating: 4.8, location: 'New York' },
  { name: 'Jane Electric', rating: 4.5, location: 'San Francisco' },
];

const FeaturedProviders: React.FC = () => {
  return (
    <div className={styles['featured-providers']}>
      <h2>Featured Providers</h2>
      <div className={styles['providers-list']}>
        {featuredProviders.map((provider, index) => (
          <div key={index} className={styles['provider-card']}>
            <h3>{provider.name}</h3>
            <p>Location: {provider.location}</p>
            <p>Rating: {provider.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProviders;
