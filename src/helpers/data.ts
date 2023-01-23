import { isUndefined } from 'lodash';

export const isValueExist = (value: any) => {
  if (isUndefined(value)) {
    return '';
  }

  return value;
};
