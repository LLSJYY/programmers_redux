import { Action, reducer } from "../../redux/reducer.js";
import { createAction, createStore } from "../../redux/reduxLike.js";
export const pagination = () => {
  const store = createStore(reducer);
  let currPage = 0;
  store.subscribe(() => {
    currPage = store.getState();
  });
  const firstPage = () => store.dispatch(createAction(Action.FIRSTPAGE));
  const lastPage = () => store.dispatch(createAction(Action.LASTPAGE));

  firstPage();
  lastPage();
};
