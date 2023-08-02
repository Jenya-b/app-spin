export type DiamondType = 'blue' | 'orange' | 'purple';

export interface IUser {
  name: string;
  count: number;
}

export interface IRouletteData {
  diamond: DiamondType;
  long: number;
  countInGame: number;
  users: IUser[];
}

export const rouletteData: IRouletteData[] = [
  {
    diamond: 'blue',
    long: 2,
    countInGame: 8,
    users: [
      {
        name: 'Spin',
        count: 3,
      },
      {
        name: 'Spin',
        count: 3,
      },
      {
        name: 'Spin',
        count: 3,
      },
      {
        name: 'Spin',
        count: 3,
      },
      {
        name: 'Spin',
        count: 3,
      },
      {
        name: 'Spin',
        count: 3,
      },
      {
        name: 'Spin',
        count: 3,
      },
      {
        name: 'Spin',
        count: 3,
      },
    ],
  },
  {
    diamond: 'orange',
    long: 5,
    countInGame: 0,
    users: [],
  },
  {
    diamond: 'purple',
    long: 10,
    countInGame: 2,
    users: [
      {
        name: 'Spin',
        count: 3,
      },
      {
        name: 'Spin',
        count: 3,
      },
    ],
  },
];

export const rouletteSlider = [
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
  'blue',
  'orange',
  'purple',
];

export const lastResult = [
  {
    name: 'orange',
    count: 5,
  },
  {
    name: 'purple',
    count: 85,
  },
  {
    name: 'blue',
    count: 10,
  },
];

export const historyRoulette = [
  'blue',
  'orange',
  'purple',
  'blue',
  'blue',
  'orange',
  'purple',
  'orange',
  'orange',
  'purple',
];
