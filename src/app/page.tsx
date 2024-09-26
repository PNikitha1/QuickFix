import React from 'react';
import SearchBar from './components/SearchBar';
import ServiceCategories from './components/ServiceCategories';
import FeaturedProviders from './components/FeaturedProviders';
import CallToActionButtons from './components/CallToActionButtons';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <SearchBar />
      <ServiceCategories />
      <FeaturedProviders />
      <CallToActionButtons />
    </div>
  );
};

export default HomePage;
