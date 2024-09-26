'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './ServiceProviderListings.module.css';

interface ServiceProvider {
  id: number;
  name: string;
  serviceType: string;
  location: string;
  rating: number;
  reviews: number;
  pricePerHour: number;
}

const ServiceProviderListings: React.FC = () => {
  const serviceProviders = [
  // Carpenters (10 additional)
  {
    id: 1,
    name: 'John Carpenter',
    serviceType: 'Carpenter',
    location: 'New York',
    rating: 4.8,
    reviews: 120,
    pricePerHour: 30,
  },
  {
    id: 2,
    name: 'Alice Wood',
    serviceType: 'Carpenter',
    location: 'Los Angeles',
    rating: 4.7,
    reviews: 95,
    pricePerHour: 35,
  },
  {
    id: 3,
    name: 'Mike Build',
    serviceType: 'Carpenter',
    location: 'Chicago',
    rating: 4.6,
    reviews: 80,
    pricePerHour: 32,
  },
  {
    id: 4,
    name: 'Eve Crafts',
    serviceType: 'Carpenter',
    location: 'Houston',
    rating: 4.9,
    reviews: 140,
    pricePerHour: 40,
  },
  {
    id: 5,
    name: 'Sam Woodworker',
    serviceType: 'Carpenter',
    location: 'Phoenix',
    rating: 4.5,
    reviews: 70,
    pricePerHour: 28,
  },
  {
    id: 6,
    name: 'Olivia Hammer',
    serviceType: 'Carpenter',
    location: 'Philadelphia',
    rating: 4.6,
    reviews: 88,
    pricePerHour: 34,
  },
  {
    id: 7,
    name: 'Jack Saw',
    serviceType: 'Carpenter',
    location: 'Dallas',
    rating: 4.8,
    reviews: 102,
    pricePerHour: 38,
  },
  {
    id: 8,
    name: 'Sarah Nails',
    serviceType: 'Carpenter',
    location: 'San Jose',
    rating: 4.5,
    reviews: 60,
    pricePerHour: 37,
  },
  {
    id: 9,
    name: 'Robert Frame',
    serviceType: 'Carpenter',
    location: 'Austin',
    rating: 4.7,
    reviews: 110,
    pricePerHour: 40,
  },
  {
    id: 10,
    name: 'Emily Carve',
    serviceType: 'Carpenter',
    location: 'Fort Worth',
    rating: 4.6,
    reviews: 77,
    pricePerHour: 33,
  },

  // Electricians (10 additional)
  {
    id: 11,
    name: 'Jake Sparks',
    serviceType: 'Electrician',
    location: 'San Antonio',
    rating: 4.8,
    reviews: 110,
    pricePerHour: 50,
  },
  {
    id: 12,
    name: 'Emma Light',
    serviceType: 'Electrician',
    location: 'San Diego',
    rating: 4.7,
    reviews: 85,
    pricePerHour: 48,
  },
  {
    id: 13,
    name: 'Lucas Power',
    serviceType: 'Electrician',
    location: 'Dallas',
    rating: 4.6,
    reviews: 95,
    pricePerHour: 52,
  },
  {
    id: 14,
    name: 'Sophia Wire',
    serviceType: 'Electrician',
    location: 'San Francisco',
    rating: 4.9,
    reviews: 125,
    pricePerHour: 55,
  },
  {
    id: 15,
    name: 'Henry Volt',
    serviceType: 'Electrician',
    location: 'Austin',
    rating: 4.4,
    reviews: 60,
    pricePerHour: 45,
  },
  {
    id: 16,
    name: 'Noah Circuit',
    serviceType: 'Electrician',
    location: 'Denver',
    rating: 4.7,
    reviews: 105,
    pricePerHour: 50,
  },
  {
    id: 17,
    name: 'Isabella Lamp',
    serviceType: 'Electrician',
    location: 'Boston',
    rating: 4.5,
    reviews: 89,
    pricePerHour: 46,
  },
  {
    id: 18,
    name: 'Ethan Fuse',
    serviceType: 'Electrician',
    location: 'Detroit',
    rating: 4.6,
    reviews: 77,
    pricePerHour: 49,
  },
  {
    id: 19,
    name: 'Mia Electra',
    serviceType: 'Electrician',
    location: 'Las Vegas',
    rating: 4.8,
    reviews: 115,
    pricePerHour: 53,
  },
  {
    id: 20,
    name: 'James Current',
    serviceType: 'Electrician',
    location: 'Portland',
    rating: 4.7,
    reviews: 92,
    pricePerHour: 51,
  },

  // Plumbers (10 additional)
  {
    id: 21,
    name: 'Oliver Pipe',
    serviceType: 'Plumber',
    location: 'Seattle',
    rating: 4.8,
    reviews: 130,
    pricePerHour: 40,
  },
  {
    id: 22,
    name: 'Liam Flow',
    serviceType: 'Plumber',
    location: 'Miami',
    rating: 4.6,
    reviews: 90,
    pricePerHour: 42,
  },
  {
    id: 23,
    name: 'Chloe Leak',
    serviceType: 'Plumber',
    location: 'Atlanta',
    rating: 4.5,
    reviews: 78,
    pricePerHour: 38,
  },
  {
    id: 24,
    name: 'Ava Drain',
    serviceType: 'Plumber',
    location: 'Boston',
    rating: 4.7,
    reviews: 105,
    pricePerHour: 36,
  },
  {
    id: 25,
    name: 'William Faucet',
    serviceType: 'Plumber',
    location: 'Denver',
    rating: 4.9,
    reviews: 145,
    pricePerHour: 50,
  },
  {
    id: 26,
    name: 'Ella Water',
    serviceType: 'Plumber',
    location: 'Philadelphia',
    rating: 4.5,
    reviews: 60,
    pricePerHour: 39,
  },
  {
    id: 27,
    name: 'Nathan Drainage',
    serviceType: 'Plumber',
    location: 'Orlando',
    rating: 4.7,
    reviews: 88,
    pricePerHour: 44,
  },
  {
    id: 28,
    name: 'Sophia Puddle',
    serviceType: 'Plumber',
    location: 'Las Vegas',
    rating: 4.6,
    reviews: 72,
    pricePerHour: 41,
  },
  {
    id: 29,
    name: 'Mason Tubes',
    serviceType: 'Plumber',
    location: 'Phoenix',
    rating: 4.8,
    reviews: 120,
    pricePerHour: 47,
  },
  {
    id: 30,
    name: 'Amelia Gutter',
    serviceType: 'Plumber',
    location: 'San Jose',
    rating: 4.9,
    reviews: 135,
    pricePerHour: 48,
  },
];

  const [providers, setProviders] = useState<ServiceProvider[]>(serviceProviders);


  const [filter, setFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const filteredProviders = providers.filter((provider) =>
    filter === '' || provider.serviceType === filter
  );

  const sortedProviders = filteredProviders.sort((a, b) => {
    if (sortOption === 'rating') {
      return b.rating - a.rating;
    } else if (sortOption === 'price') {
      return a.pricePerHour - b.pricePerHour;
    }
    return 0;
  });

  return (
    <div className={styles.container}>
      <h2>Service Providers</h2>
      
      <div className={styles.filterSort}>
        <select onChange={handleFilterChange}>
          <option value="">All Services</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="Carpenter">Carpenter</option>
        </select>

        <select onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="rating">Rating</option>
          <option value="price">Price</option>
        </select>
      </div>

      <div className={styles.providersList}>
        {sortedProviders.map((provider) => (
          <div key={provider.id} className={styles.card}>
            <h3>{provider.name}</h3>
          <p>{provider.serviceType}</p>
          <p>{provider.location}</p>
          <p>Rating: {provider.rating} / 5 ({provider.reviews} reviews)</p>
          <p>Price: ${provider.pricePerHour} per hour</p>
          <Link href={`/providers/${provider.id}`}>
            <button className={styles.bookButton}>View Profile</button>
          </Link>
          <Link href={`/book/${provider.id}`}>
            <button className={styles.bookButton}>Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProviderListings;
