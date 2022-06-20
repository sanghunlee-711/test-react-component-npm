const colors = {
  mint: '#00c4b3',
  gray: '#9a9a9a',
  gray10: '#F6F6F6',
  gray20: '#E0E0E0',
  gray30: '#F0F0F0',
  gray40: '#7D7D7D',
  gray50: '#F9F9F9',
  gray60: '#4E4E4E',
  gray70: '#656565',
  gray80: '#303030',
  white: '#ffffff',
  blue: '#5768FF',
  blue10: '#4565b8',
  blue20: '#004ADA',
  navy: '#184762',
  red: '#FF5858',
  red10: '#c13232',
  yellow: '#ffc83c',
  green: '#3E833C',
  skyBlue: '#6894ad',
  skyBlue10: '#628AA1',
  transparentGray: 'rgba(0, 0, 0, 0.5)',
  black: '#000000',
  yellow1: '#FFEB60',
  yellow2: '#FFC700',
  orange1: '#F99C3A',
  orange2: '#FF9800',
  orange3: '#FF5C00',
  blue1: '#2196F3',
  blue2: '#428DF7',
  blue3: '#4285F4',
  blue4: '#0078D4',
  blue5: '#000B6A',
  blue6: '#4193F7',
  purple4: '#9668A7',
  lightGrey1: '#F0F0F0',
  lightGrey2: '#EBEBEB',
  lightGrey3: '#DFDFDF',
  lightGrey4: '#DADADA',
  lightGrey5: '#D8D8D8',
  lightGrey7: '#9B9B9B',
  lightGrey8: '#9E9E9E',
  lightGrey9: '#D2D2D2',
  darkGrey1: '#8B8B8B',
  darkGrey2: '#808080',
  darkGrey3: '#7A7A7A',
  darkGrey4: '#676767',
  darkGrey5: '#606060',
  darkGrey6: '#464646',
  darkGrey7: '#8D8D8D',
  grey1: '#C9C9C9',
  grey2: '#C8C8C8',
  grey3: '#C4C4C4',
  grey4: '#C1C1C1',
  grey5: '#D2D2D2',
  grey6: '#B8B8B8',
  grey7: '#B7B7B7',
  grey8: '#A9A9A9',
  grey9: '#A1A1A1',
  grey11: '#9C9C9C',
  grey13: '#9A9A9A',
  normalGrey6: '#F0F0F0',
  primaryColor: '#00C4B3',
  lightOpacity: 'rgba(0, 0, 0, 0.6)',
};

const fonts = {
  L: 'SpoqaHanSansNeoL',
  M: 'SpoqaHanSansNeoM',
  R: 'SpoqaHanSansNeoR',
  B: 'SpoqaHanSansNeoB',
};

const boxShadow = {
  selectBox: 'inset 0px 0px 4px rgba(0, 0, 0, 0.25)',
  modalInputWrapper: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  input: 'inset 0px 0px 5px rgba(0, 0, 0, 0.5)',
  inputExceptTop: ' 0 5px 5px rgba(0, 0, 0, 0.5)',
  inputExceptBottom: '0 0px 5px rgba(0, 0, 0, 0.5)',
};

// apps
const textShadow = {
  textShadow1: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

export const styleTheme = {
  colors,
  boxShadow,
  fonts,
  textShadow,
} as const;

export default styleTheme;
