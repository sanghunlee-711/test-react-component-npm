/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-nested-ternary */
import { getMonth, getYear } from 'date-fns';
import ko from 'date-fns/locale/ko';
import React, { forwardRef, useRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import '../styles/calendar.css';
import styleTheme from '../styles/Theme';
import CalendarContainer from './CalendarContainer';
registerLocale('ko', ko);

export interface ICalendarProps {
  width?: string;
  date: Date;
  handleDate: (value: Date) => void;
}

const CustomInput = forwardRef((props: any, ref) => {
  return <CalendarContainer {...props} ref={ref} />;
});

const Calendar: React.FC<ICalendarProps> = ({
  date,
  handleDate,
}): JSX.Element => {
  const inputRef = useRef(null);

  const getDayName = (dayName: Date) => {
    return dayName
      .toLocaleString('ko-KR', {
        weekday: 'long',
      })
      .substr(0, 1);
  };

  const createDate = (newDate: Date) => {
    return new Date(
      new Date(
        newDate.getFullYear(),
        newDate.getMonth(),
        newDate.getDate(),
        0,
        0,
        0
      )
    );
  };

  return (
    <StyledThemeProvider theme={styleTheme}>
      <DatePicker
        locale="ko"
        portalId="modal"
        dateFormat="yyyy.MM.dd"
        selected={date}
        onChange={handleDate}
        customInput={<CustomInput inputRef={inputRef} />}
        popperPlacement="auto-end"
        fixedHeight
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="calendar-header-container">
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {'<'}
            </button>
            <div>
              <span>{getYear(date)}</span>
              <span>{getMonth(date) + 1}</span>
            </div>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {'>'}
            </button>
          </div>
        )}
        dayClassName={(date) =>
          getDayName(createDate(date)) === '토'
            ? 'calendar-saturday'
            : getDayName(createDate(date)) === '일'
            ? 'calendar-sunday'
            : ''
        }
      />
    </StyledThemeProvider>
  );
};

export default React.memo(Calendar);
