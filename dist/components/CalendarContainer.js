"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importStar(require("styled-components"));
var flexAlignCenter = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var flexSpaceBetween = (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  justify-content: space-between;\n"], ["\n  ", "\n  justify-content: space-between;\n"])), flexAlignCenter);
var InputContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  padding: 0px 16px;\n  width: 207px;\n  height: 45px;\n  background: ", ";\n  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n\n  & > input {\n    color: ", ";\n    width: 90px;\n    width: calc(100% - 16px * 2 - 23px);\n    font-size: 16px;\n    border: none;\n  }\n"], ["\n  ", ";\n  padding: 0px 16px;\n  width: 207px;\n  height: 45px;\n  background: ", ";\n  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n\n  & > input {\n    color: ", ";\n    width: 90px;\n    width: calc(100% - 16px * 2 - 23px);\n    font-size: 16px;\n    border: none;\n  }\n"])), flexSpaceBetween, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.gray;
});
var CalendarContainer = function (_a, ref) {
    var className = _a.className, value = _a.value, onClick = _a.onClick, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsxs)(InputContainer, __assign({ onClick: onClick }, { children: [(0, jsx_runtime_1.jsx)("input", { className: className, type: "text", value: value, ref: ref, onChange: function (e) { return onChange(e.target.value); } }), (0, jsx_runtime_1.jsx)("img", { src: "/static/icons/icon-calendar.png", alt: "calendar-icon" })] })));
};
exports.default = (0, react_1.forwardRef)(CalendarContainer);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=CalendarContainer.js.map