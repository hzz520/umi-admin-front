import '@wangeditor/editor/dist/css/style.css';
import { useState, useEffect, memo } from 'react';
import { Editor } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig } from '@wangeditor/editor';
import { isEqual } from 'lodash';
import { useLocation } from 'umi';
import { getDetail } from '@/service/article';
import { decompressData } from '@/utils/compress';

export default memo(
  function IndexPage() {
    const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
    const history = useLocation();

    // 编辑器内容
    const [html, setHtml] = useState('');

    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {
      placeholder: '请输入内容...',
      MENU_CONF: {},
      readOnly: true,
      EXTEND_CONF: {},
    };

    // 及时销毁 editor ，重要！
    useEffect(() => {
      if (editor) {
        if (history.query.id) {
          getDetail({
            id: +history.query.id,
          })
            .then(({ data }) => {
              setHtml(decompressData(data.html));
            })
            .catch(() => {});
        }
      }

      return () => {
        if (editor == null) return;
        editor.destroy();
        setEditor(null);
      };
    }, [editor, history]);

    return (
      <>
        <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
          <Editor
            defaultConfig={editorConfig}
            value={html}
            onCreated={setEditor}
            onChange={(editor) => setHtml(editor.getHtml())}
            mode="default"
            style={{ height: 'auto', overflowY: 'hidden' }}
          />
        </div>
      </>
    );
  },
  (prev, next) => {
    return isEqual(prev, next);
  },
);
