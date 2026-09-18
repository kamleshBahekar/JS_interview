const twoSum = (num,target) =>{
for(let i=0;i<num.length;i++){
    for(let j= i+1; j<num.length;j++){
        if(num[i]+ num[j] == target){
            return [i,j]
        }
    }
}
}
const num = [2,7,11,15];
const target = 9;
console.log(twoSum(num,target));

const num1 = [3,2,4];
const target1 = 6;
console.log(twoSum(num1,target1));

const num2 = [3,3];
const target2 = 6;
console.log(twoSum(num2,target2));

//Output
// [0, 1]
// [1, 2]
// [0, 1]

// using Map

const twoSum1 = (num,target)=>{
     let map = new Map()
    for(let i=0;i<num.length;i++){
       const compliment = target - num[i]
       if(map.has(compliment)){
        return [i, map.get(compliment)]
       }
       map.set(num[i],i)
    }

}
console.log(twoSum1(num,target));
console.log(twoSum1(num1,target1));
console.log(twoSum1(num2,target2));


