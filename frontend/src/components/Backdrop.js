import React from 'react'
import './backdrop.css'
const Backdrop = ({show, toggleShow}) => {
  return (
    <>
    {show && <div className='backdrop' onClick={()=>toggleShow(false)}></div>}
    </>
  )
}

export default Backdrop