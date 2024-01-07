import { useNavigate } from 'react-router-dom';

import { PATH } from 'src/constants/path';

import Button from '@components/Button/Button';
import Title from '@components/Title/Title';

import Layout from './layout/Layout';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Title size="sm">Not Found</Title>
      <Button size="sm" onClick={() => navigate(PATH.HOME)}>
        홈으로 돌아가기
      </Button>
    </Layout>
  );
};

export default NotFound;
