import ProviderProfile from './[providerId]/page';

const ProviderPage: React.FC = () => {
  return <ProviderProfile params={{ providerId: '1' }} />; // Pass the 'providerId' through params
};

export default ProviderPage;
