import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { useDocTitle } from '../../hooks';
import { renderRoutes } from 'react-router-config';
import './index.scss';

const menuList = [
  {
    label: 'state',
    path: '/demo/state'
  },
  {
    label: '生命周期',
    path: '/demo/lifecycle'
  },
  {
    label: '事件',
    path: '/demo/event'
  },
  {
    label: '表单',
    path: '/demo/form'
  },
  {
    label: 'Hook',
    path: '/demo/hook'
  },
  {
    label: 'useEffect和useLayoutEffect',
    path: '/demo/useEffect'
  }
];

const Home: React.FC<any> = routes => {
  console.log('routes', routes);
  const { route } = routes; // 获取传入的路由配置
  const history = useHistory();
  useDocTitle(route.title); // 修改标题
  return (
    <div className="page">
      <div className="sidebar">
        {menuList.map(menu => {
          return (
            <div key={menu.path}>
              <Button
                onClick={() => {
                  history.push(menu.path);
                }}>
                {menu.label}
              </Button>
            </div>
          );
        })}
      </div>
      <div className="content">{renderRoutes(route.children)}</div>
    </div>
  );
};

export default Home;
