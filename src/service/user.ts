import request from '@/utils/request';

export async function login(data) {
  return request('/user/login', {
    method: 'post',
    data,
  });
}

export async function registry(data) {
  return request('/user/registry', {
    method: 'post',
    data,
  });
}

export async function changePwd(data) {
  return request('/user/changePwd', {
    method: 'post',
    data,
  });
}

export async function getUser() {
  return request('/user/info', {
    method: 'post',
  });
}

export async function getUserList(data = {}) {
  return request('/user/list', {
    method: 'post',
    data,
  });
}

export async function delUser(data) {
  return request('/user/del', {
    method: 'post',
    data,
  });
}

export async function addOrUpdateUser(data) {
  return request('/user/addOrUpdate', {
    method: 'post',
    data,
  });
}
