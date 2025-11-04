/**
 * Converts an array of strings to a comma-separated string
 * @param items - Array of strings to join
 * @param separator - Optional separator (defaults to ', ')
 * @returns Comma-separated string
 */
export const joinWithCommas = (
  items: string[],
  separator: string = ', '
): string => {
  if (!Array.isArray(items)) {
    console.warn(
      'joinWithCommas: Expected an array, received:',
      typeof items,
      items
    );
    return '';
  }

  const validItems = items.filter(
    (item) => typeof item === 'string' && item.trim() !== ''
  );

  return validItems.join(separator);
};