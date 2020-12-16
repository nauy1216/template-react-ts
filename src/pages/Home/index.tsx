import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { useDocTitle } from '../../hooks';

function A(props) {
  const history = useHistory();
  console.log('a', props);
  return (
    <Button
      onClick={() => {
        history.replace('/');
      }}>
      新增
    </Button>
  );
}

const Home: React.FC<any> = routes => {
  console.log('routes', routes);
  const { route } = routes; // 获取传入的路由配置
  useDocTitle(route.title); // 修改标题
  return (
    <div>
      <A></A>
    </div>
  );
};

export default Home;
