import { employeesData } from "../../api/employee";
const View = async (storePage, storeDropdown) => {
  const totalEmployees = await employeesData();
  const sortValue = storeDropdown.getState().sortValue || 5;
  const count = storePage.getState().count || 1;
  let currPage;

  const pageArr = Array.from(
    { length: Math.ceil(totalEmployees.length / sortValue) },
    (_, i) => i + 1
  );
  console.log(count);
  if (count === totalEmployees.length) {
    currPage = Math.ceil(count / sortValue);
  } else {
    currPage = parseInt(count);
  }
  //리팩토링이 필요해보입니다..

  document.querySelector("#pagination").innerHTML = `
  <button class="arrow" id="first-btn">first</button>
  ${pageArr
    .map((el) => {
      if (el !== currPage) {
        return `<button id=${el}>${el}</button>`;
      } else {
        return `<button id=${el} style="color:red">${el}</button>`;
      }
    })
    .join(" ")}
  <button class="arrow" id="last-btn">last</button>`;
};

export default View;
