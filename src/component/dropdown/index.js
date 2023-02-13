import { ActionDropdown, sortReducer } from "../../redux/reducer.js";
import { createAction, createStore } from "../../redux/reduxLike.js";

const store = createStore(sortReducer);

export const dropdown = () => {
  const dropdown = document.querySelector("#dropdown");
  document.querySelector("#dropdown").addEventListener("click", (e) => {
    const dataSortValue = e.target.getAttribute("data-sort");
    const sortByBig = () =>
      store.dispatch(
        createAction(ActionDropdown.SORTBYBIGLIST, { sortData: dataSortValue })
      );
    const sortBySmall = () =>
      store.dispatch(
        createAction(ActionDropdown.SORTBYSMALLLIST, {
          sortData: dataSortValue,
        })
      );

    if (
      e.target.closest(".area").classList.contains("clicked") &&
      dataSortValue
    ) {
      dataSortValue === "5" ? sortBySmall() : sortByBig();
      dropdown.classList.remove("clicked");
      console.log(store.getState());
    } else {
      dropdown.classList.add("clicked");
    }
    dropdownRender();
  });
};

const dropdownRender = () => {
  const dropdown = document.querySelector("#dropdown");
  if (dropdown.classList.contains("clicked")) {
    document.querySelector("#dropdown").innerHTML = `
    <ul class="dropdown-menu">
      <li id="sort-by-5" data-sort="5">5개씩</li>
      <li id="sort-by-15"data-sort="15">15개씩</li>
    </ul>
    </div>
    `;
  } else {
    document.querySelector("#dropdown").innerHTML = `<div>드롭다운</div>`;
  }
};
