// 定义全局类型
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
declare type Nullable<T> = T | null
declare type Recordable<T = any> = Record<string, T>
declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

/**
 * 覆写类型
 *
 * @example
 * // Merge 批量覆写
 * interface A {
 *     name: string;
 *     color?: string;
 * }
 * type B = Merge<A, {
 *     name: string | number;
 *     favorite?: boolean;
 * }>
 *
 *
 * @example
 * // Omit 单个覆写，typescript 集成
 * interface A {
 *   a: number;
 *   b: number;
 * }
 *
 * interface B extends Omit<A, 'a'> {
 *   a: boolean;
 * }
 */
declare type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N

// 修改全局类型
// declare namespace NodeJS {
//   interface Process {
//     env: {
//       NODE_ENV: 'production' | 'development';
//     };
//   }
// }

// typescript 集成
// // prettier-ignore
// // 获取函数参数类型
// declare type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

// // prettier-ignore
// // 获取函数返回值类型
// declare type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

interface Option<T = string> {
  label: string
  value: T
}

interface OptionId<T = string> {
  id: string
  name: T
}

/**
 * setTimeout 返回值类型
 */
type TimeoutHandle = ReturnType<typeof setTimeout>

/**
 * setInterval 返回值类型
 */
type IntervalHandle = ReturnType<typeof setInterval>

/**泛型组件出口类型 */
type GenericComponentExports<D extends (...p: any[]) => any> =
  //这里获取组件通用类型
  import('vue').ComponentPublicInstance &
    //这里获取defineExpose暴露的数据类型
    Parameters<NonNullable<NonNullable<ReturnType<D>['__ctx']>['expose']>>[0]

// declare const ClassicEditor: (typeof import('@ckeditor/ckeditor5-editor-classic'))['ClassicEditor']
