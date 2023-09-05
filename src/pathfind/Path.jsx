import React, { useState } from 'react'
import Gridd from './Gridd'
import { useEffect } from 'react';
import './pathfinder.css'
const Path = (props) => {
  
 const [nodess,setNodes] = useState([]);
  useEffect(()=>{
    const nodes = [];
    for(let row=0;row<15;row++){
     const currentrow = [];
     for(let col =0;col<50;col++){
      const currentNode = {
        col,
        row,
        isStart: row === 10 && col === 6,
        isFinish: row === 10 && col === 46,
        
      };
        currentrow.push(currentNode);
     }
     nodes.push(currentrow);
     
    }
    setNodes(nodes);
  },[]);
  
   
   
 
 
 
    return (
    <>

    <div className='wholebox'>

    {nodess.map((row, rowIdx) => {
  return (
    <div key={rowIdx}>
      {row.map((node, nodeIdx) => {
        const { isStart, isFinish } = node;
        return <Gridd key={nodeIdx} isStart={isStart} isFinish={isFinish} />;
      })}
    </div>
  );
})}



    </div>
    </>
  )
}

export default Path
