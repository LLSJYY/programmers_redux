import { employeesData } from "../../api/employee.js";
export const employees = async () => {
  const data = await employeesData();
  const table = document.querySelector("#table");
  const tableHeader = Object.keys(data[0]);

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
