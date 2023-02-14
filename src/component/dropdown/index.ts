import { ActionDropdown, sortReducer } from "../../redux/reducer";
import { createAction, createStore } from "../../redux/reduxLike";

export const storeDropdown = createStore(sortReducer);
const qtySelector = [5, 15];
const sortByBig = (dataSortValue) =>
  storeDropdown.dispatch(
    createAction(ActionDropdown.SORTBYBIGLIST, { sortData: dataSortValue })
  );
const sortBySmall = (dataSortValue) =>
  storeDropdown.dispatch(
    createAction(ActionDropdown.SORTBYSMALLLIST, {
      sortData: dataSortValue,
    })
  );

export const dropdown = () => {
  const dropdown = document.querySelector("#dropdown");
  document.querySelector("#dropdown").addEventListener("click", (e: Event) => {
    const target = e.target as HTMLLIElement;
    const dropdownArea = target.closest("#dropdown");
    const dataSortValue = target.getAttribute("data-sort");

    if (dropdownArea.classList.contains("clicked") && dataSortValue) {
      dataSortValue === "5"
        ? sortBySmall(dataSortValue)
        : sortByBig(dataSortValue);
      dropdown.classList.remove("clicked");
    } else {
      dropdown.classList.add("clicked");
    }
    dropdownRender();
  });
};

const dropdownRender = () => {
  const dropdown = document.querySelector("#dropdown");
  const currentQty = storeDropdown.getState();
  if (dropdown.classList.contains("clicked")) {
    document.querySelector("#dropdown").innerHTML = `
    <ul class="dropdown-menu" id="qty-selector">
     ${qtySelector
       .map((qty) => `<li data-sort="${qty}">${qty}개</li>`)
       .join("")}
    </ul>
    </div>
    `;
  } else {
    document.querySelector(
      "#dropdown"
    ).innerHTML = `<ul class="dropdown-menu">${currentQty.count}개씩</ul>`;
  }
};

storeDropdown.subscribe(dropdownRender);
