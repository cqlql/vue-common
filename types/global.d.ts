/**
 * 定义全局类型或者修改全局类型
 */

declare type Nullable<T> = T | null
declare type Recordable<T = any> = Record<string, T>
declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

interface Location {
  reload(forcedReload: boolean): void
}
