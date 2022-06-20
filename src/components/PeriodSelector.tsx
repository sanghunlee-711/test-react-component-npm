import React from 'react';
import styled, { css } from 'styled-components';
import Calendar from './Calendar';

export interface IPeriodSelectorProps {
  handleStartDate: (date: Date) => void;
  handleEndDate: (date: Date) => void;
  withTimes: boolean;
  selectTime?: string[];
  labelText?: string;
  handleTime?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  startDate: Date;
  endDate: Date;
}

const WrapperDefault = styled.div<{
  isAlignCenter?: boolean;
}>`
  display: flex;
  ${({ isAlignCenter }) => {
    if (isAlignCenter) {
      return css`
        align-items: center;
      `;
    }
  }}

  padding: 14px 36px;

  & > span {
    font-size: 18px;
    font-weight: 700;
    height: 45px;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    min-width: 155px;
  }
`;

const WrapperDate = styled(WrapperDefault)`
  & > div {
    display: flex;
    align-items: center;

    & > div {
      display: flex;
      & > div:first-child {
        margin-right: 10px;
      }

      & > input {
        width: 100%;
        border-radius: 10px;
        border: none;
        padding: 0px 12px;
        background: ${({ theme }) => theme.colors.white};
        box-shadow: ${({ theme }) => theme.boxShadow.selectBox};
      }
    }

    & > span {
      margin: 0px 27px;
      font-size: 20px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

const PeriodSelector: React.FC<IPeriodSelectorProps> = ({
  selectTime,
  withTimes,
  labelText,
  handleStartDate,
  handleEndDate,
  startDate,
  endDate,
  handleTime,
}): JSX.Element => {
  return (
    <WrapperDate>
      <span>{labelText || '기간 선택'}</span>
      <div>
        <div>
          <Calendar date={startDate} handleDate={handleStartDate} />
          {withTimes && handleTime && selectTime && (
            <input
              type="time"
              value={selectTime && selectTime[0]}
              name="startTime"
              onChange={handleTime}
            />
          )}
        </div>
        <span>~</span>
        <div>
          <Calendar date={endDate} handleDate={handleEndDate} />
          {withTimes && handleTime && selectTime && (
            <input
              type="time"
              value={selectTime && selectTime[1]}
              name="endTime"
              onChange={handleTime}
            />
          )}
        </div>
      </div>
    </WrapperDate>
  );
};

export default React.memo(PeriodSelector);
