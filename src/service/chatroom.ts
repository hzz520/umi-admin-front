import request from '@/utils/request';

export async function getList(data = {}) {
  return request('/chatroom/list', {
    data,
    method: 'post',
  });
}
