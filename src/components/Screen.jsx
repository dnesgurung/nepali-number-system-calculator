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
  <Textfit className="screen" max={50} mode="single">
    {formatNumber(calc.num ? calc.num : calc.res)}
    </Textfit>
)
};

export default Screen;
