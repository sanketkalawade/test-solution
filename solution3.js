// 3) Write a program to find if from a give string a palindrome can be made or not.

// Example:

// NINIT ---> There are two palindrome possible from it. NITIN and INTNI . So answer should be Yes

// NINATT ---> No palidrome is possible from it so answer should be No.

/* How i solved it:-
1)first created object which contains string letters as  key and frequency of character is value
  e.g:-"NINIT" = {N:2,I:2,T:1}
        "NINATT" = {N:2,I:1,A:1,T:2}
2)if characters with value 1 are more than 1 then palindrome is not possible 
  i.e from "NINATT" palindrome is not possible so ans: NO else YES*/


  const str = "NINIT";

  //first count the same and different characters
  function getFrequency(string) {
      let freq = {};
      for (let i=0; i<string.length;i++) {
          let character = string.charAt(i);
          if (freq[character]) {
            freq[character]++;
          } else {
            freq[character] = 1;
          }
      }
  
      return freq;
  }
  
  //console.log(getFrequency(str))
  let totalOddCount = 0;
  for(let key in getFrequency(str)){
    if(getFrequency(str)[key] === 1){
        totalOddCount +=1;    
    }
  }
  if(totalOddCount >1){
    console.log("NO")
  }else{
    console.log("YES")
  }