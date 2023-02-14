// Reducer 정의
export const Action = {
  FIRSTPAGE: "FIRSTPAGE",
  LASTPAGE: "LASTPAGE",
  SELECTPAGE: "SELECTPAGE",
};

export const ActionDropdown = {
  SORTBYBIGLIST: "SORTBYBIGLIST",
  SORTBYSMALLLIST: "SORTBYSMALLLIST",
};

export const reducer = (state = {}, /* action */ { type, payload }) => {
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

export const sortReducer = (state = { count: 5 }, { type, payload }) => {
  switch (type) {
    case ActionDropdown.SORTBYBIGLIST:
      return {
        ...state,
        count: payload.sortData || 5,
      };
    case ActionDropdown.SORTBYSMALLLIST:
      return {
        ...state,
        count: payload.sortData || 5,
      };
    default:
      return { ...state };
  }
};
