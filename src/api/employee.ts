export const employeesData = async () => {
  const res = await fetch("../src/data.json").then((res) => res.json());
  return res;
};
