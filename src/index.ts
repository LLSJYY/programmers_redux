import { table } from "./component/table/index";
import { pagination } from "./component/pagination/index";
import { sortReducer, pageReducer } from "./redux/reducer";
import { createStore } from "./redux/reduxLike";
import ViewDropdown from "./component/dropdown/View";
import ViewPagination from "./component/pagination/View";
import ViewTable from "./component/table/View";
import { dropdown } from "./component/dropdown";
export const storeDropdown = createStore(sortReducer);
export const storePage = createStore(pageReducer);

// Initialize components
dropdown(storeDropdown, storePage);
pagination(storeDropdown, storePage);
table(storeDropdown, storePage);

// subscribe
storeDropdown.subscribe(() => {
  ViewTable(storeDropdown, storePage);
  ViewPagination(storePage, storeDropdown);
});

storePage.subscribe(() => {
  ViewTable(storeDropdown, storePage);
  ViewPagination(storePage, storeDropdown);
});
