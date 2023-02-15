// Reducer 정의
interface IStatePage {
  pageLength: number;
  count: number;
}
interface ISort {
  sortData: number;
  count: number;
}
interface IReducer<T> {
  state: { count: number };
  type: string;
  payload: T;
}
export const Action = {
  FIRSTPAGE: "FIRSTPAGE",
  LASTPAGE: "LASTPAGE",
  SELECTPAGE: "SELECTPAGE",
};

export const ActionDropdown = {
  SORTBYBIGLIST: "SORTBYBIGLIST",
  SORTBYSMALLLIST: "SORTBYSMALLLIST",
};

export const reducer = (
  state = { count: 1 },
  { type, payload }: IReducer<IStatePage>
) => {
  switch (type) {
    case Action.FIRSTPAGE:
      return {
        ...state,
        count: 1,
      };
    case Action.LASTPAGE:
      console.log(payload);
      return {
        ...state,
        count: payload.pageLength,
      };
    case Action.SELECTPAGE:
      return {
        ...state,
        count: payload.count,
      };
    default:
      return { ...state };
  }
};

export const sortReducer = (
  state = { sortValue: 5 },
  { type, payload }: IReducer<ISort>
) => {
  switch (type) {
    case ActionDropdown.SORTBYBIGLIST:
      return {
        ...state,
        sortValue: payload.sortData || 5,
      };
    case ActionDropdown.SORTBYSMALLLIST:
      return {
        ...state,
        sortValue: payload.sortData || 5,
      };
    default:
      return { ...state };
  }
};
