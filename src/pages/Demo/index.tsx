import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { useDocTitle } from '../../hooks';
import { renderRoutes } from 'react-router-config';
import './index.scss';

const Home: React.FC<any> = routes => {
  console.log('routes', routes);
  const { route } = routes; // 获取传入的路由配置
  const history = useHistory();
  useDocTitle(route.title); // 修改标题
  return (
    <div className="page">
      <div className="sidebar">
        <div>
          <Button
            onClick={() => {
              history.push('/demo/state');
            }}>
            state
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              history.push('/demo/lifecycle');
            }}>
            生命周期
          </Button>
        </div>
        <div>
          <Button>Demo</Button>
        </div>
      </div>
      <div className="content">{renderRoutes(route.children)}</div>
    </div>
  );
};

export default Home;
