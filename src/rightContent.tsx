import { memo, useMemo } from 'react';
import { Avatar, Button, Dropdown, MenuProps, Space, Typography } from 'antd';
import { useHistory, useModel } from 'umi';
import { logOut } from '@/service/user';

export const RightContent = memo(() => {
  const history = useHistory();
  const { initialState } = useModel('@@initialState');

  const menu = useMemo(() => {
    return {
      items: [
        {
          label: (
            <Typography.Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                display: 'block',
              }}
            >
              {initialState?.user?.role?.name}
            </Typography.Text>
          ),
          key: 'role',
          disabled: true,
        },
        {
          type: 'divider',
        },
        {
          label: (
            <Button block type="text" ghost>
              修改密码
            </Button>
          ),
          key: 'changePwd',
        },
        {
          label: (
            <Button block type="text" ghost>
              退出登录
            </Button>
          ),
          key: 'logout',
        },
      ],
      onClick: (e) => {
        if (e.key === 'logout') {
          logOut().then(() => {
            localStorage.removeItem('token');
            setTimeout(() => {
              history.push('/user/login');
            }, 0);
          });
        }
        if (e.key === 'changePwd') {
          history.push('/user/changePwd');
        }
      },
    } as MenuProps;
  }, [history]);

  return (
    <Dropdown menu={menu}>
      <Space>
        <Typography.Link>
          <Space>
            <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
            <Typography.Text style={{ maxWidth: '100px' }} ellipsis>
              {initialState?.user?.name || ''}
            </Typography.Text>
          </Space>
        </Typography.Link>
      </Space>
    </Dropdown>
  );
});
