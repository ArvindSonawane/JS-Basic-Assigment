function sortByOccurences(arr) {
   
    let map = new Map();
    let count = 1;
    let len = arr.length;
    
    for (let i = 0; i < len; i++) {
        
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
     
        else {
            map.set(arr[i], count)
        }
    }
    
    let newArray = [...map];
    
    newArray.sort((a, b) => (b[0] - a[0]))
 
    newArray.sort((a, b) => (b[1] - a[1]))
    let result = newArray.map(x => x[0])
    return result;
}

let arr = [3, 3, 4, 4, 7, 8]
console.log(sortByOccurences(arr));