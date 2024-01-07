import Title from '@components/Title/Title';

import Layout from './layout/Layout';

interface Props {
  type: 'mobile' | 'pc';
}

const NotAllowed = ({ type }: Props) => {
  return (
    <Layout>
      <Title size={type === 'mobile' ? 'xs' : 'sm'}>Not Allowed</Title>
      <div className="textArea">
        <p>
          이 페이지는 {type === 'pc' ? 'PC' : '모바일'}에서 접속할 수 없습니다
        </p>
        <p>{type === 'pc' ? '모바일' : 'PC'}에서 시도해주세요</p>
      </div>
    </Layout>
  );
};

export default NotAllowed;
