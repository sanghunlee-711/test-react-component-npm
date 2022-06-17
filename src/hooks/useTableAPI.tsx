import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {
  SortableOperator,
  TSearchable,
  TSelectOption,
  TSortable,
} from '../types/common';

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

export type TListResponse<ListType> = {
  _data: {
    content: ListType[];
    pageable: IPageable;
    total: number;
    pickupCount?: number;
  };
};
export type TNormalRespose<ListType> = {
  _statusCode: string;
  _message: string;
  _data: ListType;
};

export type TGoodsListResponse<ListType> = {
  _data: ListType[];
};

const useTableAPI = <ListType,>({
  params,
  path,
  pageArgs,
  handlePage,
}: IUseTableAPIProps): IReturnType<ListType> => {
  const [isSearching, setIsSearching] = useState(false);
  const [isQuery, setIsQuery] = useState<boolean>(false);
  const { currentPage, pageViewCount, tableSortOption } = pageArgs;

  // const { currentPage, pageViewCount, tableSortOption } = useRootState(
  //   (state) => state.tableReducer,
  // );

  const getListData = async (bodyArgs: IBodyArgs) => {
    const res: AxiosResponse<TListResponse<ListType>> = await axios.get(
      `${path}`,
      {
        params: {
          ...bodyArgs,
        },
      }
    );

    return res;
  };

  const {
    data: queryData,
    error: queryError,
    status,
    isFetching,
    refetch,
  } = useQuery(
    ['getListData', currentPage, pageViewCount, isSearching],
    () => {
      return getListData({
        ...params,
        pageable: {
          page: currentPage,
          size: +pageViewCount.key, // change soon
        },
        searchable: isSearching ? params?.searchable : [],
        sortable: [
          {
            property: tableSortOption.key,
            direction:
              tableSortOption.sortableOperator || SortableOperator.DESC,
          },
        ],
      });
    },
    {
      refetchOnWindowFocus: false,
      enabled: isQuery,
      retry: 1,
      onSuccess: (res) => {
        setIsQuery(false);
      },
      onError: (error: AxiosError) => {
        setIsQuery(false);
        alert(`데이터를 불러오는데 에러가 발생했습니다: ${error.message}`);
      },
    }
  );

  const onSearch = () => {
    handlePage(1);
    // dispatch(setCurrentPage(1));
    if (!isQuery) setIsQuery(true);
    if (!isSearching) setIsSearching(true);
  };

  const onCancelSearch = () => {
    if (!isQuery) setIsQuery(true);
    if (isSearching) setIsSearching(false);
  };

  const doRefetch = () => {
    setIsQuery(true);
    refetch();
  };

  useEffect(() => {
    if (!isQuery) setIsQuery(true);
  }, [tableSortOption, currentPage, pageViewCount]);

  return {
    state: {
      status,
      listData: queryData?.data._data.content,
      totalDataCount: queryData?.data._data.total,
      pickupCount: queryData?.data._data.pickupCount,
      listError: queryError,
      isFetching,
      isSearching,
      currentPage,
      pageViewCount: +pageViewCount.key,
    },
    actions: {
      onSearch,
      onCancelSearch,
      doRefetch,
      getDataWithCurrentState: () => {
        () => refetch();
      },
    },
  };
};

export default useTableAPI;
