import request from '@/utils/request';

export async function edit(data) {
  return request('/article/edit', {
    method: 'post',
    data,
  });
}

export async function getDetail(data) {
  return request('/article/detail', {
    method: 'post',
    data,
  });
}

export async function del(data) {
  return request('/article/del', {
    method: 'post',
    data,
  });
}

export async function getList(data) {
  return request('/article/list', {
    method: 'post',
    data,
  });
}
