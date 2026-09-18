

const moveNegativeEnd = (arr) => {
    let positive = [];
    let negative = [];
    for(let i =0 ; i < arr.length;i++){
        if(arr[i] < 0){
        negative.push(arr[i])
        }else{
        positive.push(arr[i]) 
        }
    }
    return [...positive,...negative]
}


const arr = [1, 3, 5, -2, -4, -6]

console.log(moveNegativeEnd(arr))