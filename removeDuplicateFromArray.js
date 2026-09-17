
const removeDuplicate = (arr) =>{
    return [...new Set(arr)];
}

const removeDuplicate1 = (arr) =>{
   return arr.filter((num,index,a) => a.indexOf(num) == index)
}
const arr = [1,2,3,4,5,1,3,4,5,6,7,5,7,8,1,2,3]
console.log(removeDuplicate(arr))
console.log(removeDuplicate1(arr))