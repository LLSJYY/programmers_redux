import { ActionDropdown, sortReducer } from "../../redux/reducer.js";
import { createAction, createStore } from "../../redux/reduxLike.js";

const store = createStore(sortReducer);
const qtySelector = [5, 15];
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
  const currentQty = store.getState();
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
