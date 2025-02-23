import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import styles from './index.less';
import { Button, Form, Input, message, Tabs } from 'antd';
import { history, useLocation, useModel } from 'umi';
import { changePwd, login, registry } from '@/service/user';
import { getInitialState } from '@/app';

const layout = {
  labelCol: { span: 6, flex: 1 },
  wrapperCol: { span: 18 },
  colon: false,
};

export default memo(function Login() {
  const [user, setUser] = useState({ name: '', password: '' });
  const [form] = Form.useForm();
  const location = useLocation();
  const { setInitialState } = useModel('@@initialState');

  const items = useMemo(() => {
    return [
      {
        label: '登录',
        key: '/user/login',
      },
      {
        label: '注册',
        key: '/user/registry',
      },
      ...(user.name
        ? [
            {
              label: '修改密码',
              key: '/user/changePwd',
            },
          ]
        : []),
    ];
  }, [user]);
  const info = useMemo(() => {
    if (location.pathname === '/user/login') {
      return <></>;
    }
    let name, label;
    if (location.pathname === '/user/registry') {
      label = '确认密码';
      name = 'confirmPassword';
    } else if (location.pathname === '/user/changePwd') {
      label = '新密码';
      name = 'newPassword';
    }
    return (
      <Form.Item
        label={label}
        name={name}
        rules={[{ required: true, message: `请输入${label}` }]}
      >
        <Input
          type="password"
          allowClear
          maxLength={100}
          placeholder={`请输入${label}`}
        />
      </Form.Item>
    );
  }, [location]);

  const handleChange = useCallback(
    (path) => {
      history.push(path);
    },
    [history],
  );

  const goLogin = useCallback(() => {
    history.push('/user/login');
  }, [history]);

  const goMain = useCallback(() => {
    history.replace('/');
  }, [history]);

  const isChangePsw = useMemo(() => {
    return location.pathname === '/user/changePwd';
  }, [location]);

  const handleKeyDown = useCallback((e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (form) {
      form.validateFields().then((data) => {
        let request;
        let msg = '';
        let fn;

        if (location.pathname === '/user/login') {
          request = login;
          msg = '登录成功';
          fn = goMain;
        }

        if (location.pathname === '/user/registry') {
          request = registry;
          msg = '注册成功';
          fn = goLogin;
        }

        if (location.pathname === '/user/changePwd') {
          request = changePwd;
          msg = '修改密码成功';
          fn = goLogin;
        }

        if (request) {
          request(data).then(async ({ data }) => {
            message.success(msg);
            if (fn === goMain) {
              window.localStorage.setItem('token', `Bearer ${data}`);
              getInitialState().then(({ user }) => {
                setInitialState({ user });
                fn();
              });
            } else {
              fn();
            }
          });
        }
      });
    }
  }, [location, form]);

  const initFn = useCallback(async () => {
    const { user } = await getInitialState();
    if (user) {
      setUser(user);
      setInitialState({ user });
    }
    if (user?.name && location.pathname === '/user/login') {
      goMain();
      return;
    }
    if (user?.name && location.pathname === '/user/changePwd') {
      form.setFieldValue('name', user.name);
    } else {
      form.setFieldValue('name', '');
    }
  }, [form, getInitialState, location]);

  useEffect(() => {
    initFn();
  }, [initFn]);

  return (
    <div className={styles.container} onKeyDown={handleKeyDown}>
      <Form className="form" form={form} {...layout}>
        <Form.Item noStyle>
          <Tabs
            centered
            items={items}
            onChange={handleChange}
            activeKey={location.pathname}
          ></Tabs>
        </Form.Item>
        <Form.Item
          label="用户名"
          name="name"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input
            disabled={isChangePsw}
            allowClear
            maxLength={100}
            placeholder="请输入用户名"
          />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input
            type="password"
            allowClear
            maxLength={100}
            placeholder="请输入密码"
          />
        </Form.Item>
        {info}
        <Form.Item {...{ wrapperCol: { span: 24 } }}>
          <Button
            onClick={handleSubmit}
            size="large"
            type="primary"
            className="confirm-btn"
          >
            确认
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});
