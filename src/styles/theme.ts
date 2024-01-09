export const customeMediaQuery = (minWidth: number): string =>
  `@media (min-width: ${minWidth}px)`;

export const media = {
  custom: customeMediaQuery,
  pc: customeMediaQuery(1024),
  tablet: customeMediaQuery(780),
  mobile: `@media (max-width: 779px)`,
};
