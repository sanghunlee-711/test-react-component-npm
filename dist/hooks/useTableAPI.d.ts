import { TSearchable, TSelectOption, TSortable } from '../types/common';
export interface IPageable {
    page: number;
    size: number;
}
export interface IBodyArgs {
    searchable?: TSearchable[];
    pageable?: IPageable;
    sortable?: TSortable[];
}
interface IUseTableAPIProps {
    params?: IBodyArgs;
    path: string;
    handlePage: (page: number) => void;
    pageArgs: {
        currentPage: number;
        pageViewCount: TSelectOption;
        tableSortOption: TSelectOption;
    };
}
interface IReturnType<ListType> {
    state: {
        listData?: ListType[];
        listError?: unknown;
        totalDataCount?: number;
        pickupCount?: number;
        isFetching: boolean;
        isSearching: boolean;
        status: 'idle' | 'error' | 'loading' | 'success';
        currentPage: number;
        pageViewCount: number;
    };
    actions: {
        onSearch: () => void;
        onCancelSearch: () => void;
        getDataWithCurrentState: () => void;
        doRefetch: () => void;
    };
}
export declare type TListResponse<ListType> = {
    _data: {
        content: ListType[];
        pageable: IPageable;
        total: number;
        pickupCount?: number;
    };
};
export declare type TNormalRespose<ListType> = {
    _statusCode: string;
    _message: string;
    _data: ListType;
};
export declare type TGoodsListResponse<ListType> = {
    _data: ListType[];
};
declare const useTableAPI: <ListType>({ params, path, pageArgs, handlePage, }: IUseTableAPIProps) => IReturnType<ListType>;
export default useTableAPI;
