import { employeesData } from "../../api/employee";

const View = async (storeDropdown, storePage) => {
  const data = await employeesData();
  const table = document.querySelector("#table");
  const sortValue = storeDropdown.getState().sortValue || 5;
  const count = storePage.getState().count || 1;
  console.log(count, sortValue);
  const tableHeader = Object.keys(data[0]);
  const selectedData = data.slice(
    (count - 1) * sortValue,
    (count - 1) * sortValue + sortValue
  );
  console.log(count * sortValue);
  console.log(selectedData);
  table.innerHTML = `
    <table>
    <thead>
        ${tableHeader.map((header) => `<th>${header}</th>`).join("")}
      </thead>
      <tbody>
          ${selectedData
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

export default View;
