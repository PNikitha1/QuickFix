import ProviderProfile from './[providerId]/page';

const ProviderPage: React.FC = () => {
  return <ProviderProfile params={{
      providerId: ''
  }}/>;
};

export default ProviderPage;
