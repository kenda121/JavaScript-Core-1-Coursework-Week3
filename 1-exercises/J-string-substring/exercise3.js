/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let result = statement.substring(0, 4);

console.log(result);
let result2 = statement.substring(8);
console.log(result + result2);

console.log(result.concat(result2));

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
