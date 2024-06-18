export interface MenuDataItem {
  id: string;
  name: string;
  icon?: string;
  onClick?: () => void;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  children?: MenuDataItem[];
}
