import request from '@/utils/request';

export async function getCateOptions(data) {
  return request('/category/options', {
    method: 'post',
    data,
  });
}
