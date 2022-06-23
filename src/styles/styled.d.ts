import theme from './Theme';

type TTheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends TTheme {}
}
