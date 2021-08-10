import { createContext, useState } from "react";

export const queryContext = createContext();

export const QueryProvider = (props) => {
  const [query, setQuery] = useState("");

  return (
    <queryContext.Provider value={{ query, setQuery }}>
      {props.children}
    </queryContext.Provider>
  );
};
