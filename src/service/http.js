import axios from 'axios';
import { Notify } from 'vant';

const instance = axios.create({
  timeout: 15000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});
const rejectError = err => {
  if (err && err.response) {
    const statusMap = {
      400: '请求错误(400)',
      401: '权限不足，请重新登录(401)',
      403: '拒绝访问(403)',
      404: '请求资源不存在(404)',
      408: '请求超时(408)',
      500: '服务器错误(500)',
      501: '服务未实现(501)',
      502: '网络错误(502)',
      503: '服务不可用(503)',
      504: '网络超时(504)',
      505: 'HTTP版本不受支持(505)',
    };
    err.message =
      statusMap[err.response.status] || `连接出错(${err.response.status})!`;
  } else {
    err.message = '连接服务器失败!';
  }
  Notify(err.message);
  return Promise.reject(err);
};
// 添加请求拦截器
instance.interceptors.request.use(
  request => {
    // 在发送请求之前做些什么
    return request;
  },
  error => {
    // 对请求错误做些什么
    return rejectError(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    const { data } = response;

    if (data.success || data.status === 200) {
      return Promise.resolve(response.data);
    }

    return Promise.reject(data);
  },
  error => {
    return rejectError(error);
  },
);
export default instance;
