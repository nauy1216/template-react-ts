import loadable from '@loadable/component'; // 按需加载

// 如果访问路径有二级目录，则需要配置这个值，如首页地址为'http://tianzhen.tech/blog/home'，则这里配置为'/blog'
export const basename = '';
export const routes = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('../pages/Home')), // 组件需要你自己准备
    name: 'home', // 自定义属性
    title: 'react-home' // 自定义属性
    // 这里可以扩展一些自定义的属性
  },
  {
    path: '/home',
    exact: true,
    component: loadable(() => import('../pages/Home')),
    name: 'home',
    title: 'HelloWorld'
  },
  {
    path: '/demo',
    component: loadable(() => import('../pages/Demo')),
    name: 'Demo',
    title: 'Demo',
    children: [
      {
        path: '/demo/1',
        component: loadable(() => import('../pages/Demo/Test')),
        exact: true
      },
      {
        path: '/demo/state',
        component: loadable(() => import('../pages/Demo/State')),
        exact: true
      },
      {
        path: '/demo/lifecycle',
        component: loadable(() => import('../pages/Demo/Lifecycle')),
        exact: true
      }
    ]
  },
  // 404 Not Found
  {
    path: '*',
    exact: true,
    component: loadable(() => import('../pages/NotFound')),
    name: '404',
    title: '404'
  }
];
