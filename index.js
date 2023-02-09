import { employees } from "./src/component/table/index.js";
import { pagination } from "./src/component/pagination/index.js";
employees();
const page = pagination();
console.log(page);
