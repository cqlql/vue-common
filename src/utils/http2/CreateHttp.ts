import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import type { RequestConfig, RequestOptions } from './types';

const TOKEN_KEY = 'Authorization';

export default class CreateHttp {
  static errorMessage(_msg: string) {
    console.warn('未设置 toastError');
  }
  static getToken() {
    console.warn('未设置 token 获取');
    return '';
  }
  transformResponse = (data: any, _res: AxiosResponse) => data;
  refreshToken = () => new Promise((resolve) => resolve({}));
  authFail = () => {};
  fail = (_errMsg: string) => {};
  allowRefreshToken?: boolean;
  private axiosInstance: AxiosInstance;
  constructor(requestOptions: RequestOptions) {
    this.transformResponse = requestOptions.transformResponse || this.transformResponse;
    this.refreshToken = requestOptions.refreshToken || this.refreshToken;
    this.authFail = requestOptions.authFail || this.authFail;
    this.allowRefreshToken = requestOptions.allowRefreshToken;

    this.axiosInstance = axios.create({
      baseURL: requestOptions?.apiUrl || '' + requestOptions?.urlPrefix || '',
      // withCredentials: true, // send cookies when cross-domain requests
      // timeout: 10000, // request timeout
      withCredentials: true, //打开带COOKIE
    });
  }

  private setToken(requestConfig: RequestConfig) {
    let token: null | string = '';
    if (requestConfig.withToken) {
      token = CreateHttp.getToken();
      if (token) {
        let headers = requestConfig.headers;
        if (!headers) {
          headers = requestConfig.headers = {};
        }
        headers[TOKEN_KEY] = 'Bearer ' + token;
      }
    }
  }

  async request<T = any>(requestConfig: RequestConfig): Promise<T> {
    this.setToken(requestConfig);

    const res = await this.axiosInstance.request(requestConfig).catch((error) => {
      if (requestConfig.showErrorToast) {
        CreateHttp.errorMessage(error.message);
      }
      return Promise.reject(error);
    });

    const { code, message, result } = this.transformResponse(res.data, res);

    if (code === 200) {
      return result;
    }

    // 处理 token 过期，可以刷新 token
    if (code === 401) {
      // RefreshToken 情况
      let allowRefreshToken = requestConfig.allowRefreshToken;
      // 不给值情况使用实例中的 allowRefreshToken
      if (allowRefreshToken === undefined) {
        allowRefreshToken = this.allowRefreshToken;
      }
      if (allowRefreshToken) {
        await this.refreshToken();
        // 重新请求
        return this.request({
          ...requestConfig,
          allowRefreshToken: false, // 重复请求如果还是token过期，将不再 RefreshToken
        });
      }

      // 不需要 RefreshToken 或者 RefreshToken 也过期情况执行
      // 清理登录信息并跳到登录页
      this.authFail();
    }

    this.fail(message);

    if (requestConfig.showErrorToast) {
      CreateHttp.errorMessage(message);
    }

    return Promise.reject(new Error(message));
  }

  private requestEasy<T = any>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    data?: Record<string, any>,
    requestConfig?: RequestConfig,
  ) {
    const newRequestConfig = {
      ...requestConfig,
      url,
      method,
      data,
    };
    return this.request<T>(newRequestConfig);
  }

  get<T = any>(url: string, requestConfig?: RequestConfig) {
    return this.requestEasy<T>(url, 'GET', undefined, requestConfig);
  }
  delete<T = any>(url: string, requestConfig?: RequestConfig) {
    return this.requestEasy<T>(url, 'DELETE', undefined, requestConfig);
  }

  post<T = any>(url: string, data?: any, requestConfig?: RequestConfig) {
    return this.requestEasy<T>(url, 'POST', data, requestConfig);
  }

  put<T = any>(url: string, data?: any, requestConfig?: RequestConfig) {
    return this.requestEasy<T>(url, 'PUT', data, requestConfig);
  }

  patch<T = any>(url: string, data?: any, requestConfig?: RequestConfig) {
    return this.requestEasy<T>(url, 'PATCH', data, requestConfig);
  }
}
