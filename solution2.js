/*2] You have to write a program to transform input array into output array.
Refer to below example to figure out transformation rule
Input Array :  2,4,8,5,12,15,6,10,7,30,25,43,46,45,21
Output Array :  2,4,8, 12, 6, 7, 43,46,21, 5,15,10,30,25,45
Do not use duplicate or extra array.  
*/ 
const givenArr2 = [2,4,8,5,12,15,6,10,7,30,25,43,46,45,21];

const givenArrLength2 = givenArr2.length;
const lastElement = givenArr2[givenArrLength2-1];

for(let i = 0; i < givenArrLength2; i++){
 if(givenArr2[i]!== lastElement){
    while(givenArr2[i]%5 === 0 && givenArr2[i] !== lastElement){
      givenArr2.push(givenArr2[i]);
      givenArr2.splice(i,1)
    } 
 }
 if(givenArr2[i] === lastElement && givenArr2[i]%5 === 0){
      givenArr2.push(givenArr2[i]);
      givenArr2.splice(i,1);
      break;
 }
 if(givenArr2[i] === lastElement && givenArr2[i]%5 !== 0){
      break;
 }
  

}
console.log(givenArr2)
