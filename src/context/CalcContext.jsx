import React, { createContext, useState } from "react";

export const CalcContext = createContext();

const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

const [numberSystem, setNumberSystem] = useState('en-US');

const toggleNumberSystem = () => {
  setNumberSystem(prev => prev === 'en-US' ? 'en-IN' : 'en-US')
}
  const providerValue = {
    calc,
    setCalc,
    numberSystem,
    toggleNumberSystem
  };

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
