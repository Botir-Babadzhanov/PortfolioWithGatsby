import React from "react";

/**
 * Hook for managing local storage
 *
 * @param key the key to save in local storage
 * @param initialValue storage initial value
 */

export const useLocalStorage = (key, initialValue) => {
  const loadStore = () => {
    try {
      const serializedStore = localStorage.getItem(key);
      return serializedStore !== null ? JSON.parse(serializedStore) : undefined;
    } catch (e) {
      return undefined;
    }
  };

  const saveStore = (value) => {
    try {
      const serializedStore = JSON.stringify(value || initialValue);
      localStorage.setItem(key, serializedStore);
    } catch (e) {
      return new Error(e);
    }
  };

  const [store, setStore] = React.useState(loadStore());

  React.useEffect(() => {
    saveStore(store);
  }, [store, saveStore]);

  const removeStore = () => localStorage.removeItem(key);

  return [store, setStore, removeStore];
};
