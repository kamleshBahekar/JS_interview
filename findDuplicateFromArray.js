

const findDublicateFromArray = (arr) =>{
    let obj = {};
    for(let ele of arr){
        obj[ele] = (obj[ele] || 0) +1;
    }
   return obj;
}
const arr = ['a','b','c','d','a','c','d'];

console.log(findDublicateFromArray(arr))


