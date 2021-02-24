export const setTime = time => {
  const hours =
    new Date(time).getHours() < 10 ? `0${new Date(time).getHours()}` : new Date(time).getHours();
  const minutes =
    new Date(time).getMinutes() < 10
      ? `0${new Date(time).getMinutes()}`
      : new Date(time).getMinutes();

  return `${hours}:${minutes}`;
};

export const getDate = date => {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();

  return `${day}-${month}-${year}`;
};
