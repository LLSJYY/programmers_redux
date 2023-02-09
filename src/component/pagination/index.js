import { Action, reducer } from "../../redux/reducer.js";
import { createAction, createStore } from "../../redux/reduxLike.js";
import { state } from "../../store.js";

const firstBtn = document.getElementById("first-btn");
const lastBtn = document.getElementById("last-btn");
const pageList = document.getElementById("pagination");
export const pagination = () => {
  const store = createStore(reducer);
  const firstPage = () => store.dispatch(createAction(Action.FIRSTPAGE));
  const lastPage = () => store.dispatch(createAction(Action.LASTPAGE));

  store.subscribe(() => {
    state.count = store.getState();
  });
  document.querySelector("#pagination").addEventListener("click", (e) => {
    if (e.target.id === "first-btn") {
      firstPage();
    }
    if (e.target.id === "last-btn") {
      lastPage();
    }
  });
  pageList.innerHTML = `
  <button class="arrow" id="first-btn">first</button>
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
  <button class="arrow" id="last-btn">last</button>`;
};
