import { Action } from "../../redux/reducer";
import { createAction, createStore } from "../../redux/reduxLike";
import { employeesData } from "../../api/employee";
import View from "./View";

export const pagination = async (storePage, storeDropdown) => {
  const totalEmployees: [] = await employeesData();
  const firstPage = () => storePage.dispatch(createAction(Action.FIRSTPAGE));
  const lastPage = () => {
    storePage.dispatch(
      createAction(Action.LASTPAGE, {
        totalEmployees: totalEmployees.length,
      })
    );
  };
  const selectPage = (id) => {
    storePage.dispatch(
      createAction(Action.SELECTPAGE, {
        id,
      })
    );
  };

  document.querySelector("#pagination").addEventListener("click", (e: any) => {
    if (e.target.id === "first-btn") {
      return firstPage();
    }
    if (e.target.id === "last-btn") {
      return lastPage();
    }
    if (e.target.tagName === "BUTTON") {
      // TODO : TYPE CHECK
      return selectPage(e.target.id);
    }
  });
  View(storePage, storeDropdown);
};

// const paginationRender = () => {
//   state = store.getState();
//   count = storeDropdown.getState().sortValue;
//   let pageArr;
//   debugger;
//   if (count) {
//     pageArr = Array.from(
//       { length: Math.ceil([12, 3, 4, 5].length / count) },
//       (_, i) => i + 1
//     );
//   } else {
//     count = 5;
//     pageArr = [1, 2, 3, 4, 5];
//   }
//   console.log(pageArr, count);
//   document.querySelector("#pagination").innerHTML = `
//   <button class="arrow" id="first-btn">first</button>
//   ${pageArr
//     .map((el) => {
//       if (el !== state.count) {
//         return `<button>${el}</button>`;
//       } else {
//         return `<button style="color:red">${el}</button>`;
//       }
//     })
//     .join(" ")}
//   <button class="arrow" id="last-btn">last</button>`;
// };
