"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var date_fns_1 = require("date-fns");
var ko_1 = __importDefault(require("date-fns/locale/ko"));
var react_1 = require("react");
var react_datepicker_1 = __importStar(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
require("styles/calendar.css");
var CalendarContainer_1 = __importDefault(require("./CalendarContainer"));
(0, react_datepicker_1.registerLocale)('ko', ko_1.default);
var CustomInput = (0, react_1.forwardRef)(function (props, ref) {
    return (0, jsx_runtime_1.jsx)(CalendarContainer_1.default, __assign({}, props, { ref: ref }));
});
var Calendar = function (_a) {
    var date = _a.date, handleDate = _a.handleDate;
    var inputRef = (0, react_1.useRef)(null);
    var getDayName = function (dayName) {
        return dayName
            .toLocaleString('ko-KR', {
            weekday: 'long',
        })
            .substr(0, 1);
    };
    var createDate = function (newDate) {
        return new Date(new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 0, 0, 0));
    };
    return ((0, jsx_runtime_1.jsx)(react_datepicker_1.default, { locale: "ko", portalId: "modal", dateFormat: "yyyy.MM.dd", selected: date, onChange: handleDate, customInput: (0, jsx_runtime_1.jsx)(CustomInput, { inputRef: inputRef }), popperPlacement: "auto-end", fixedHeight: true, renderCustomHeader: function (_a) {
            var date = _a.date, changeYear = _a.changeYear, changeMonth = _a.changeMonth, decreaseMonth = _a.decreaseMonth, increaseMonth = _a.increaseMonth, prevMonthButtonDisabled = _a.prevMonthButtonDisabled, nextMonthButtonDisabled = _a.nextMonthButtonDisabled;
            return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "calendar-header-container" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: decreaseMonth, disabled: prevMonthButtonDisabled }, { children: '<' })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { children: (0, date_fns_1.getYear)(date) }), (0, jsx_runtime_1.jsx)("span", { children: (0, date_fns_1.getMonth)(date) + 1 })] }), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: increaseMonth, disabled: nextMonthButtonDisabled }, { children: '>' }))] })));
        }, dayClassName: function (date) {
            return getDayName(createDate(date)) === '토'
                ? 'calendar-saturday'
                : getDayName(createDate(date)) === '일'
                    ? 'calendar-sunday'
                    : '';
        } }));
};
exports.default = Calendar;
//# sourceMappingURL=Calendar.js.map