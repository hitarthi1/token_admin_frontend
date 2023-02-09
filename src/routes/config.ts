import { ReactNode } from "react";

export type RouteType = {
  windo_no: number;
  element: ReactNode,
  state: string,
  index?: boolean,
  path?: string,
  child?: RouteType[],
  sidebarProps?: {
    displayText: string,
    icon?: ReactNode;
  };
};