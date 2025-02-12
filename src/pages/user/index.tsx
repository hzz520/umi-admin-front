import {
  ActionType,
  ProColumns,
  ProFormInstance,
  ProTable,
} from '@ant-design/pro-components';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useModel } from 'umi';
import { addOrUpdateUser, delUser, getUserList } from '@/service/user';
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Select,
  Tooltip,
  Typography,
} from 'antd';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const layout = {
  labelCol: { span: 6, flex: 1 },
  wrapperCol: { span: 18 },
  colon: false,
};

export default memo(function List() {
  const { initialState } = useModel('@@initialState');
  const [form] = Form.useForm();
  const formRef = useRef<ProFormInstance>();
  const actionRef = useRef<ActionType>();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const columns = useMemo(() => {
    return [
      {
        dataIndex: 'id',
        title: '用户id',
        hideInSearch: true,
      },
      {
        dataIndex: 'name',
        title: '用户名称',
      },
      {
        dataIndex: 'password',
        title: '用户密码',
        hideInSearch: true,
      },
      {
        dataIndex: 'role',
        title: '角色',
        render: (dom, data) => {
          return data?.role?.name || '-';
        },
      },
      {
        dataIndex: 'createAt',
        title: '创建时间',
        valueType: 'dateRange',
        fieldProps: {
          placeholder: ['请选择开始时间', '请选择结束时间'],
        },
        render: (dom, data) => {
          return dayjs(data.createAt)
            .add(-8, 'h')
            .format('YYYY-MM-DD HH:mm:ss');
        },
        search: {
          transform: (value, name) => {
            if (!value)
              return {
                [name]: void 0,
              };
            const [start, end] = value;
            let res = {
              [name]: [
                dayjs(start).startOf('day').add(8, 'h').toISOString(),
                dayjs(end).endOf('day').add(8, 'h').toISOString(),
              ],
            };

            return res;
          },
        },
      },
      {
        dataIndex: 'updateAt',
        title: '更新时间',
        valueType: 'dateRange',
        fieldProps: {
          placeholder: ['请选择开始时间', '请选择结束时间'],
        },
        search: {
          transform: (value, name) => {
            if (!value)
              return {
                [name]: void 0,
              };
            const [start, end] = value;
            let res = {
              [name]: [
                dayjs(start).startOf('day').add(8, 'h').toISOString(),
                dayjs(end).endOf('day').add(8, 'h').toISOString(),
              ],
            };

            return res;
          },
        },
        render: (dom, data) => {
          return dayjs(data.updateAt)
            .add(-8, 'h')
            .format('YYYY-MM-DD HH:mm:ss');
        },
      },
      {
        valueType: 'option',
        title: '操作',
        render(dom, record) {
          const { code } = initialState?.user?.role || {};
          const canEdit = code && code === 1 && record.role?.code !== 1;
          return [
            <Typography.Link
              disabled={!canEdit}
              key="edit"
              onClick={() => {
                handleEdit(record);
              }}
            >
              编辑
            </Typography.Link>,
            <Typography.Link
              disabled={!canEdit}
              key="edit"
              onClick={() => {
                handlePwd(record);
              }}
            >
              修改密码
            </Typography.Link>,
            <Typography.Link
              disabled={!canEdit}
              key="del"
              onClick={() => {
                handleDel(record);
              }}
            >
              删除
            </Typography.Link>,
          ];
        },
      },
    ] as Array<ProColumns>;
  }, []);

  const handleCancel = useCallback(() => {
    form.resetFields();
    setOpen(false);
  }, []);

  const handleOk = useCallback(() => {
    form.validateFields().then((data) => {
      addOrUpdateUser(data).then(() => {
        message.success('操作成功');
        setOpen(false);
        actionRef.current.reload();
        form.resetFields();
      });
    });
  }, []);

  const handleEdit = useCallback((record) => {
    setTitle('编辑角色');
    form.setFieldsValue({
      name: record.name,
      roleId: record.role.id,
      id: record.id,
    });
    setOpen(true);
  }, []);

  const handlePwd = useCallback((record) => {
    setTitle('修改密码');
    form.setFieldsValue({
      name: record.name,
      id: record.id,
      roleId: record.role.id,
    });
    setOpen(true);
  }, []);

  const handleAdd = useCallback(() => {
    setTitle('新增用户');
    setOpen(true);
  }, []);

  const handleDel = useCallback(
    (record) => {
      Modal.confirm({
        title: '确认删除',
        content: '是否确认删除，删除后不可恢复！',
        okText: '确认',
        cancelText: '取消',
        onOk: async (...args) => {
          await delUser({
            id: record.id,
          }).then(() => {
            message.success('删除成功');
            setOpen(false);
            actionRef.current.reload();
          });
        },
      });
    },
    [actionRef],
  );

  const handleReset = useCallback(async () => {
    actionRef.current?.reload();
  }, [actionRef]);

  const toolBarRender = useCallback(() => {
    const { code } = initialState?.user?.role || {};
    const canEdit = code && code === 1;
    return [
      <Button
        key="button"
        icon={<PlusOutlined />}
        type="primary"
        onClick={handleAdd}
        disabled={!canEdit}
      >
        新建
      </Button>,
    ];
  }, [handleAdd]);

  const request = useCallback(
    async (params) => {
      const { current, ...rest } = params;
      const {
        data: { list, total },
      } = await getUserList({
        ...rest,
        page: current,
      });
      return {
        success: true,
        data: list,
        total,
      };
    },
    [formRef],
  );

  return (
    <>
      <ProTable
        headerTitle={
          <>
            用户列表
            <Tooltip title="只有超级管理员才能编辑和删除用户，超级管理员只有一个">
              <InfoCircleOutlined style={{ marginLeft: '5px' }} />
            </Tooltip>
          </>
        }
        columns={columns}
        actionRef={actionRef}
        formRef={formRef}
        request={request}
        pagination={{ position: ['topLeft', 'bottomRight'] }}
        onReset={handleReset}
        toolBarRender={toolBarRender}
        rowKey="id"
      />
      <Modal
        title={title}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <Form form={form} {...layout}>
          <Form.Item label="用户id" name="id" style={{ display: 'none' }}>
            <Input
              disabled
              allowClear
              maxLength={100}
              placeholder="请输入用户id"
            />
          </Form.Item>
          <Form.Item
            label="用户名"
            name="name"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input
              disabled={title !== '新增用户'}
              allowClear
              maxLength={100}
              placeholder="请输入用户名"
            />
          </Form.Item>
          {title !== '编辑角色' ? (
            <>
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
            </>
          ) : (
            <></>
          )}

          <Form.Item
            label="角色"
            name="roleId"
            rules={[{ required: true, message: '请选择角色' }]}
          >
            <Select
              disabled={title === '修改密码'}
              options={[
                {
                  label: '管理员',
                  value: 2,
                },
                {
                  label: '普通用户',
                  value: 3,
                },
                {
                  label: '访客用户',
                  value: 4,
                },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
});
