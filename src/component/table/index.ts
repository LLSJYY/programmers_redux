import { employeesData } from "../../api/employee";
import { storeDropdown } from "../dropdown/index";

export const employees = async () => {
  const qtySelector = storeDropdown.getState();
  const data = await employeesData();
  const table = document.querySelector("#table");
  const tableHeader = Object.keys(data[0]);
  const selectedData = data.slice(0, qtySelector);
  table.innerHTML = `
    <table>
    <thead>
        ${tableHeader.map((header) => `<th>${header}</th>`).join("")}
      </thead>
      <tbody>
          ${data
            .map((el) => {
              return ` <tr>  
              <td>${el.name}</td>
              <td>${el.title}</td>
              <td>${el.email}</td>
              <td>${el.role}</td>
            </tr>`;
            })
            .join("")} 
      </tbody>
  </table>
`;
};

storeDropdown.subscribe(employees);
