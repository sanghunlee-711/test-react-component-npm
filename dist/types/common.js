"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TDonationStatusKOR = exports.TDonationStatus = exports.Operator = exports.SortableOperator = void 0;
var SortableOperator;
(function (SortableOperator) {
    SortableOperator["ASC"] = "ASC";
    SortableOperator["DESC"] = "DESC";
})(SortableOperator = exports.SortableOperator || (exports.SortableOperator = {}));
var Operator;
(function (Operator) {
    Operator["EQ"] = "eq";
    Operator["NE"] = "ne";
    Operator["GT"] = "gt";
    Operator["GTE"] = "gte";
    Operator["LT"] = "lt";
    Operator["LTE"] = "lte";
    Operator["IN"] = "in";
    Operator["NIN"] = "nin";
    Operator["LIKE"] = "like";
})(Operator = exports.Operator || (exports.Operator = {}));
var TDonationStatus;
(function (TDonationStatus) {
    TDonationStatus["WAITING"] = "WAITING";
    TDonationStatus["SCHEDULED"] = "SCHEDULED";
    TDonationStatus["ONGOING"] = "ONGOING";
    TDonationStatus["INACTIVE"] = "INACTIVE";
    TDonationStatus["FINISHED"] = "FINISHED";
    TDonationStatus["FINISHED_WITH_INACTIVE"] = "FINISHED_WITH_INACTIVE";
})(TDonationStatus = exports.TDonationStatus || (exports.TDonationStatus = {}));
var TDonationStatusKOR;
(function (TDonationStatusKOR) {
    TDonationStatusKOR["\uC9C4\uD589 \uB300\uAE30"] = "\uC9C4\uD589 \uB300\uAE30";
    TDonationStatusKOR["\uC624\uD508 \uC608\uC815"] = "\uC624\uD508 \uC608\uC815";
    TDonationStatusKOR["\uC9C4\uD589 \uC911"] = "\uC9C4\uD589 \uC911";
    TDonationStatusKOR["\uC9C4\uD589 \uBCF4\uB958"] = "\uC9C4\uD589 \uBCF4\uB958";
    TDonationStatusKOR["\uC885\uB8CC"] = "\uC885\uB8CC";
    TDonationStatusKOR["\uC885\uB8CC(\uBE44\uB178\uCD9C)"] = "\uC885\uB8CC(\uBE44\uB178\uCD9C)";
})(TDonationStatusKOR = exports.TDonationStatusKOR || (exports.TDonationStatusKOR = {}));
//# sourceMappingURL=common.js.map