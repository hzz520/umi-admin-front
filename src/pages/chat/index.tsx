import { memo, useCallback, useMemo, useRef, useState } from 'react';
import {
  ProColumns,
  ProFormInstance,
  ProTable,
  ModalForm,
  ProFormText,
  ProFormSelect,
  ActionType,
} from '@ant-design/pro-components';
import { useModel } from 'umi';
import { Button, message, Tag, Typography } from 'antd';
import { edit, getList } from '@/service/chatroom';
import { PlusOutlined } from '@ant-design/icons';
import { getUserList } from '@/service/user';

export default memo(function List() {
  const actionRef = useRef<ActionType>();
  const { initialState } = useModel('@@initialState');
  const { handleChat } = useModel('chatroom', (model) => model);
  const formRef = useRef<ProFormInstance>();
  const modelFormRef = useRef<ProFormInstance>();

  const canOprate = useMemo(() => {
    let code = initialState?.user?.role?.code;
    code !== 'guest' && ['superAdmin', 'admin'].includes(code);
  }, [initialState]);
  const handleDetail = useCallback(
    (record) => {
      handleChat(record.id);
    },
    [handleChat],
  );

  const searchUserOpts = useCallback(async () => {
    return getUserList({
      page: 1,
      pageSize: 1000,
    }).then(({ data }) => {
      let opts = data.list.map((item) => {
        return {
          label: item.name,
          value: item.id,
        };
      });
      return opts;
    });
  }, [getUserList]);

  const handleSubmit = useCallback((values) => {
    edit(values).then(() => {
      message.success('操作成功');
      actionRef.current.reload();
    });
  }, []);

  const renderAddOrEdit = useCallback(
    (type, record: Partial<{ [key: string]: any }> = {}, canOprate) => {
      let title = '编辑聊天室信息';
      let triggerDom = (
        <Typography.Link disabled={!canOprate}>编辑</Typography.Link>
      );
      if (type === 'add') {
        title = '新增聊天室';
        triggerDom = (
          <Button type="primary" disabled={!canOprate} icon={<PlusOutlined />}>
            新增
          </Button>
        );
      }
      return (
        <ModalForm
          title={title}
          trigger={triggerDom}
          width={500}
          formRef={modelFormRef}
          layout="horizontal"
          colon={false}
          wrapperCol={{ span: 20 }}
          modalProps={{
            onCancel: () => {
              modelFormRef.current.resetFields();
            },
          }}
          onFinish={async (values) => {
            await handleSubmit(values);

            return true;
          }}
          labelCol={{ span: 4 }}
          labelAlign="right"
        >
          {record.id ? (
            <ProFormText
              name="id"
              label="id"
              disabled
              initialValue={record.id}
            />
          ) : (
            <></>
          )}
          <ProFormText
            name="name"
            label="名称"
            placeholder="请输入名称"
            initialValue={record?.name}
          />
          <ProFormSelect
            name="users"
            label="用户"
            fieldProps={{
              mode: 'multiple',
            }}
            initialValue={
              record?.users?.map?.((user) => {
                return user.user.id;
              }) || []
            }
            request={searchUserOpts}
          />
        </ModalForm>
      );
    },
    [searchUserOpts],
  );

  const columns = useMemo(() => {
    return [
      {
        dataIndex: 'id',
        title: '聊天室id',
      },
      {
        dataIndex: 'name',
        title: '聊天室名称',
      },
      {
        dataIndex: 'users',
        title: '用户',
        render: (dom, record) => {
          return record.users?.map((user) => {
            return (
              <Tag color="blue" key={user.user.id}>
                {user.user.name}
              </Tag>
            );
          });
        },
      },
      {
        valueType: 'option',
        title: '操作',
        width: 130,
        render: (dom, record) => {
          let code = initialState?.user?.role?.code;

          return [
            <Typography.Link key="detail" onClick={() => handleDetail(record)}>
              进入聊天室
            </Typography.Link>,
            renderAddOrEdit('edit', record, canOprate),
            //  <Typography.Link
            //    disabled={!canOprate}
            //    key="editable"
            //    onClick={() => handleDel(record)}
            //  >
            //    删除
            //  </Typography.Link>,
          ];
        },
      },
    ] as Array<ProColumns>;
  }, [initialState, canOprate]);
  const request = useCallback(
    async (params) => {
      const { current, ...rest } = params;

      const {
        data: { list, total },
      } = await getList({
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
        headerTitle={'聊天室列表'}
        search={false}
        request={request}
        actionRef={actionRef}
        columns={columns}
        pagination={{ position: ['topLeft', 'bottomRight'] }}
        toolBarRender={() => [renderAddOrEdit('add', {}, canOprate)]}
      />
    </>
  );
});
