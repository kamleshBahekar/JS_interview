

const compareArray = (arr1,arr2) => {
 const is_same = arr1.length == arr2.length && arr1.every((curElement) =>{
    if(arr2.indexOf(curElement) > -1){
        return (curElement = arr2[arr2.indexOf(curElement)]);
    }
 })
 if(is_same){
    return `Two Array is same`
 }else {
     return `Two Array is not same`
 }


}



const arr1 = [1,2,3,4];
const arr2 =[4,2,3,1];

console.log(compareArray(arr1,arr2))