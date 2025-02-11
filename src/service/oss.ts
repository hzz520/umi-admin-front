import request from '@/utils/request';

export async function uploadCos(data) {
  return request('/oss/upload', {
    method: 'post',
    body: data,
    requestType: 'form',
    headers: {},
  });
}
