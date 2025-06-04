import request from '@/utils/request';

export async function getWxConfig(data) {
  return request('/wx/config', {
    method: 'post',
    data,
  });
}
