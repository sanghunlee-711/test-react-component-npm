import React from 'react';
interface IDateAndTimeAssembleArgs {
    startDate: Date;
    startTime: string;
    endDate: Date;
    endTime: string;
}
export declare const dateAndTimeAssemble: ({ startDate, startTime, endDate, endTime, }: IDateAndTimeAssembleArgs) => {
    startModifed: Date;
    endModified: Date;
};
declare const usePeriodSelector: () => {
    state: {
        date: [Date, Date];
        assembleDate: [Date, Date];
        selectTime: string[];
    };
    actions: {
        setDate: React.Dispatch<React.SetStateAction<[Date, Date]>>;
        setSelectTime: React.Dispatch<React.SetStateAction<string[]>>;
        handleStartDate: (startDate: Date) => void;
        handleEndDate: (endDate: Date) => void;
        handleTime: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
};
export default usePeriodSelector;
