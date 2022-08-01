import * as React from 'react';

export type Selected = string[];

export type LocalStorage = Selected

type DataType = string | null;

function getStorageValue(key: string, defaultValue: LocalStorage) {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(key);
    const initialData = data !== null ? JSON.parse(data) : defaultValue;
    return initialData;
  }
}

export function getValue(key: string, value: LocalStorage) {
  const data: DataType = localStorage.getItem(key);
  let initialValue = undefined;

  if (data !== null) {
    initialValue = JSON.parse(data);
  }

  return initialValue || value;
}
 
export const useLocalStorage = (key: string, newValue: LocalStorage) => {
  let [value, setValue] = React.useState(() => {
    return getStorageValue(key, newValue);
  });
 
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
