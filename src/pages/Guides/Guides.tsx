import Title from '@components/Title/Title';

import Viewer from './components/Viewer';
import guideData from './data/guide.json';
import Layout from './layout/Layout';

const Guides = () => {
  return (
    <Layout>
      <Title size="md">Guides</Title>
      <Viewer data={guideData} />
    </Layout>
  );
};

export default Guides;
