import {
  copy,
  del,
  delByVersionId,
  getList,
  getVersions,
} from '@/service/form';
import {
  ActionType,
  ProColumns,
  ProFormInstance,
  ProTable,
} from '@ant-design/pro-components';
import { Button, message, Modal, Tooltip, Typography, Drawer } from 'antd';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useHistory, useModel } from 'umi';
import Wujie from './wujie-form-marking';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { getCateOptions } from '@/service/category';
import { getWxConfig } from '@/service/wx';

export default memo(function List() {
  const history = useHistory();
  const { initialState } = useModel('@@initialState');
  const formRef = useRef<ProFormInstance>();
  const actionRef = useRef<ActionType>();
  const versionActionRef = useRef<ActionType>();
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [showVersions, setShowVersions] = useState(false);
  const [curId, setCurId] = useState('');
  const [versionId, setVersionId] = useState('');

  useEffect(() => {
    getCateOptions({}).then(({ data }) => {
      setCategoryOptions(
        data.map(({ id, name }) => {
          return { label: name, value: id };
        }),
      );
    });
  }, []);
  const columns = useMemo(() => {
    return [
      {
        dataIndex: 'id',
        title: '表单id',
        hideInSearch: true,
        ellipsis: true,
      },
      {
        dataIndex: 'name',
        title: '表单名称',
        ellipsis: true,
      },
      {
        dataIndex: 'categoryIds',
        title: '分类',
        valueType: 'select',
        ellipsis: true,
        fieldProps: {
          mode: 'multiple',
          options: categoryOptions,
        },
        render: (dom, data) => {
          return data?.category?.name || '-';
        },
      },
      {
        dataIndex: 'author',
        title: '作者',
        ellipsis: true,
        render: (dom, data) => {
          return data?.author?.name || '-';
        },
      },
      {
        dataIndex: 'versionId',
        title: '当前版本id',
        hideInSearch: true,
        ellipsis: true,
      },
      {
        dataIndex: 'createAt',
        title: '创建时间',
        valueType: 'dateRange',
        width: 170,
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
                dayjs(start).startOf('day').toISOString(),
                dayjs(end).endOf('day').toISOString(),
              ],
            };

            return res;
          },
        },
      },
      {
        dataIndex: 'updateAt',
        title: '更新时间',
        width: 170,
        valueType: 'dateRange',
        fieldProps: {
          placeholder: ['请选择开始时间', '请选择结束时间'],
        },
        search: {
          transform: (value, name) => {
            const [start, end] = value;
            let res = {
              [name]: [
                dayjs(start).startOf('day').toISOString(),
                dayjs(end).endOf('day').toISOString(),
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
        width: 260,
        render(dom, record) {
          let code = initialState?.user?.role?.code;
          const canOprate =
            code !== 'guest' &&
            (['superAdmin', 'admin'].includes(code) ||
              record.author.name === initialState?.user?.name);
          return [
            <Typography.Link key="copy" onClick={() => handleCopy(record)}>
              复制
            </Typography.Link>,
            <Typography.Link key="detail" onClick={() => handlePreview(record)}>
              预览
            </Typography.Link>,
            <Typography.Link
              key="versions"
              onClick={() => handleVersions(record)}
            >
              查看版本
            </Typography.Link>,
            <Typography.Link
              disabled={!canOprate}
              key="add"
              onClick={() => handleEdit(record, false)}
            >
              编辑
            </Typography.Link>,
            <Typography.Link
              disabled={!canOprate}
              key="del"
              onClick={() => handleDel(record, false)}
            >
              删除
            </Typography.Link>,
          ];
        },
      },
    ] as Array<ProColumns>;
  }, [initialState, categoryOptions]);

  const versionColumns = useMemo(() => {
    return [
      {
        dataIndex: 'name',
        title: '表单名称',
        ellipsis: true,
        width: 100,
      },
      {
        dataIndex: 'categoryIds',
        title: '分类',
        ellipsis: true,
        width: 80,
        valueType: 'select',
        render: (dom, data) => {
          return data?.category?.name || '-';
        },
      },
      {
        dataIndex: 'author',
        title: '作者',
        ellipsis: true,
        width: 80,
        render: (dom, data) => {
          return data?.author?.name || '-';
        },
      },
      {
        dataIndex: 'versionId',
        title: '版本id',
        ellipsis: true,
        width: 80,
      },
      {
        dataIndex: 'createAt',
        title: '创建时间',
        width: 170,
        render: (dom, data) => {
          return dayjs(data.createAt).format('YYYY-MM-DD HH:mm:ss');
        },
      },
      {
        dataIndex: 'updateAt',
        title: '更新时间',
        width: 170,
        render: (dom, data) => {
          return dayjs(data.updateAt).format('YYYY-MM-DD HH:mm:ss');
        },
      },
      {
        valueType: 'option',
        title: '操作',
        width: 135,
        fixed: 'right',
        render: (dom, record) => {
          let code = initialState?.user?.role?.code;
          const canOprate =
            code !== 'guest' &&
            (['superAdmin', 'admin'].includes(code) ||
              record.author.name === initialState?.user?.name);
          return [
            <Typography.Link
              key="view"
              onClick={() => {
                handlePreview(record);
              }}
            >
              查看
            </Typography.Link>,
            <Typography.Link
              key="edit"
              disabled={!canOprate}
              onClick={() => {
                handleEdit(record, true);
              }}
            >
              编辑
            </Typography.Link>,
            <Typography.Link
              key="del"
              disabled={!canOprate}
              onClick={() => {
                handleDel(record, true);
              }}
            >
              删除
            </Typography.Link>,
          ];
        },
      },
    ] as Array<ProColumns>;
  }, [categoryOptions]);

  const handleAdd = useCallback(() => {
    history.push(`/form/add`);
  }, [history]);

  const handlePreview = useCallback((record) => {
    setVersionId(record.versionId);
  }, []);

  const handleCopy = useCallback((record) => {
    Modal.confirm({
      title: '复制表单',
      content: '是否确认复制当前表单？',
      onOk: async () => {
        await copy({ versionId: record.versionId });
        message.success('复制成功');
        actionRef.current.reloadAndRest();
      },
    });
  }, []);

  const handleClose = useCallback(() => {
    setShowVersions(false);
    setCurId('');
  }, []);

  const handleClosePreview = useCallback(() => {
    setVersionId('');
  }, []);

  const handleVersions = useCallback((record) => {
    setCurId(record.id);
    setShowVersions(true);
  }, []);

  const handleEdit = useCallback(
    (record, versionId) => {
      let url = `/form/edit?formId=${record.id}`;
      if (versionId) {
        url += `&versionId=${record.versionId}`;
      }
      history.push(url);
    },
    [history],
  );

  const handleDel = useCallback((record, byVersionId) => {
    Modal.confirm({
      title: '确认删除',
      content: '是否确认删除',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        let promise;
        if (byVersionId) {
          promise = delByVersionId({ versionId: record.versionId });
        } else {
          promise = del({ id: record.id });
        }
        promise.then(() => {
          message.success('删除成功');

          versionActionRef.current?.reload();
          actionRef.current.reload();
        });
      },
    });
  }, []);

  const handleReset = useCallback(async () => {
    actionRef.current?.reload();
  }, [actionRef]);

  const request = useCallback(async (params) => {
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
  }, []);

  const requestVersions = useCallback(
    async (params) => {
      const { current, ...rest } = params;

      const {
        data: { list, total },
      } = await getVersions({
        ...rest,
        page: current,
        id: curId,
      });
      return {
        success: true,
        data: list,
        total,
      };
    },
    [curId],
  );

  const renderAdd = useCallback(() => {
    let code = initialState?.user?.role?.code;
    const canOprate =
      code !== 'guest' && ['superAdmin', 'admin'].includes(code);
    return [
      <Button
        key="button"
        icon={<PlusOutlined />}
        type="primary"
        onClick={handleAdd}
        disabled={!canOprate}
      >
        新建
      </Button>,
    ];
  }, [initialState]);

  const initWx = useCallback(async () => {
    const data = await getWxConfig({
      url: window.location.href,
    });

    (window as any).wx.config({
      debug: false,
      ...data,
      jsApiList: ['chooseImage'],
    });
  }, []);

  useEffect(() => {
    initWx();
  }, [initWx]);

  return (
    <>
      <ProTable
        headerTitle={
          <>
            表单列表
            <Tooltip title="访客用户无法新建/编辑表单，普通用户只能新建表单和编辑归属自己的表单">
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
        toolBarRender={renderAdd as any}
        rowKey="id"
      />
      <Drawer
        zIndex={900}
        placement="right"
        open={showVersions}
        title="查看版本"
        onClose={handleClose}
        width={900}
      >
        {showVersions && (
          <ProTable
            headerTitle="版本列表"
            columns={versionColumns}
            actionRef={versionActionRef}
            search={false}
            toolBarRender={renderAdd as any}
            request={requestVersions}
          />
        )}
      </Drawer>
      <Drawer
        zIndex={1000}
        open={!!versionId}
        placement="right"
        title="预览"
        onClose={handleClosePreview}
        width={900}
      >
        <Wujie versionId={versionId} path={`/preview?versionId=${versionId}`} />
      </Drawer>
    </>
  );
});
