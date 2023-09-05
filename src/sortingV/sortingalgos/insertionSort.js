export function insertionSort(array){

    let sortedArr = array.slice();
    let animations = [];
    for(let j=1;j<sortedArr.length;j++){
        let key = sortedArr[j];
        let i = j-1;
        animations.push([j,i]);
        animations.push([j,i]);
        while(i>-1 && sortedArr[i]>key){
            sortedArr[i+1] = sortedArr[i];
            animations.push([i,i+1]);
            animations.push([i,i+1]);
           
            i--;
          
        }
        sortedArr[i+1] = key;
        animations.push([i,i+1]);
        animations.push([i,i+1]);
       
     
    }


    return [sortedArr,animations];
}