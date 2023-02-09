export const employeesData = () => {
  const res = fetch("../src/data.json").then((res) => res.json());
  return res;
};
