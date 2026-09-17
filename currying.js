

const sumTotal = (a) => (b) => (c) => (d) => a+b+c+d;
console.log(sumTotal(1)(2)(3)(4))



function sumTotal1(a){
    return function(b){
        return function(c){
            return function(d){
            return a+b+c+d
        }
        }
    }
}
console.log(sumTotal1(1)(2)(3)(4))




