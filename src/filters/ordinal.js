const s = ["th", "st", "nd", "rd"];

module.exports = (number) => {
  const v = number % 100;
  return number + (s[(v - 20) % 10] || s[v] || s[0]);
};
