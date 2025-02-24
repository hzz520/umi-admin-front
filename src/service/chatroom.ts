import request from '@/utils/request';

export async function getList(data = {}) {
  return request('/chatroom/list', {
    data,
    method: 'post',
  });
}

export async function edit(data = {}) {
  return request('/chatroom/edit', {
    data,
    method: 'post',
  });
}
