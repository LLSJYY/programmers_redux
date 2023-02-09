// Reducer 정의
export const Action = {
  FIRSTPAGE: "FIRSTPAGE",
  LASTPAGE: "LASTPAGE",
  SELECTPAGE: "SELECTPAGE",
};

export const reducer = (state = {}, /* action */ { type, payload }) => {
  switch (type) {
    case Action.FIRSTPAGE:
      return {
        ...state,
        count: 1,
      };
    case Action.LASTPAGE:
      return {
        ...state,
        count: 5,
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
