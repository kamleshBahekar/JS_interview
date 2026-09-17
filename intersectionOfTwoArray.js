const intersection = (a1,a2) =>{
   const a3 = a1.filter((num)=>{
   return a2.includes(num)
   })
 return [...new Set(a3)]
}

 
const arr1 = [1,3,2,4,2];
const arr2  = [2,2];
console.log(intersection(arr1,arr2))



