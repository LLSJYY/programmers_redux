import { ActionDropdown, Action } from "../../redux/reducer";
import { createAction, createStore } from "../../redux/reduxLike";
import View from "./View";

interface ICurrentQty {
  sortValue?: number;
}

export const dropdown = (storeDropdown, storePage) => {
  const dropdownEl: HTMLDivElement = document.querySelector("#dropdown");
  const sortByBigList = (dataSortValue: number) =>
    storeDropdown.dispatch(
      createAction(ActionDropdown.SORTBYBIGLIST, { sortData: dataSortValue })
    );
  const sortBySmallList = (dataSortValue: number) =>
    storeDropdown.dispatch(
      createAction(ActionDropdown.SORTBYSMALLLIST, {
        sortData: dataSortValue,
      })
    );
  const firstPage = () => {
    storePage.dispatch(createAction(Action.FIRSTPAGE));
  };
  const handleDropdownClick = (e: Event) => {
    const target = e.target as HTMLLIElement;
    const dropdownArea = target.closest("#dropdown");
    const dataSortValue = Number(target.getAttribute("data-sort"));

    if (dropdownArea.classList.contains("clicked") && dataSortValue) {
      dataSortValue === 5
        ? sortBySmallList(dataSortValue)
        : sortByBigList(dataSortValue);
      firstPage();
      dropdownEl.classList.remove("clicked"); //Todo 하드코딩
    } else {
      dropdownEl.classList.add("clicked");
    }
    View(storeDropdown.getState());
  };

  dropdownEl.addEventListener("click", handleDropdownClick);
};
