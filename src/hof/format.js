export const price = (price) => `$${price}`;

export const percentage = (value) => {
  const percent = Number(value).toFixed(1);
  return `${percent}%`;
};
