export const formattedDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const getOrdinal = (position: number): string => {
  const suffixes = ["th", "st", "nd", "rd"];
  const value = position % 100;

  const suffix = suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];

  return `${position}${suffix}`;
};
