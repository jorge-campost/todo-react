import { useEffect, useState } from "react";

function useLocalStorage(itemKey, initialState) {
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
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemKey, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
