/*1]Reverse each words in sentence without using library function.
 e.g  input: "I Love my India"  output "India my Love I"  */ 

 const inputStr = 'I Love My India';
 const reverseArr = inputStr.split(" ").reverse();
 const reverseStr = reverseArr.toString().replace(/,/g," ")
 console.log(reverseStr);  
 