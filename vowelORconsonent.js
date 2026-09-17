 

 const vowelOrconsonent = (str) =>{
    str = str.toLowerCase()
   if(str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u'){
    return ` ${str} is vowel `
   }else {
    return ` ${str} is consonent `
   }
 }

 console.log(vowelOrconsonent('A'))