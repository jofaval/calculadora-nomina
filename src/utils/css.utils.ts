export const joinClasses = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");
