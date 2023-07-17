export interface INavMenu {
  title: string;
  iconUrl: { active: string; noActive: string };
  path: string;
}

export interface ISocialMenu {
  svg: JSX.Element;
  path: string;
}

export interface IFooterMenu {
  title: string;
  path: string;
}
