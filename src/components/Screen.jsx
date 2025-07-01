import React, { useContext } from "react";
import {CalcContext} from "../context/CalcContext";
import { Textfit } from "react-textfit";



const Screen = () => {
  const { calc , numberSystem} = useContext(CalcContext);

  const formatNumber = (num) => {
  const parsed = parseFloat(num);
  if (isNaN(parsed)) return num;
  return new Intl.NumberFormat(numberSystem).format(parsed);
}
  return (
    <div className="screen-container">
      <div className="solar-panel">
        <div className="solar-cell"></div>
        <div className="solar-cell"></div>
        <div className="solar-cell"></div>
        <div className="solar-cell"></div>
        <div className="solar-cell"></div>
      </div>


  <Textfit className="screen" max={50} mode="single">
    {formatNumber(calc.num ? calc.num : calc.res)}
    </Textfit>
    </div>
)
};

export default Screen;
