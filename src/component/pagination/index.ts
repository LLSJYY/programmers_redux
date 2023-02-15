import { Action, reducer } from "../../redux/reducer";
import { createAction, createStore } from "../../redux/reduxLike";
import { storeDropdown } from "../dropdown/index";
import { employeesData } from "../../api/employee";

const store = createStore(reducer);

const totalEmployees = async (): Promise<[{}]> => {
  return await employeesData();
};
let state; ///Todo
let count;

const firstPage = () => store.dispatch(createAction(Action.FIRSTPAGE));
const lastPage = () => {
  store.dispatch(
    createAction(Action.LASTPAGE, {
      pageLength: Math.ceil(totalEmployees.length / count),
    })
  );
};

export const pagination = () => {
  paginationRender();
  document.querySelector("#pagination").addEventListener("click", (e: any) => {
    if (e.target.id === "first-btn") {
      firstPage();
    }
    if (e.target.id === "last-btn") {
      lastPage();
    }
  });
};

const paginationRender = () => {
  state = store.getState();
  count = storeDropdown.getState().count;
  let pageArr;
  if (count) {
    pageArr = Array.from(
      { length: Math.ceil(totalEmployees.length / count) },
      (_, i) => i + 1
    );
  } else {
    count = 5;
    pageArr = [1, 2, 3, 4, 5];
  }
  document.querySelector("#pagination").innerHTML = `
  <button class="arrow" id="first-btn">first</button>
  ${pageArr
    .map((el) => {
      if (el !== state.count) {
        return `<button>${el}</button>`;
      } else {
        return `<button style="color:red">${el}</button>`;
      }
    })
    .join(" ")}
  <button class="arrow" id="last-btn">last</button>`;
};
store.subscribe(paginationRender);
storeDropdown.subscribe(paginationRender);
