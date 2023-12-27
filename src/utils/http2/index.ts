import { getStorage } from '../storage';
import CreateHttp from './CreateHttp';

export const apiUrl = import.meta.env.VITE_GLOB_API_URL;

CreateHttp.errorMessage = (msg: string) => {
  showNotify(msg);
};

CreateHttp.getToken = () => getStorage('TOKEN') || '';

// 刷新 token
// export async function refreshToken() {
//   const { accesstoken, refreshtoken } = await defHttp.post<{
//     /**
//      * 新访问TOKEN
//      */
//     accesstoken: string;
//     /**
//      * 刷新token，不是每次都会返回该参数。
//      * 当刷新token快要过期时，才会返回该参数。
//      */
//     refreshtoken?: string;
//   }>(
//     {
//       url: 'api/refresh/',
//       data: {
//         refresh: getStorage('REFRESH_TOKEN'),
//       },
//     },
//     {
//       allowRefreshToken: false,
//       withToken: false,
//       showErrorToast: false,
//     },
//   );

//   setStorage('TOKEN', accesstoken);
//   if (refreshtoken) {
//     setStorage('REFRESH_TOKEN', refreshtoken);
//   }
// }

export const defHttp = new CreateHttp({
  apiUrl,
  // urlPrefix: '/api',

  allowRefreshToken: true,
  // refreshToken,

  authFail() {
    // 清理登录信息并跳到登录页
    // useUserStoreWithOut().logout(true, false);
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

interface DefHttpResData<T = any> {
  status: number;
  errmsg: string;
  data: T;
}
