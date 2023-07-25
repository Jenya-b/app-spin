export interface IBasicNavMenu {
  title: string;
  path: string;
}

export interface INavMenu extends IBasicNavMenu {
  iconUrl: { active: string; noActive: string };
}

export interface ISocialMenu {
  svg: JSX.Element;
  path: string;
}
