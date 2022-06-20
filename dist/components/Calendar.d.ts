import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'styles/calendar.css';
interface ICalendarProps {
    width?: string;
    date: Date;
    handleDate: (value: Date) => void;
}
declare const _default: React.NamedExoticComponent<ICalendarProps>;
export default _default;
