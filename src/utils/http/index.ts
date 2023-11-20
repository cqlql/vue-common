import { useUserStoreWithOut } from '@/store/modules/user';
import CreateHttp from './CreateHttp';
import { getStorage, setStorage } from '../storage';

export const apiUrl = import.meta.env.VITE_GLOB_API_URL;

// 刷新 token
export async function refreshToken() {
  const { accesstoken } = await defHttp.post(
    {
      url: 'api/refresh/',
      data: {
        refresh: getStorage('REFRESH_TOKEN'),
      },
    },
    {
      allowRefreshToken: false,
      withToken: false,
      showErrorToast: false,
    },
  );

  setStorage('TOKEN', accesstoken);
}

export interface DefHttpResData<T = any> {
  status: number;
  errmsg: string;
  data: T;
}

export const defHttp = new CreateHttp({
  apiUrl,
  // urlPrefix: '/api',

  allowRefreshToken: true,
  refreshToken,

  authFail() {
    // 清理登录信息并跳到登录页
    useUserStoreWithOut().logout(true, false);
  },

  // 结果数据格式统一
  transformResponse(data: DefHttpResData) {
    let code = data.status;
    switch (data.status) {
      case 401:
        code = 401;
        break;
      default:
        break;
    }
    return {
      code,
      message: data.errmsg,
      result: data.data,
    };
  },
});

export const httpV2 = new CreateHttp({
  apiUrl,
  // urlPrefix: '/api',

  allowRefreshToken: true,
  refreshToken,

  authFail() {
    // 清理登录信息并跳到登录页
    useUserStoreWithOut().logout(true, false);
  },

  // 结果数据格式统一
  transformResponse(data: { status: number; errmsg: string; results: any }) {
    // let code = data.status;
    // switch (data.status) {
    //   case 419:
    //     code = 401;
    //     break;

    //   default:
    //     break;
    // }
    return {
      code: 200,
      message: data.errmsg,
      result: data.results,
    };
  },
});
