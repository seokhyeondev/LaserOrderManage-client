export type DomainErrorSetTypeKey = 400 | 401 | 403 | 404 | 405 | 413 | 500;

export type DomainErrorSetType = {
  [key in DomainErrorSetTypeKey]: { [index: string]: string } | null;
};
