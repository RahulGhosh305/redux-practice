import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const COUNTER_CONTEXT = createContext();

// eslint-disable-next-line react/prop-types
const CounterContext = ({ children }) => {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount,
  };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      {children}
    </COUNTER_CONTEXT.Provider>
  );
};

export default CounterContext;

// eslint-disable-next-line react-refresh/only-export-components
export const useCounterContext = () => {
  return useContext(COUNTER_CONTEXT);
};
