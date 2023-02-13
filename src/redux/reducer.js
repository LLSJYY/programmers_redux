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
        count: state.count + 1 || 1,
      };
    case Action.LASTPAGE:
      return {
        ...state,
        count: state.count - 1 || 1,
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

export const sortReducer = (state = {}, { type, payload }) => {
  debugger;

  switch (type) {
    case ActionDropdown.SORTBYBIGLIST:
      return {
        ...state,
        count: state.count * payload.sortData || 1,
      };
    case ActionDropdown.SORTBYSMALLLIST:
      return {
        ...state,
        count: state.count * payload.sortData || 1,
      };
    default:
      return { ...state };
  }
};
