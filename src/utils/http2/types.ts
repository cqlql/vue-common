import type { AxiosResponse, AxiosRequestConfig } from 'axios';

export interface RequestConfig extends AxiosRequestConfig {
  showErrorToast?: boolean;
  withToken?: boolean;
  allowRefreshToken?: boolean;
}

export interface RequestOptions {
  apiUrl?: string;
  urlPrefix?: string;
  transformResponse?: (data: any, res: AxiosResponse) => RequestTransformResult;
  authFail?: () => void;
  refreshToken?: () => Promise<any>;
  allowRefreshToken?: boolean;
}

interface RequestTransformResult {
  code: number;
  message: string;
  result: any;
}
