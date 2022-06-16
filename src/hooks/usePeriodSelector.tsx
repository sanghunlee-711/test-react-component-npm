import React, { useEffect, useState } from 'react';

interface IDateAndTimeAssembleArgs {
  startDate: Date;
  startTime: string;
  endDate: Date;
  endTime: string;
}

export const dateAndTimeAssemble = ({
  startDate,
  startTime,
  endDate,
  endTime,
}: IDateAndTimeAssembleArgs) => {
  const startDateYear = startDate.getFullYear();
  const startDateMonth = startDate.getMonth();
  const startDateDay = startDate.getDate();
  const startDateHour = +startTime.split(':')[0];
  const startDateMinute = +startTime.split(':')[1];

  const startModifed = new Date(
    startDateYear,
    startDateMonth,
    startDateDay,
    startDateHour,
    startDateMinute
  );

  const endDateYear = endDate.getFullYear();
  const endDateMonth = endDate.getMonth();
  const endDateDay = endDate.getDate();
  const endDateHour = +endTime.split(':')[0];
  const endDateMinute = +endTime.split(':')[1];

  const endModified = new Date(
    endDateYear,
    endDateMonth,
    endDateDay,
    endDateHour,
    endDateMinute
  );

  return {
    startModifed,
    endModified,
  };
};

const usePeriodSelector = () => {
  const [date, setDate] = useState<[Date, Date]>([new Date(), new Date()]);
  const [selectTime, setSelectTime] = useState(['00:00', '00:00']);
  const [assembleDate, setAssembleDate] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);

  const handleStartDate = (startDate: Date) => {
    setDate([startDate, date[1]]);
  };

  const handleEndDate = (endDate: Date) => {
    setDate([date[0], endDate]);
  };

  const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === 'startTime') {
      setSelectTime([value, selectTime[1]]);
    }
    if (name === 'endTime') {
      setSelectTime([selectTime[0], value]);
    }
  };

  useEffect(() => {
    const { startModifed, endModified } = dateAndTimeAssemble({
      startDate: date[0],
      startTime: selectTime[0],
      endDate: date[1],
      endTime: selectTime[1],
    });

    setAssembleDate([startModifed, endModified]);
  }, [date, selectTime]);
  return {
    state: {
      date,
      assembleDate,
      selectTime,
    },
    actions: {
      setDate,
      setSelectTime,
      handleStartDate,
      handleEndDate,
      handleTime,
    },
  };
};

export default usePeriodSelector;
