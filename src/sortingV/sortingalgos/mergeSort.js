// The mergeSort function takes an array as input and returns a tuple containing the sorted array and an array of animations.

// const animations = []; - This initializes an empty array that will store the animations.

// The base case of the merge sort recursion is if (array.length <= 1), which checks if the array has only one element or is empty. In these cases, the array is already considered sorted, so it is returned as is.

// const auxiArr = array.slice(); - This creates a copy of the original array (array) using the slice() method. The auxiliary array (auxiArr) will be used in the merge process.

// The actual merge sort algorithm is performed by the merge1 function. It takes the original array (array), the lower index (low), the higher index (high), the auxiliary array (auxiArr), and the animations array (animations) as parameters.

// if (low === high) return; - This is the base case for the merge sort recursion. When low and high are the same, it means that the current subarray has only one element, so there's nothing to sort, and the function returns.

// const mid = Math.floor((low + high) / 2); - This calculates the middle index of the current subarray.

// merge1(auxiArr, low, mid, array, animations); - This recursively calls merge1 on the left half of the current subarray (from low to mid), swapping the roles of array and auxiArr to ensure the correct merge process.

// merge1(auxiArr, mid + 1, high, array, animations); - This recursively calls merge1 on the right half of the current subarray (from mid + 1 to high), again swapping the roles of array and auxiArr.

// merge2(array, low, mid, high, auxiArr, animations); - This is the merge step of the merge sort algorithm. It merges the two sorted halves of the array (low to mid and mid + 1 to high) using the auxiliary array (auxiArr). The result is stored back in the original array (array).

// The merge2 function takes the original array (array), the lower index (low), the middle index (mid), the higher index (high), the auxiliary array (auxiArr), and the animations array (animations) as parameters.

// The function uses three while loops to merge the subarrays. It compares the elements from both subarrays (auxiArr[i] and auxiArr[j]) and adds animations to the animations array to represent the comparison and swapping process.

// After merging the elements, the function updates the array with the sorted values.

// Finally, mergeSort returns the tuple [array, animations], where array is the sorted array, and animations is an array that stores the sequence of comparisons and swaps performed during the sorting process.

// The animations array is used in the mergeSsort function to apply visual animations, such as color changes and height changes, to the array bars in the user interface. Each animation in the animations array represents a step in the sorting process, and the mergeSsort function iterates over these animations to





// User
// what is the role of auxillary array

// ChatGPT
// The auxiliary array (auxiArr) in the merge sort algorithm plays a crucial role in the merging process. It serves as temporary storage for the merged subarrays during the sorting process. Here's how it works:

// In the merge sort algorithm, the array is divided into smaller subarrays recursively until each subarray has only one element or is empty. This division is done to reach the base case of the recursion.

// Once the subarrays are divided to their smallest size, the merge process begins to combine them in a sorted manner. This is where the auxiliary array comes into play.

// During the merging process, the original array (array) is split into two halves: the left half from the lower index (low) to the middle index (mid), and the right half from the middle index (mid + 1) to the higher index (high).

// The auxiliary array (auxiArr) is a temporary array that holds a copy of the original array at the beginning of each merge operation. It is used as a workspace for merging the subarrays.

// When merging the subarrays, the elements from the original array are compared and sorted into the auxiliary array according to their values.

// After the merge is complete, the sorted elements reside in the auxiliary array.

// Finally, the sorted elements in the auxiliary array are copied back to the original array (array), effectively updating it with the sorted order.



 function merge2(array,low,mid,high,auxiArr,animations){
  let k=low;   
 let i=low;
  let j=mid+ 1;
  while(i <=mid && j<=high){
    animations.push([i,j]);
    animations.push([i,j]);
    if(auxiArr[i]<=auxiArr[j]){
      animations.push([k,auxiArr[i]]);
      array[k++] = auxiArr[i++];
    }else{
      animations.push([k,auxiArr[j]]);
      array[k++] = auxiArr[j++];
    }
    
  }


  while(i<=mid){
    animations.push([i,i]);
    animations.push([i,i]);
    animations.push([k,auxiArr[i]]);
      array[k++] = auxiArr[i++];
  }
  while(j<=high){
    animations.push([j,j]);
    animations.push([j,j]);
    animations.push([k,auxiArr[j]]);
    array[k++] = auxiArr[j++];
 }
 
}
 

  function  merge1(array,low,high,auxiArr,animations){
  if(low===high) return;

    const mid = Math.floor((low + high)/2);
     merge1(auxiArr,low,mid,array,animations);
     merge1(auxiArr,mid+1,high,array,animations);
     merge2(array,low,mid,high,auxiArr,animations);
    
 }
 

 export function mergeSort(array){

   const animations = [];
   if(array.length<= 1) return array;
    const auxiArr = array.slice(); //creates a copy of original array
    merge1(array,0,array.length-1,auxiArr,animations);

   return [array,animations];
 }


 