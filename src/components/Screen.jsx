import React, { useContext } from "react";
import {CalcContext} from "../context/CalcContext";
import { Textfit } from "react-textfit";

const formatNumber = (num) => {
  const parsed = parseFloat(num);
  if (isNaN(parsed)) return num;
  return new Intl.NumberFormat("en-US").format(parsed);
}

const Screen = () => {
  const { calc } = useContext(CalcContext);
  return (
  <Textfit className="screen" max={50} mode="single">
    {formatNumber(calc.num ? calc.num : calc.res)}
    </Textfit>
)
};

export default Screen;
