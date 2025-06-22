import React from "react";

const getStyleName = btn => {

        const className = {
            '=' : 'equals',
            'X': 'opt',
            '-': 'opt',
            '%': 'opt',
            '+': 'plus',
            '/': 'opt',
        }

        return className[btn]
}


const Button = ({ value }) => {

  const handleBtnClick = () => {
    console.log(value);
  }


  return <button 
  onClick={handleBtnClick}
  className={`${getStyleName(value)} button`}>{value}</button>;
};

export default Button;
