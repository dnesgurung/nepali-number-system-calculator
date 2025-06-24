import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    X: "opt",
    "-": "opt",
    "%": "opt",
    "+": "plus",
    "/": "opt",
  };

  return className[btn] || "";
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  // User click dot
  const handleDotClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  // User Click AC
  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };

  // user click number
  const handleNumberButton = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  // User click operation

  const handleSignClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  // User clicks equals

  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          X: (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  // user clicks percent
  const percentClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: '' 
    })

  }

  // user clicks C
  const handleClearClick = () => {
    const current = calc.num.toString();
    const newValue = current.length > 1 ? current.slice(0, -1) : "0";

    setCalc({
      ...calc,
      num: newValue,
    })
  }

  const handleBtnClick = () => {
    const results = {
      ".": handleDotClick,
      AC: resetClick,
      "/": handleSignClick,
      X: handleSignClick,
      "-": handleSignClick,
      "+": handleSignClick,
      "=": equalsClick,
      "%": percentClick,
      "C": handleClearClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleNumberButton();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
