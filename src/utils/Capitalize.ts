export const capitalize = (phrase: string): string =>
  phrase
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim()
