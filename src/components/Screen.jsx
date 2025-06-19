import React, { useContext } from 'react'
import CalcContext from '../context/CalcContext';

function Screen() {

    const {calc} = useContext(CalcContext);
  return (
    <div className='screen'>0123456789</div>
  )
}

export default Screen;