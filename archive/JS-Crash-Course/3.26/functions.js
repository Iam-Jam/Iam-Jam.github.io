
//recursive function
let Min = parseFloat(prompt("Enter Minimum Number"));
let Max = parseFloat(prompt("Enter Maximum Number"));

mySelf(Min, Max);

function mySelf(min, max) {
  if (min > max)
    return;
    
    if (min % 2 == 0)
      console.log(min);
      
    min++
    mySelf (min, max);
}