import { ReactNode } from "react";

export interface TUserPath{
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[]
}

export interface Tsidebar {
  key: string;
  label: ReactNode;
  children?: Tsidebar[];
  role?: string;
}