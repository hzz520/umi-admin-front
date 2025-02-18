import '@wangeditor/editor/dist/css/style.css';
import { useState, useEffect, memo, useCallback, useMemo } from 'react';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import {
  IDomEditor,
  IEditorConfig,
  IToolbarConfig,
  Boot,
} from '@wangeditor/editor';
import { isEqual } from 'lodash';
import { uploadCos } from '@/service/oss';
import { SaveButton } from './saveButton';
import { useLocation, useHistory, useModel } from 'umi';
import { Modal, Form, Input, message } from 'antd';
import { edit, getDetail } from '@/service/article';
import { compressData, decompressData } from '@/utils/compress';

type InsertFnType = (url: string, alt: string, href: string) => void;

Boot.registerMenu({
  key: 'save', // 定义 menu key ：要保证唯一、不重复（重要）
  factory() {
    return new SaveButton(); // 把 `YourMenuClass` 替换为你菜单的 class
  },
});

export default memo(
  function IndexPage() {
    const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
    const [isInited, setIsInited] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const { initialState } = useModel('@@initialState');
    const [name, setName] = useState('');

    // 编辑器内容
    const [html, setHtml] = useState('');
    const canEdit = useMemo(() => {
      let code = initialState?.user?.role?.code;
      let userName = initialState?.user?.name;
      let isGuest = !code || code === 'guest';

      if (location.pathname === '/article/add') {
        return !isGuest;
      }
      return (
        (['superAdmin', 'admin'].includes(code) || name === userName) &&
        !isGuest
      );
    }, [location, initialState, name]);

    // 工具栏配置
    const toolbarConfig = useMemo(() => {
      return {
        excludeKeys: ['group-video'],
        ...(canEdit
          ? {
              insertKeys: {
                index: 100,
                keys: 'save',
              },
            }
          : {}),
      } as Partial<IToolbarConfig>;
    }, [canEdit]);

    // 编辑器配置
    const editorConfig = useMemo(() => {
      return {
        placeholder: '请输入内容...',
        MENU_CONF: {
          uploadImage: {
            async customUpload(file: File, insertFn: InsertFnType) {
              let data = new FormData();
              data.append('file', file);
              data.append('bizCode', 'article');
              const { data: url } = await uploadCos(data);
              insertFn(url, '', url);
            },
          },
        },
        EXTEND_CONF: {},
      } as Partial<IEditorConfig>;
    }, []);

    const handleOk = useCallback(() => {
      if (loading) return;
      setLoading(true);
      let html = editor.getHtml();
      if (html === '') {
        message.warning('请输入内容，空文档无法保存');
        return;
      }
      edit({
        id: +location.query.id,
        html: compressData(html),
        title: form.getFieldValue('title'),
      })
        .then(() => {
          message.success('保存成功');
          setOpen(false);
          history.replace('/article/list', { refresh: true });
        })
        .finally(() => {
          setLoading(false);
        });
    }, [loading, editor, form, location, history]);

    const handleCancel = useCallback(() => {
      setOpen(false);
    }, []);

    // 及时销毁 editor ，重要！
    useEffect(() => {
      if (location.pathname === '/article/edit') {
        getDetail({
          id: +location.query.id,
        }).then(({ data }) => {
          setHtml(decompressData(data.html));
          setName(data.name);
          setIsInited(true);
          form.setFieldValue('title', data.title);
        });
      } else {
        setIsInited(true);
      }
      if (editor) {
        editor.on('save', () => {
          if (!open) setOpen(true);
        });
      }

      return () => {
        if (editor == null) return;
        editor.destroy();
        setEditor(null);
      };
    }, [editor, location]);

    return (
      <>
        <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
          {isInited ? (
            <>
              <Toolbar
                editor={editor}
                defaultConfig={toolbarConfig}
                mode="default"
                style={{ borderBottom: '1px solid #ccc' }}
              />
              <Editor
                defaultConfig={editorConfig}
                value={html}
                onCreated={setEditor}
                onChange={(editor) => setHtml(editor.getHtml())}
                mode="default"
                style={{ height: '680px', overflowY: 'hidden' }}
              />
            </>
          ) : (
            <></>
          )}
          <Modal
            title="保存文章"
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="确认"
            cancelText="取消"
          >
            <Form form={form}>
              <Form.Item
                label="文章标题"
                name="title"
                rules={[{ required: true, message: '请输入文章标题' }]}
              >
                <Input maxLength={100} />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </>
    );
  },
  (prev, next) => {
    return isEqual(prev, next);
  },
);
