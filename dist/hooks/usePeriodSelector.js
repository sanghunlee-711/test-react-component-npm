"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateAndTimeAssemble = void 0;
var react_1 = require("react");
var dateAndTimeAssemble = function (_a) {
    var startDate = _a.startDate, startTime = _a.startTime, endDate = _a.endDate, endTime = _a.endTime;
    var startDateYear = startDate.getFullYear();
    var startDateMonth = startDate.getMonth();
    var startDateDay = startDate.getDate();
    var startDateHour = +startTime.split(':')[0];
    var startDateMinute = +startTime.split(':')[1];
    var startModifed = new Date(startDateYear, startDateMonth, startDateDay, startDateHour, startDateMinute);
    var endDateYear = endDate.getFullYear();
    var endDateMonth = endDate.getMonth();
    var endDateDay = endDate.getDate();
    var endDateHour = +endTime.split(':')[0];
    var endDateMinute = +endTime.split(':')[1];
    var endModified = new Date(endDateYear, endDateMonth, endDateDay, endDateHour, endDateMinute);
    return {
        startModifed: startModifed,
        endModified: endModified,
    };
};
exports.dateAndTimeAssemble = dateAndTimeAssemble;
var usePeriodSelector = function () {
    var _a = (0, react_1.useState)([new Date(), new Date()]), date = _a[0], setDate = _a[1];
    var _b = (0, react_1.useState)(['00:00', '00:00']), selectTime = _b[0], setSelectTime = _b[1];
    var _c = (0, react_1.useState)([
        new Date(),
        new Date(),
    ]), assembleDate = _c[0], setAssembleDate = _c[1];
    var handleStartDate = function (startDate) {
        setDate([startDate, date[1]]);
    };
    var handleEndDate = function (endDate) {
        setDate([date[0], endDate]);
    };
    var handleTime = function (e) {
        var _a = e.currentTarget, name = _a.name, value = _a.value;
        if (name === 'startTime') {
            setSelectTime([value, selectTime[1]]);
        }
        if (name === 'endTime') {
            setSelectTime([selectTime[0], value]);
        }
    };
    (0, react_1.useEffect)(function () {
        var _a = (0, exports.dateAndTimeAssemble)({
            startDate: date[0],
            startTime: selectTime[0],
            endDate: date[1],
            endTime: selectTime[1],
        }), startModifed = _a.startModifed, endModified = _a.endModified;
        setAssembleDate([startModifed, endModified]);
    }, [date, selectTime]);
    return {
        state: {
            date: date,
            assembleDate: assembleDate,
            selectTime: selectTime,
        },
        actions: {
            setDate: setDate,
            setSelectTime: setSelectTime,
            handleStartDate: handleStartDate,
            handleEndDate: handleEndDate,
            handleTime: handleTime,
        },
    };
};
exports.default = usePeriodSelector;
//# sourceMappingURL=usePeriodSelector.js.map