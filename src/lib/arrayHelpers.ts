// Take the first result of an array if exists, otherwise return the default value

import logger from '@/lib/logger';

export function firstOrDefault<T>(arr: T[], defaultValue: T): T {
  return arr.length > 0 ? arr[0] : defaultValue;
}

// Take the first result of an array
export function first<T>(arr?: T[] | null): T {
  if (!arr || arr.length === 0) {
    logger('Array is empty');
    return null as T;
  }
  return arr[0];
}

export type SingleOrMultiple<T> = T | T[];
