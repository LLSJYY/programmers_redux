import { ActionDropdown, sortReducer } from "../../redux/reducer";
import { createAction, createStore } from "../../redux/reduxLike";
import { View } from "./View";

export const storeDropdown = createStore(sortReducer);

interface ICurrentQty {
  count?: number;
}
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

export const dropdown = () => {
  const dropdown: HTMLDivElement = document.querySelector("#dropdown");
  const currentQty: ICurrentQty = storeDropdown.getState();

  dropdown.addEventListener("click", (e: Event) => {
    const target = e.target as HTMLLIElement;
    const dropdownArea = target.closest("#dropdown");
    const dataSortValue = Number(target.getAttribute("data-sort"));

    if (dropdownArea.classList.contains("clicked") && dataSortValue) {
      dataSortValue === 5
        ? sortBySmall(dataSortValue)
        : sortByBig(dataSortValue);
      dropdown.classList.remove("clicked"); //Todo 하드코딩
    } else {
      dropdown.classList.add("clicked");
    }
    return View(currentQty);
  });
};

storeDropdown.subscribe(View);
