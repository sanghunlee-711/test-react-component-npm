import { css } from 'styled-components';

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const flexCenter = css`
  ${flexAlignCenter}
  justify-content: center;
`;

export const flexRowCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexSpaceBetween = css`
  ${flexAlignCenter}
  justify-content: space-between;
`;

export const flexStart = css`
  ${flexAlignCenter}
  justify-content: flex-start;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexInlineCenter = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
