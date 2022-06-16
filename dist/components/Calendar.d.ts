import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'styles/calendar.css';
interface ICalendarProps {
    width?: string;
    date: Date;
    handleDate: (value: Date) => void;
}
declare const Calendar: React.FC<ICalendarProps>;
export default Calendar;
