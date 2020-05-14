import { invert } from 'lodash';

export const getEnumKey = (enumType: Object = {}, value: string = ''): String | null => {
  const reverse: Object = invert(enumType);

  if (reverse[value] !== undefined) {
    return reverse[value];
  }

  return null;
};
