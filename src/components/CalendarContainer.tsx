import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import styled, { css } from 'styled-components';
// import { flexSpaceBetween } from 'styles/GlobalStyles';

interface InputProps {
  className: string;
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
}

const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;
const flexSpaceBetween = css`
  ${flexAlignCenter}
  justify-content: space-between;
`;

const InputContainer = styled.div`
  ${flexSpaceBetween};
  padding: 0px 16px;
  width: 207px;
  height: 45px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  & > input {
    color: ${({ theme }) => theme.colors.gray};
    width: 90px;
    width: calc(100% - 16px * 2 - 23px);
    font-size: 16px;
    border: none;
  }
`;

const CalendarContainer: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ className, value, onClick, onChange }, ref): JSX.Element => {
  return (
    <InputContainer onClick={onClick}>
      <input
        className={className}
        type="text"
        value={value}
        ref={ref}
        onChange={(e) => onChange(e.target.value)}
      />
      <img src="/static/icons/icon-calendar.png" alt="calendar-icon" />
    </InputContainer>
  );
};

export default forwardRef(CalendarContainer);
