.


/*
  Array methods - .slice()
  ------------------------
  The variable `firstFive` should contain the first five items of `everyone`
  The variable `lastFive` should contain the last five items of `everyone`
*/

var everyone = [
  "Daniel",
  "Irina",
  "Rares",
  "Rukmini",
  "Abdul",
  "Austine",
  "Swathi",
];

var firstFive = everyone.slice(0,4);       
var lastFive = everyone.slice(4,5);      
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(firstFive);
console.log(lastFive);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Rares", "Rukmini", "Abdul"]
  ["Rares", "Rukmini", "Abdul", "Austine", "Swathi"]
*/
