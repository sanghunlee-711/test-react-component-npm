import { DefaultTheme } from 'styled-components';

export interface ITableListType<T> {
  data?: T[];
  total?: number;
}
export type TColor = keyof DefaultTheme['colors'];
export type TImageFile = File | null | string;
export type TFonts = keyof DefaultTheme['fonts'];
// apps
export type TTextShadow = keyof DefaultTheme['textShadow'];

export type TSearchable = {
  property: string;
  value: string[] | string | [Date, Date] | Date;
  operator: Operator;
};

export type TSortable = {
  property: string;
  direction: SortableOperator;
};

export enum SortableOperator {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum Operator {
  EQ = 'eq',
  NE = 'ne',
  GT = 'gt',
  GTE = 'gte',
  LT = 'lt',
  LTE = 'lte',
  IN = 'in',
  NIN = 'nin',
  LIKE = 'like',
}

export type ListType = {
  createdAt: string;
  email: string;
  name: string | null;
  status: string;
  updatedAt: string;
  userUid: string;
  userDetail: {};
  userStatus: {};
};

export enum TDonationStatus {
  WAITING = 'WAITING', // 진행 대기
  SCHEDULED = 'SCHEDULED', // 오픈 예정
  ONGOING = 'ONGOING', // 진행 중
  INACTIVE = 'INACTIVE', // 진행 보류
  FINISHED = 'FINISHED', // 종료
  FINISHED_WITH_INACTIVE = 'FINISHED_WITH_INACTIVE', // 종료(비노출)
}
export enum TDonationStatusKOR {
  '진행 대기' = '진행 대기',
  '오픈 예정' = '오픈 예정',
  '진행 중' = '진행 중',
  '진행 보류' = '진행 보류',
  '종료' = '종료',
  '종료(비노출)' = '종료(비노출)',
}

export type TSelectOption = {
  value: string;
  key: string;
  sortableOperator?: SortableOperator;
  searchableOperator?: Operator;
};

export type BasicButtonContainerMarginType = 11 | 28;

export type TSelectorArgs = { args: TSelectOption; name?: string };

export interface IGetExcelURLParams {
  pathName: string;
  id: number;
  idName: string;
  currentPage: number;
  pageViewCount: number;
}
