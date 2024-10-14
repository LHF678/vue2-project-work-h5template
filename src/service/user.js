import http from './http';

/**
 * 请求示例
 * 接口文档：xxxxx
 */
export const getUser = (params = {}) => {
  return http.post('/user/getUserInfo', params);
};
