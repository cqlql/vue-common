import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { getStorage } from '../storage';

export const TOKEN_KEY = 'Authorization';

function errorMessage(msg: string) {
  ElMessage.error(msg);
}

interface ResultType {
  code: number;
  message: string;
  result: any;
}

interface RequestOptions {
  apiUrl: string; // 'http://test.io',
  urlPrefix: string; // '/api',

  // 是否显示 错误消息
  // errorMessageShow: boolean
  /**是否携带token */
  withToken: boolean;

  // 错误回调
  fail: (message: string) => void;

  // 是否显示错误消息提示
  showErrorToast: boolean;

  transformResponse: (data: any, res: AxiosResponse) => ResultType;

  // 是否开启 RefreshToken 功能
  allowRefreshToken: boolean;

  // 请求参数删除 undefined
  reqDataRemoveUndefined: boolean;

  refreshToken: () => Promise<any>;

  /**认证失败回调，可清理登录信息并跳到登录页 */
  authFail: () => void;
}

export interface RequestOptionsNullable {
  apiUrl?: string; // 'http://test.io',
  urlPrefix?: string; // '/api',

  // 是否显示 错误消息
  // errorMessageShow: boolean
  /**是否携带token */
  withToken?: boolean;

  // 错误回调
  fail?: (message: string) => void;

  // 是否显示错误消息提示
  showErrorToast?: boolean;

  allowRefreshToken?: boolean;

  reqDataRemoveUndefined?: boolean;

  transformResponse?: RequestOptions['transformResponse'];

  refreshToken?: () => Promise<any>;

  authFail?: RequestOptions['authFail'];
}

// function removeUndefined(obj: Record<string, any>) {
//   if (obj instanceof Object) {
//     const newObj: Record<string, any> = {};
//     for (const [key, value] of Object.entries(obj)) {
//       if (value !== undefined) {
//         newObj[key] = value;
//       }
//     }
//     return newObj;
//   }

//   return obj;
// }

export default class CreateHttp {
  private axiosInstance: AxiosInstance;
  requestOptions: RequestOptions;
  constructor(requestOptions?: RequestOptionsNullable) {
    this.axiosInstance = axios.create({
      baseURL: requestOptions?.apiUrl || '' + requestOptions?.urlPrefix || '', // url = base url + request url
      // withCredentials: true, // send cookies when cross-domain requests
      // timeout: 10000, // request timeout
      withCredentials: true, //打开带COOKIE
    });

    this.requestOptions = {
      // 默认值
      ...{
        apiUrl: '',
        urlPrefix: '',
        withToken: true,
        fail() {},
        showErrorToast: true,
        reqDataRemoveUndefined: false,
        allowRefreshToken: false,
        transformResponse: (data: any) => data,
        async refreshToken() {},
        authFail() {},
      },
      ...requestOptions,
    };
  }

  async request<T = any>(
    requestConfig: AxiosRequestConfig,
    requestOptions?: RequestOptionsNullable,
  ): Promise<T> {
    const newRequestOptions: RequestOptions = {
      ...this.requestOptions,
      ...requestOptions,
    };

    const header = (requestConfig.headers = requestConfig.headers || {});

    let token: null | string = '';
    if (newRequestOptions.withToken) {
      token = getStorage('TOKEN');
      if (token) header[TOKEN_KEY] = 'Bearer ' + token;
    }

    // 删除 undefined 字段
    // const reqData = requestConfig.data;
    // if (reqData && newRequestOptions.reqDataRemoveUndefined) {
    //   reqData = removeUndefined(reqData);
    // }

    const res = await this.axiosInstance.request(requestConfig).catch((error) => {
      if (newRequestOptions.showErrorToast) {
        errorMessage(error.message);
      }
      return Promise.reject(error);
    });

    const { code, message, result } = newRequestOptions.transformResponse(res.data, res);

    if (code === 200) {
      return result;
    }

    // 处理 token 过期，可以刷新 token
    if (code === 401) {
      // RefreshToken 情况
      if (newRequestOptions.allowRefreshToken) {
        await newRequestOptions.refreshToken();
        // 重新请求
        return this.request(requestConfig, {
          ...requestOptions,
          allowRefreshToken: false, // 重复请求如果还是token过期，将不再 RefreshToken
        });
      }

      // 不需要 RefreshToken 或者 RefreshToken 出错情况执行
      // 清理登录信息并跳到登录页
      newRequestOptions.authFail();
    }

    // // token 认证失败，非过期
    // if (code === 401) {
    //   // 不需要 RefreshToken 或者 RefreshToken 出错情况执行
    //   // 清理登录信息并跳到登录页
    //   newRequestOptions.authFail();
    // }

    newRequestOptions.fail(message);

    if (newRequestOptions.showErrorToast) {
      errorMessage(message);
    }

    return Promise.reject(new Error(message));
  }

  post<T = any>(
    requestConfig: AxiosRequestConfig,
    requestOptions?: RequestOptionsNullable,
  ): Promise<T> {
    requestConfig.method = 'POST';

    return this.request(requestConfig, requestOptions);
  }

  get<T = any>(
    requestConfig: AxiosRequestConfig,
    requestOptions?: RequestOptionsNullable,
  ): Promise<T> {
    requestConfig.method = 'GET';

    return this.request(requestConfig, requestOptions);
  }

  put<T = any>(
    requestConfig: AxiosRequestConfig,
    requestOptions?: RequestOptionsNullable,
  ): Promise<T> {
    requestConfig.method = 'PUT';

    return this.request(requestConfig, requestOptions);
  }

  delete<T = any>(
    requestConfig: AxiosRequestConfig,
    requestOptions?: RequestOptionsNullable,
  ): Promise<T> {
    requestConfig.method = 'DELETE';

    return this.request(requestConfig, requestOptions);
  }
  patch<T = any>(
    requestConfig: AxiosRequestConfig,
    requestOptions?: RequestOptionsNullable,
  ): Promise<T> {
    requestConfig.method = 'PATCH';

    return this.request(requestConfig, requestOptions);
  }
}
