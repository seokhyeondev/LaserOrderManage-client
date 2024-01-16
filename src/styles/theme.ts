export const customeMediaQuery = (minWidth: number): string =>
  `@media (min-width: ${minWidth}px)`;

export const media = {
  custom: customeMediaQuery,
  pc: customeMediaQuery(1024),
  tablet: `@media (max-width: 1023px)`,
  mobile: `@media (max-width: 779px)`,
};
