export interface ITableListType<T> {
    data?: T[];
    total?: number;
}
export declare type TSearchable = {
    property: string;
    value: string[] | string | [Date, Date] | Date;
    operator: Operator;
};
export declare type TSortable = {
    property: string;
    direction: SortableOperator;
};
export declare enum SortableOperator {
    ASC = "ASC",
    DESC = "DESC"
}
export declare enum Operator {
    EQ = "eq",
    NE = "ne",
    GT = "gt",
    GTE = "gte",
    LT = "lt",
    LTE = "lte",
    IN = "in",
    NIN = "nin",
    LIKE = "like"
}
export declare type ListType = {
    createdAt: string;
    email: string;
    name: string | null;
    status: string;
    updatedAt: string;
    userUid: string;
    userDetail: {};
    userStatus: {};
};
export declare enum TDonationStatus {
    WAITING = "WAITING",
    SCHEDULED = "SCHEDULED",
    ONGOING = "ONGOING",
    INACTIVE = "INACTIVE",
    FINISHED = "FINISHED",
    FINISHED_WITH_INACTIVE = "FINISHED_WITH_INACTIVE"
}
export declare enum TDonationStatusKOR {
    '진행 대기' = "\uC9C4\uD589 \uB300\uAE30",
    '오픈 예정' = "\uC624\uD508 \uC608\uC815",
    '진행 중' = "\uC9C4\uD589 \uC911",
    '진행 보류' = "\uC9C4\uD589 \uBCF4\uB958",
    '종료' = "\uC885\uB8CC",
    '종료(비노출)' = "\uC885\uB8CC(\uBE44\uB178\uCD9C)"
}
export declare type TSelectOption = {
    value: string;
    key: string;
    sortableOperator?: SortableOperator;
    searchableOperator?: Operator;
};
export declare type BasicButtonContainerMarginType = 11 | 28;
export declare type TSelectorArgs = {
    args: TSelectOption;
    name?: string;
};
export interface IGetExcelURLParams {
    pathName: string;
    id: number;
    idName: string;
    currentPage: number;
    pageViewCount: number;
}
