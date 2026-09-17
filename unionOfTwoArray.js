const getUnion = (a1,a2) =>{
  const a3  = [...a1,...a2]
 return [...new Set(a3)]
}
const arr1 = [1,3,2,4,2];
const arr2  = [2,2];
console.log(getUnion(arr1,arr2).sort())