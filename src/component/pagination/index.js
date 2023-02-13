import { Action, reducer } from "../../redux/reducer.js";
import { createAction, createStore } from "../../redux/reduxLike.js";

const store = createStore(reducer);

const firstPage = () => store.dispatch(createAction(Action.FIRSTPAGE));
const lastPage = () => store.dispatch(createAction(Action.LASTPAGE));

export const pagination = () => {
  paginationRender();
};

document.querySelector("#pagination").addEventListener("click", (e) => {
  if (e.target.id === "first-btn") {
    firstPage();
  }
  if (e.target.id === "last-btn") {
    lastPage();
  }
});

const paginationRender = () => {
  const state = store.getState();
  const sortByDropDown = [1, 2, 3, 4, 5];
  document.querySelector("#pagination").innerHTML = `
  <button class="arrow" id="first-btn">first</button>
  ${sortByDropDown
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
