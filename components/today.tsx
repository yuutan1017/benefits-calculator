export const today = () => {
  const today = new Date();
  let year = today.getFullYear();
  let month = ('00' + (today.getMonth() + 1)).slice(-2);
  let day = ('00' + today.getDate()).slice(-2);

  return { year, month, day };
};
