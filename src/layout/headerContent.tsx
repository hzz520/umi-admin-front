import { ArrowLeftOutlined } from '@ant-design/icons';
import { ProBreadcrumb } from '@ant-design/pro-layout';
import { memo } from 'react';
import { useHistory } from 'umi';

export default memo(() => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <ArrowLeftOutlined onClick={handleBack} style={{ marginRight: '10px' }} />
      <ProBreadcrumb />
    </div>
  );
});
