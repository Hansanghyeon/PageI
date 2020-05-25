import StyleSystem, { DarkStyleSystem } from '@model/StyleSystem';

const DefaultTheme: StyleSystem = {
  color: {
    primary: 'rebeccapurple',
    bg: ['#fff'],
    text: ['#333', '#000'],
    grayscales: {
      // prefer scheme color
      dark: ['#232326', '#303437', '#2c2c2f'],
      light: ['#fff'],
    },
  },
  project: {
    soundSpot: {
      '$blue-grey': '#849296',
      $slate: '#56737a',
      $denim: '#336573',
      '$cool-grey': '#a0acaf',
      '$very-light-pink': '#d1d1d1',
      $white: '#ffffff',
      '$blue-grey-two': '#8c9198',
    },
    modular: {
      $main: '#454b56',
    },
  },
};

export const DarkTheme: DarkStyleSystem = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.color,
    bg: ['#232326'],
  },
};

export default DefaultTheme;
