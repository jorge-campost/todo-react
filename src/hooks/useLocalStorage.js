import { useEffect, useState } from "react";

function useLocalStorage(itemKey, initialState) {
  const [sincronizedItem, setSincronizedItem] = useState(true);
  const [item, setItem] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const itemFromStorage = localStorage.getItem(itemKey);
        let parsedItem;
        if (!itemFromStorage) {
          localStorage.setItem(itemKey, JSON.stringify(initialState));
          parsedItem = initialState;
        } else {
          parsedItem = JSON.parse(itemFromStorage);
        }
        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(true);
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemKey, JSON.stringify(newItem));
    setItem(newItem);
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return { item, saveItem, loading, error, sincronizeItem };
}

export { useLocalStorage };
