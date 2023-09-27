import React, { createContext, useState } from "react";

const ResultContext = createContext();

//created a context called ResultContext and also provided a resultprovider component which will wrap around the parts of my app that needs access to this context
const ResultProvider = ({ children }) => {
  const [result, setResult] = useState(null);

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export { ResultProvider, ResultContext };
