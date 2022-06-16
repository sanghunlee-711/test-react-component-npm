import React from 'react';
interface IPeriodSelectorProps {
    handleStartDate: (date: Date) => void;
    handleEndDate: (date: Date) => void;
    withTimes: boolean;
    selectTime?: string[];
    labelText?: string;
    handleTime?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    startDate: Date;
    endDate: Date;
}
declare const _default: React.NamedExoticComponent<IPeriodSelectorProps>;
export default _default;
