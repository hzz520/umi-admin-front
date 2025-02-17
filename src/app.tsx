import {
  BasicLayoutProps,
  Settings as LayoutSettings,
  ProBreadcrumb,
} from '@ant-design/pro-layout';
import { DefaultFooter } from '@ant-design/pro-components';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { history } from 'umi';
import { getUser } from './service/user';
import { RightContent } from './rightContent';
import WujieReact from 'wujie-react';

import { configureDevtool } from 'mobx-react-devtools';
import { message } from 'antd';

export async function getInitialState() {
  const { data: user } = await getUser();
  return {
    user,
  };
}

export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings; user: any };
}): BasicLayoutProps => {
  const handleBack = () => {
    history.goBack();
  };

  return {
    title: '我的系统',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    rightContentRender: () => {
      return <RightContent />;
    },
    footerRender: () => <DefaultFooter copyright="@2025 个人出品" />,
    headerContentRender: () => (
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <ArrowLeftOutlined
          onClick={handleBack}
          style={{ marginRight: '10px' }}
        />
        <ProBreadcrumb />
      </div>
    ),
    breadcrumbRender: (route) => {
      return [
        {
          path: '/',
          breadcrumbName: '首页',
        },
        ...route.map((item) => {
          const { breadcrumbName, path } = item;
          return { breadcrumbName, path };
        }),
      ];
    },
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};

WujieReact.bus.$on('logout', () => {
  message.error('登录失效');
  history.replace('/user/login');
});

configureDevtool({
  logEnabled: true,
  updatesEnabled: true,
  graphEnabled: true,
});
