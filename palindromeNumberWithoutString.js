

const paliNumWithoutString = (num) =>{
    if(num <0){
        return 'not palindrome'
    }
     if(num <10){
        return 'palindrome Number'
    }
    let digitsLeft = num
    let reverseNumber =0; 
    while(digitsLeft > 0){
       const lastDigit = digitsLeft % 10;
       digitsLeft = Math.floor(digitsLeft/10);
       reverseNumber = reverseNumber * 10 + lastDigit;
    }
    if(reverseNumber == num){
        return 'palindrome Number'
    }else {
        return 'not palindrome '
    }
}
console.log(paliNumWithoutString(121233))