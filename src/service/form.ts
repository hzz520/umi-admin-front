import request from '@/utils/request';

export async function getList(data) {
  return request('/dynamic-form/list', {
    method: 'post',
    data,
  });
}

export async function getVersions(data) {
  return request('/dynamic-form/versionsById', {
    method: 'post',
    data,
  });
}

export async function del(data) {
  return request('/dynamic-form/del', {
    method: 'post',
    data,
  });
}

export async function delByVersionId(data) {
  return request('/dynamic-form/delByVersionId', {
    method: 'post',
    data,
  });
}
