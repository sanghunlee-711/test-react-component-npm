import React from 'react';
import styled, { css } from 'styled-components';
import { TColor } from '../types/common';

interface IListBoxButtonProps {
  text: string;
  onClick: () => void;
  width: '44' | '57';
  isRound?: boolean;
  hoverBackgroundColor?: TColor;
}

const ButtonContainer = styled.button<
  Omit<IListBoxButtonProps, 'text' | 'onClick'>
>`
  ${({ isRound }) => {
    if (isRound) {
      return css`
        border-radius: 24px;
      `;
    }

    return css`
      border: 0.25px solid ${({ theme }) => theme.colors.gray};
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
    `;
  }}

  ${({ hoverBackgroundColor }) => {
    if (hoverBackgroundColor) {
      return css`
        &:hover {
          background-color: ${({ theme }) =>
            theme.colors[hoverBackgroundColor]};
          border: 0.25px solid
            ${({ theme }) => theme.colors[hoverBackgroundColor]};
          color: ${({ theme }) => theme.colors.white};
          font-weight: 700;
        }
      `;
    }
  }};

  width: ${({ width }) => `${width}px`};
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  height: 21px;
  text-align: center;
  vertical-align: middle;
  font-size: 13px;
`;

const ListBoxButton: React.FC<IListBoxButtonProps> = (props) => {
  const { text, onClick, ...styleProps } = props;

  return (
    <ButtonContainer {...styleProps} type="button" onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

export default ListBoxButton;
