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

dropdown(storeDropdown, storePage);
pagination(storePage, storeDropdown);
table(storeDropdown, storePage);
storeDropdown.subscribe(() => ViewTable(storeDropdown, storePage));
storePage.subscribe(() => ViewTable(storeDropdown, storePage));
storeDropdown.subscribe(() => ViewPagination(storePage, storeDropdown));
storePage.subscribe(() => ViewPagination(storePage, storeDropdown));
