import { ActionDropdown, sortReducer } from "../../redux/reducer";
import { createAction, createStore } from "../../redux/reduxLike";
import View from "./View";

interface ICurrentQty {
  sortValue?: number;
}

export const dropdown = (storeDropdown) => {
  const dropdownEl: HTMLDivElement = document.querySelector("#dropdown");
  const sortByBig = (dataSortValue: number) =>
    storeDropdown.dispatch(
      createAction(ActionDropdown.SORTBYBIGLIST, { sortData: dataSortValue })
    );
  const sortBySmall = (dataSortValue: number) =>
    storeDropdown.dispatch(
      createAction(ActionDropdown.SORTBYSMALLLIST, {
        sortData: dataSortValue,
      })
    );
  dropdownEl.addEventListener("click", (e: Event) => {
    const target = e.target as HTMLLIElement;
    const dropdownArea = target.closest("#dropdown");
    const dataSortValue = Number(target.getAttribute("data-sort"));

    if (dropdownArea.classList.contains("clicked") && dataSortValue) {
      dataSortValue === 5
        ? sortBySmall(dataSortValue)
        : sortByBig(dataSortValue);
      dropdownEl.classList.remove("clicked"); //Todo 하드코딩
    } else {
      dropdownEl.classList.add("clicked");
    }
    View(storeDropdown.getState()); // 이러면 리덕스가 아님 ㅜㅜ
  });
};
