import { ReactNode } from 'react';

interface Pathaccess {
  path: string;
  element: ReactNode;
  children?: {
    path: string;
    element: ReactNode;
  }[];
}

interface TUserPath {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
}

export const routeGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: Pathaccess[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);

  return routes;
};
