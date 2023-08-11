export const getDateArray = (date) => {
  const today = new Date(date);
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const s = today.getSeconds();
  const m = today.getMinutes();
  const h = today.getHours();

  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  return [dd, mm, yyyy, h, m, s];
};

export const getDate = (unix_time) => {
  const date = new Date(unix_time * 1000);
  const [dd, mm, yyyy, h, m, s] = getDateArray(date);
  return `${yyyy}-${mm}-${dd}, ${h}:${m}`;
};

export const centToDollar = (cents) => {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
