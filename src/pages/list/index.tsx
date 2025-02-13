import { del, getList } from '@/service/article';
import {
  ActionType,
  ProColumns,
  ProFormInstance,
  ProTable,
} from '@ant-design/pro-components';
import { Button, message, Modal, Space, Tooltip, Typography } from 'antd';
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { useHistory, useModel } from 'umi';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

export default memo(function List() {
  const history = useHistory();
  const { initialState } = useModel('@@initialState');
  const formRef = useRef<ProFormInstance>();
  const actionRef = useRef<ActionType>();
  const columns = useMemo(() => {
    return [
      {
        dataIndex: 'id',
        title: '文章id',
        hideInSearch: true,
      },
      {
        dataIndex: 'title',
        title: '文章标题',
      },
      {
        dataIndex: 'author',
        title: '作者',
        render: (dom, data) => {
          return data?.author?.name || '-';
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
          return dayjs(data.createAt).format('YYYY-MM-DD HH:mm:ss');
        },
        search: {
          transform: (value, name) => {
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
          format: 'YYYY-MM-DD HH:mm:ss',
        },
        search: {
          transform: (value, name) => {
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
          return dayjs(data.updateAt).format('YYYY-MM-DD HH:mm:ss');
        },
      },
      {
        valueType: 'option',
        title: '操作',
        render(dom, record) {
          let code = initialState?.user?.role?.code;
          const canOprate =
            code !== 4 &&
            ([1, 2].includes(code) ||
              record.author.name === initialState?.user?.name);
          return [
            <Typography.Link key="detail" onClick={() => handleDetail(record)}>
              详情
            </Typography.Link>,
            <Typography.Link key="editable" onClick={() => handleEdit(record)}>
              编辑
            </Typography.Link>,
            <Typography.Link
              disabled={!canOprate}
              key="editable"
              onClick={() => handleDel(record)}
            >
              删除
            </Typography.Link>,
          ];
        },
      },
    ] as Array<ProColumns>;
  }, [initialState]);

  const handleAdd = useCallback(() => {
    history.push(`/article/add`);
  }, [history]);

  const handleDetail = useCallback(
    (record) => {
      history.push(`/article/detail?id=${record.id}`);
    },
    [history],
  );

  const handleEdit = useCallback(
    (record) => {
      history.push(`/article/edit?id=${record.id}`);
    },
    [history],
  );

  const handleDel = useCallback((record) => {
    Modal.confirm({
      title: '确认删除',
      content: '是否确认删除',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        del({ id: record.id }).then(() => {
          message.success('删除成功');
          actionRef.current.reload();
        });
      },
    });
  }, []);

  const handleReset = useCallback(async () => {
    actionRef.current?.reload();
  }, [actionRef]);

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

  useEffect(() => {
    setTimeout(() => {
      if (actionRef.current) {
        actionRef.current.reload();
      }
    }, 500);
  }, [actionRef.current]);

  return (
    <ProTable
      headerTitle={
        <>
          文章列表
          <Tooltip title="访客用户无法新建/编辑文章，普通用户只能新建文章和编辑归属自己的文章">
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
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          type="primary"
          onClick={handleAdd}
        >
          新建
        </Button>,
      ]}
      rowKey="id"
    />
  );
});
