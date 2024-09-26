import React from 'react';
import styles from './ServiceCategories.module.css';  // Import CSS module
import Link from 'next/link';

const services = [
  { name: 'Plumbing', icon: '🛠️' },
  { name: 'Electrical', icon: '💡' },
  { name: 'Cleaning', icon: '🧼' },
  { name: 'Carpentry', icon: '🔨' },
];

const ServiceCategories: React.FC = () => {
  return (
    <div className={styles['service-categories']}>
      <h2>Our Services</h2>
      <Link href="/service-providers">
      <div className={styles['categories-list']}>
        {services.map((service, index) => (
          <div key={index} className={styles['category-item']}>
            <span className={styles['category-icon']}>{service.icon}</span>
            <h3>{service.name}</h3>
          </div>
          
        ))}
      </div>
      </Link>
    </div>
  );
};

export default ServiceCategories;
