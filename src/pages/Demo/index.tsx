import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { useDocTitle } from '../../hooks';
import { renderRoutes } from 'react-router-config';
import './index.scss';

const Home: React.FC<any> = routes => {
  console.log('routes', routes);
  const { route } = routes; // 获取传入的路由配置
  useDocTitle(route.title); // 修改标题
  return (
    <div className="page">
      <div>
        <Button>Demo</Button>
      </div>
      <div>{renderRoutes(route.children)}</div>
    </div>
  );
};

export default Home;
