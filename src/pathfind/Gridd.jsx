import React from 'react'
import './node.css'
const Gridd = (props) => {

  const {isFinish, isStart} = props;
   const extraClass = isFinish ? ' nodee-finish' : isStart ? 'nodee-start':'';
  
  
  return (
    <div className={`nodee ${extraClass}`}>
    
      
    </div>
  )
}

export default Gridd 
