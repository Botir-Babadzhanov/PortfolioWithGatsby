import { useLocalStorage } from "core/hooks";
import React from "react";

const GlobalContext = React.createContext();

const AppProvider = ({ children }) => {
  const [store, setSote] = useLocalStorage("store");

  React.useEffect(() => {
    if (!store) setSote([]);
  }, []);

  const saveSettings = React.useCallback(
    (values) => {
      setSote(values);
    },
    [setSote]
  );

  return (
    <GlobalContext.Provider value={{ settings: store, saveSettings }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { AppProvider, GlobalContext };
