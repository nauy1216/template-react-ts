import React from 'react';
import { useDocTitle } from '../../hooks';

const Home: React.FC<any> = routes => {
  console.log('routes', routes);
  const { route } = routes; // 获取传入的路由配置
  useDocTitle(route.title); // 修改标题
  return <div></div>;
};

export default Home;
