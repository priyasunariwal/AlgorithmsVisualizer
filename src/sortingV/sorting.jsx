import React, { useState,useEffect } from "react";

import PropTypes from 'prop-types'
import {mergeSort} from "./sortingalgos/mergeSort.js";
import { insertionSort } from "./sortingalgos/insertionSort";

const Sorting = (props)=>{
    
   const ani_speed = 40;
   const no_of_bars = 15;
   const primary_colr = 'pink';
   const secondary_colr = 'yellow';

    const [arr,setArr] = useState([]);
    const randomIntFromInterval = (min,max)=>{
           return Math.floor(Math.random() * (max-min + 1) + min);
    }
    const update = ()=>{
        const Uarr = [];
        for(let i=0;i<no_of_bars;i++){
          
            Uarr.push(randomIntFromInterval(5,1000));
       
        }
           
        setArr(Uarr);
    }
    useEffect(()=>{
        update();
      },[])
    

     

// 1. `const [sortedArr, animations] = mergeSort(arr);` - This line invokes the `mergeSort` function, which returns a sorted array (`sortedArr`) and an array of animations (`animations`). It uses array destructuring to assign the values to the respective variables.

// 2. The `for` loop iterates over each animation in the `animations` array. Each animation consists of two indices representing the array bars that need to be animated.

// 3. `const arraybars = document.getElementsByClassName('arr-b');` - This line selects all the elements with the class name `'arr-b'`, which are the array bars.

// 4. `const isColorChange = i % 3 !== 2;` - This condition checks if the current animation is a color change animation (`isColorChange` is `true`) or a height change animation (`isColorChange` is `false`).

// 5. If `isColorChange` is `true`, the color change animation is applied. It retrieves the style properties of the two bars involved in the animation and sets their background color to either `secondary_colr` or `primary_colr` based on the value of `i % 3`.

// 6. If `isColorChange` is `false`, the height change animation is applied. It retrieves the style property of the bar and sets its height to the new height value (`newH`), obtained from the `animations` array.

// 7. The `setTimeout` function is used to apply the animations with a delay. The delay is determined by `i * ani_speed`, which increases with each iteration of the loop.

// 8. After all the animations have been applied, another `setTimeout` function is used to update the state of the array (`setArr(sortedArr)`) with the sorted array after a delay of `animations.length * ani_speed`. This ensures that the state update happens after all the animations have completed.

      const mergeSsort = () => {
        const [sortedArr, animations] = mergeSort(arr);
      
        for (let i = 0; i < animations.length; i++) {
          const arraybars = document.getElementsByClassName('arr-b');
          const isColorChange = i % 3 !== 2;
      
          if (isColorChange) {
            const [barOne, barTwo] = animations[i];
            const barOneStyle = arraybars[barOne].style;
            const barTwoStyle = arraybars[barTwo].style;
            const color = i % 3 === 0 ? secondary_colr : primary_colr;
      
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ani_speed);
          } else {
            setTimeout(() => {
              const [barOne, newH] = animations[i];
              const barOneStyle = arraybars[barOne].style;
              barOneStyle.height = `${newH}px`;
            }, i * ani_speed);
          }
        }
      
        setTimeout(() => {
          setArr(sortedArr);
        }, animations.length * ani_speed);
      };
    
      

      //insertion sort

      const swapElements = (i, j) => {
        //the spread operator (...arr) is used to create a shallow copy of the arr state variable.
        //The spread operator is a JavaScript syntax that allows you to expand an iterable object (such as an array) into individual elements. When used in the context of an array, it can be used to create a new array with the same elements as the original array.
        const newArray = [...arr];
    
        const temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    
        setArr(newArray);
      };
    
      const insertSort = () => {
        const [sortedArr, animations] = insertionSort(arr);
      //To iterate through the animations and apply the swapping effect, a separate variable animationIndex is initialized to keep track of the current animation index. Then, a recursive function named animateSort is defined.
        let animationIndex = 0;
    
        const animateSort = () => {
          //Inside the animateSort function, it checks if the animationIndex is greater than or equal to the length of animations, which indicates that all the animations have been applied. In that case, the sorted array is set as the new state using setArr, which triggers a re-render and updates the displayed array bars on the screen.
          if (animationIndex >= animations.length) {
            setArr(sortedArr);
            return;
          }
    
          const [firstIndex, secondIndex] = animations[animationIndex];
    
          swapElements(firstIndex, secondIndex);
    
          animationIndex++;
          //After the swapping, the animationIndex is incremented, and a setTimeout function is used to delay the next iteration of the animateSort function by ani_speed milliseconds. This creates a visual effect of swapping the array bars over time.
          setTimeout(animateSort, ani_speed);
        };
    
        animateSort();
      };
    return(
        <>
       <div className="mainy">
        <button type="button" onClick={update} className="btn btn-warning" style={{right:'50%'}}>Random array</button>
        <button type="button" onClick={insertSort} className="btn btn-outline-info">Insertion sort</button>
        <button type="button"className="btn btn-outline-info">Bubble sort</button>
        <button type="button"  onClick={mergeSsort} className="btn btn-outline-info">Merge sort</button>
        <button type="button" className="btn btn-outline-info">Heap sort</button>

       <div className="contain">
       
          {arr.map((value,idx) =>{
             return <div className='arr-b' key={idx} style={{height:`${value}px`}}>
                {value}
              </div>
               })}
               </div>
               </div>
        </>
    );
}
 
Sorting.propTypes = {
     arr: PropTypes.arrayOf(PropTypes.number),
} 


export default Sorting 