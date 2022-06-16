"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var Calendar_1 = __importDefault(require("./Calendar"));
var WrapperDefault = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  ", "\n\n  padding: 14px 36px;\n\n  & > span {\n    font-size: 18px;\n    font-weight: 700;\n    height: 45px;\n    display: inline-flex;\n    align-items: center;\n    white-space: nowrap;\n    min-width: 155px;\n  }\n"], ["\n  display: flex;\n  ", "\n\n  padding: 14px 36px;\n\n  & > span {\n    font-size: 18px;\n    font-weight: 700;\n    height: 45px;\n    display: inline-flex;\n    align-items: center;\n    white-space: nowrap;\n    min-width: 155px;\n  }\n"])), function (_a) {
    var isAlignCenter = _a.isAlignCenter;
    if (isAlignCenter) {
        return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        align-items: center;\n      "], ["\n        align-items: center;\n      "])));
    }
});
var WrapperDate = (0, styled_components_1.default)(WrapperDefault)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  & > div {\n    display: flex;\n    align-items: center;\n\n    & > div {\n      display: flex;\n      & > div:first-child {\n        margin-right: 10px;\n      }\n\n      & > input {\n        width: 100%;\n        border-radius: 10px;\n        border: none;\n        padding: 0px 12px;\n        background: ", ";\n        box-shadow: ", ";\n      }\n    }\n\n    & > span {\n      margin: 0px 27px;\n      font-size: 20px;\n      font-weight: 700;\n      color: ", ";\n    }\n  }\n"], ["\n  & > div {\n    display: flex;\n    align-items: center;\n\n    & > div {\n      display: flex;\n      & > div:first-child {\n        margin-right: 10px;\n      }\n\n      & > input {\n        width: 100%;\n        border-radius: 10px;\n        border: none;\n        padding: 0px 12px;\n        background: ", ";\n        box-shadow: ", ";\n      }\n    }\n\n    & > span {\n      margin: 0px 27px;\n      font-size: 20px;\n      font-weight: 700;\n      color: ", ";\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.boxShadow.selectBox;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.gray;
});
var PeriodSelector = function (_a) {
    var selectTime = _a.selectTime, withTimes = _a.withTimes, labelText = _a.labelText, handleStartDate = _a.handleStartDate, handleEndDate = _a.handleEndDate, startDate = _a.startDate, endDate = _a.endDate, handleTime = _a.handleTime;
    return ((0, jsx_runtime_1.jsxs)(WrapperDate, { children: [(0, jsx_runtime_1.jsx)("span", { children: labelText || '기간 선택' }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Calendar_1.default, { date: startDate, handleDate: handleStartDate }), withTimes && handleTime && selectTime && ((0, jsx_runtime_1.jsx)("input", { type: "time", value: selectTime && selectTime[0], name: "startTime", onChange: handleTime }))] }), (0, jsx_runtime_1.jsx)("span", { children: "~" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Calendar_1.default, { date: endDate, handleDate: handleEndDate }), withTimes && handleTime && selectTime && ((0, jsx_runtime_1.jsx)("input", { type: "time", value: selectTime && selectTime[1], name: "endTime", onChange: handleTime }))] })] })] }));
};
exports.default = react_1.default.memo(PeriodSelector);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=PeriodSelector.js.map