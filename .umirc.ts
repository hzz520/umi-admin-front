import { defineConfig } from 'umi';

export default defineConfig({
  links: [
    {
      rel: 'icon',
      href: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    },
  ],
  404: true,
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      redirect: '/form/list',
    },
    {
      path: '/user/:type',
      component: '@/pages/login/index',
      name: '登录',
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
      hideInMenu: true,
    },
    {
      path: '/form',
      name: '表单引擎',
      component: '@/layout/index',
      icon: 'form',
      routes: [
        {
          path: '/form',
          redirect: '/form/list',
        },
        {
          path: '/form/list',
          component: '@/pages/form/index',
          name: '表单列表',
        },
        {
          path: '/form/add',
          name: '新增',
          breadcrumbName: '新增',
          component: '@/pages/form/wujie-form-marking',
          // headerRender: false,
          // 不展示页脚
          footerRender: false,
          // 不展示菜单
          menuRender: false,
          hideInMenu: true,
        },
        {
          path: '/form/edit',
          name: '编辑',
          breadcrumbName: '编辑',
          component: '@/pages/form/wujie-form-marking',
          // headerRender: false,
          // 不展示页脚
          footerRender: false,
          // 不展示菜单
          menuRender: false,
          hideInMenu: true,
        },
      ],
    },
    {
      path: '/article',
      name: '文章管理',
      component: '@/layout/index',
      breadcrumbName: '文章管理',
      icon: 'fileText',
      routes: [
        {
          path: '/article',
          redirect: '/article/list',
        },
        {
          path: '/article/list',
          component: '@/pages/list/index',
          name: '文章列表',
          breadcrumbName: '文章列表',
          exact: true,
        },
        {
          path: '/article/add',
          component: '@/pages/edit/index',
          name: '添加',
          breadcrumbName: '添加',
          hideInMenu: true,
          footerRender: false,
          exact: true,
        },
        {
          path: '/article/edit',
          component: '@/pages/edit/index',
          name: '编辑',
          breadcrumbName: '编辑',
          hideInMenu: true,
          footerRender: false,
          exact: true,
        },
        {
          path: '/article/detail',
          component: '@/pages/detail/index',
          name: '详情',
          breadcrumbName: '详情',
          hideInMenu: true,
          footerRender: false,
          exact: true,
        },
      ],
    },
    {
      path: '/usermng',
      name: '用户管理',
      component: '@/layout/index',
      breadcrumbName: '用户管理',
      icon: 'user',
      routes: [
        {
          path: '/usermng',
          redirect: '/usermng/list',
        },
        {
          path: '/usermng/list',
          component: '@/pages/user/index',
          name: '用户列表',
          breadcrumbName: '用户列表',
          exact: true,
        },
      ],
    },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://localhost:82',
      changeOrigin: true,
    },
  },
  outputPath: './admin',
  hash: true,
  manifest: {
    fileName: 'asset-manifest.json',
  },
  // mfsu:{},
  chunks: [
    'runtime~umi',
    'vendors',
    'antd',
    'rect',
    'lodash',
    'wangeditor',
    'umi',
  ],
  chainWebpack: function (config) {
    // config.optimization.minimize(true);
    config.optimization.runtimeChunk({
      name: 'runtime~umi',
    });
    config.optimization.splitChunks({
      chunks: 'all', //async异步代码分割 initial同步代码分割 all同步异步分割都开启
      automaticNameDelimiter: '.',
      name: true,
      minSize: 30000, // 引入的文件大于30kb才进行分割
      //maxSize: 50000, // 50kb，尝试将大于50kb的文件拆分成n个50kb的文件
      minChunks: 1, // 模块至少使用次数
      // maxAsyncRequests: 5,    // 同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
      // maxInitialRequests: 3,  // 首页加载的时候引入的文件最多3个
      // name: true,             // 缓存组里面的filename生效，覆盖默认命名
      cacheGroups: {
        wangeditor: {
          name: 'wangeditor',
          test: /[\/]node_modules[\/](@wangeditor)[\/]/,
          priority: -7,
          enforce: true,
        },
        antd: {
          name: 'antd',
          test: /[\/]node_modules[\/](@ant-design|antd|antd-mobile)[\/]/,
          priority: -8,
          enforce: true,
        },
        lodash: {
          name: 'lodash',
          test: /[\/]node_modules[\/](lodash|moment)[\/]/,
          priority: -9,
          enforce: true,
        },
        react: {
          name: 'rect',
          test: /[\/]node_modules[\/](react|react-dom)[\/]/,
          priority: -10,
          enforce: true,
        },
        vendors: {
          name: 'vendors',
          test: /[\/]node_modules[\/]/,
          priority: -11,
          enforce: true,
        },
      },
    });
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
});
