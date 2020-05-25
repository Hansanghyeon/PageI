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
      $bg: '#e3e6e9',
      $color: '#8d9299',
      $main: '#454b56',
      $point: '#ed6b22',
      $darkBg: '#363A45',
      $darkBg2: '#38404C',
      $darkColor: '#7e8c99',
      $darkTitle: '#c1cbe5',
      $orderColor: '#38404C',
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
